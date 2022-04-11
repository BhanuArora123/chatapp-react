import { Box, Typography } from "@mui/material";
import { MoreHoriz, Person, Phone, Search, VideoCall } from "@mui/icons-material"
import { useSelector } from "react-redux";
import Modal from "../Modals/Modal";
import { useRef, useState } from "react";
import CallLayout from "./CallLayout";
import { emitEvent, getSocket } from "../../../utils/socketConn";
import connectToPeer from "../../../utils/peerConn";
const MessageBar = props => {
    const chatData = useSelector(state => state.chat);
    const groupData = useSelector(state => state.group);
    const authData = useSelector(state => state.auth);
    let chatType = props.chatType;
    let [videoElements, setVideoElements] = useState([]);
    console.log(videoElements);
    let peerid;
    const parser = new DOMParser();
    const [open, setOpen] = useState(false);
    const [callData, setCallData] = useState();
    const acceptCall = () => {
        if (callData) {
            emitEvent("call-accepted", callData);
        }
    }
    // answer the call if called by other user
    let socketIo = getSocket();
    if (socketIo) {
        socketIo.off("someone-called");
        socketIo.on("someone-called", async (data) => {
            let peerConn = connectToPeer();
            peerConn.on("open", (id) => {
                navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true
                })
                    .then((stream) => {
                        peerConn.on("call", (call) => {
                            console.log("I am called");
                            call.answer(stream);
                            call.on("stream", (otherUserStream) => {
                                // console.log(otherUserStream);
                                let videoEle = document.createElement("video");
                                addVideoStream(videoEle, otherUserStream);
                            })
                        })
                        socketIo.emit("call-accepted", { ...data, id: id })
                        setOpen(true);
                    })
            })
        })
    }
    const addVideoStream = (video, stream) => {
        const videoGrid = document.getElementById("video-grid");
        video.srcObject = stream;
        video.addEventListener("loadedmetadata", () => {
            video.play();
            video.style.width="250px";
            video.style.height = "250px";
            videoGrid.append(video);
        });
    };
    console.log("video call elements");
    console.log(videoElements);
    const callAPerson = () => {
        // show the pop up
        setOpen(!open);
        // create a new peer connection
        let peerConn = connectToPeer();
        peerConn.on("open", (id) => {
            peerid = id;
            emitEvent("user-called", {
                email: chatData.currentEmail,
                id: id,
                roomId: "someid",
                callerEmail: authData.userData.email,
                callerName: authData.userData.name,
                callerPic: authData.userData.profilePic,
            });
        })
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(stream => {
            const video = document.createElement("video");
            addVideoStream(video, stream);
            peerConn.on("call", (call) => {
                console.log("I am called");
                call.answer(stream);
                call.on("stream", (otherUserStream) => {
                    // console.log(otherUserStream);
                    let videoEle = document.createElement("video");
                    addVideoStream(videoEle, otherUserStream);
                })
            })
            socketIo.on("user-accepted", (data) => {
                console.log("i m call");
                console.log(data.id);
                const call = peerConn.call(data.id, stream);
                call.on("stream", (otherUserStream) => {
                    console.log(otherUserStream);
                    let videoEle = document.createElement("video");
                    addVideoStream(videoEle, otherUserStream);
                })
            })
        })
        // send a event through websockets to the server for other person to connect
    }
    const handleClose = (e) => {
        e.stopPropagation();
        setOpen(false);
    }
    return (
        <Box sx={ {
            width: "100%",
            height: "88px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            color: "white",
            borderBottom: "0.1px solid gray"
        } }>
            <Box sx={ {
                width: "60%",
                height: "100%",
                display: "flex",
                alignItems: "center"
            } }>
                <img width="50px" height="50px" src={ props.image } alt="contact" style={ {
                    borderRadius: "50%"
                } }></img>
                <Typography sx={ {
                    margin: "10px"
                } } variant="body1">{ chatType === "groups" ? groupData.groupName : chatData.currentUserName }</Typography>
            </Box>
            <Box sx={ {
                width: "30%",
                height: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
            } }>
                <Search></Search>
                <Phone onClick={ callAPerson } sx={ {
                    cursor: "pointer"
                } }></Phone>
                <VideoCall></VideoCall>
                <Person></Person>
                <MoreHoriz></MoreHoriz>
            </Box>
            <Modal open={ open } handleClose={ handleClose }>
                <Box sx={ {
                    width: "40%",
                    height: "360px",
                    backgroundColor: "#272c3b",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                } }>
                    <CallLayout name="Bhanu Arora" status="Calling..." acceptCall={ acceptCall } callingData={ callData }>

                    </CallLayout>
                    <div id="video-grid">

                    </div>
                </Box>
            </Modal>
        </Box>
    )
}
export default MessageBar;


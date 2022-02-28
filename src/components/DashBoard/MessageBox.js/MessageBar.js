import { Box, Typography } from "@mui/material";
import { MoreHoriz, Person, Phone, Search, VideoCall } from "@mui/icons-material"
import { useSelector } from "react-redux";

const MessageBar = props => {
    const chatData = useSelector(state => state.chat);
    const groupData = useSelector(state => state.group);
    let chatType = props.chatType;
    return (
        <Box sx={{
            width : "100%",
            height : "88px",
            display : "flex",
            justifyContent : "space-evenly",
            alignItems : "center",
            color : "white",
            borderBottom : "0.1px solid gray"
        }}>
            <Box sx={{
                width : "60%",
                height : "100%",
                display : "flex",
                alignItems : "center"
            }}>
                <img width="50px" height="50px" src={props.image} alt="contact" style={{
                    borderRadius : "50%"
                }}></img>
                <Typography sx={{
                    margin : "10px"
                }} variant="body1">{chatType === "groups"?groupData.groupName:chatData.currentUserName}</Typography>
            </Box>
            <Box sx={{
                width : "30%",
                height : "100%",
                display : "flex",
                justifyContent : "space-evenly",
                alignItems : "center"
            }}>
                <Search></Search>
                <Phone></Phone>
                <VideoCall></VideoCall>
                <Person></Person>
                <MoreHoriz></MoreHoriz>
            </Box>
        </Box>
    )
}
export default MessageBar;
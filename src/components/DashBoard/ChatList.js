import { InputAdornment } from "@material-ui/core"
import { Search } from "@mui/icons-material"
import { Box, makeStyles, TextField, Typography } from "@mui/material"
import { FormControl, InputGroup } from "react-bootstrap";
import Chat from "./Chats/Chat";
const style = {
    multilineColor: {
        color: "white",
        backgroundColor: "rgb(54,53,52)"
    }
};
const ChatList = props => {
    const chats = [
        {
            name: "Contact1",
            desc: "loremkdkkd dkkdsieiie ddfid",
            lastMessageTime: "2:50"
        },
        {
            name: "Contact2",
            desc: "loremkdkkd dkkdsieiie ddfid",
            lastMessageTime: "2:50"
        },
        {
            name: "Contact3",
            desc: "loremkdkkd dkkdsieiie ddfid",
            lastMessageTime: "2:50"
        },
        {
            name: "Contact4",
            desc: "loremkdkkd dkkdsieiie ddfid",
            lastMessageTime: "2:50"
        },
    ];
    return (
        <Box sx={ {
            width: "30%",
            height: "600px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
            color: "white"
        } }>
            <Typography variant="h5" sx={ {
                width: "90%",
                height: "30px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
            } }>Chat</Typography>
            <InputGroup className="mb-3" style={ {
                width: "90%",
                height: "40px",
                backgroundColor: "rgb(54,53,52)",
                color: "white",
                display: "flex"
            } }>
                <div style={ {
                    width: "10%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                } }>
                    <Search sx={ {
                        margin: "auto"
                    } }></Search>
                </div>
                <FormControl
                    placeholder="Search Chats"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    style={ {
                        width: "80%",
                        height: "40px",
                        backgroundColor: "rgb(54,53,52)",
                        color: "white",
                        outline: "none",
                        border: "none",
                        padding: 0
                    } }
                />
            </InputGroup>
            <Box sx={ {
                height: "70%",
                width: "90%"
            } }>
                {
                    chats.map(chat => {
                        return (
                            <Chat { ...chat }></Chat>
                        )
                    })
                }
            </Box>
        </Box>
    )
}
export default ChatList;
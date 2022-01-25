import { Box } from "@mui/material"
import Message from "../Chats/Message";
import "../scrollbarCSS.css";
const MessageBox = props => {
    const messages = [
        {
            senderName : "name1",
            message : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dolor fugiat quos maxime quidem reiciendis quaerat eos soluta ex necessitatibus?",
            messageDateTime : "2021-04-22T02:00:00.0Z",
            email : "test@gmail.com"
        },
        {
            senderName : "name2",
            message : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dolor fugiat quos maxime quidem reiciendis quaerat eos soluta ex necessitatibus?",
            messageDateTime : "2021-04-22T02:00:00.0Z",
            email : "test1@gmail.com"
        },
        {
            senderName : "name3",
            message : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dolor fugiat quos maxime quidem reiciendis quaerat eos soluta ex necessitatibus?",
            messageDateTime : "2021-04-22T02:00:00.0Z",
            email : "test2@gmail.com"
        }
    ]
    return (
        <Box sx={{
            width : "100%",
            height : "72%",
            overflowY : "scroll"
        }} className="scrollElement">
            {
            messages.map((message) => {
                return(
                    <Box sx={{
                        width : "100%",
                        height : "220px",
                        display : "flex",
                        justifyContent : message.email === "test@gmail.com" ? "flex-end" : "flex-start",
                        alignItems : "center"
                    }}>
                        <Message {...message} bgColor={message.email === "test@gmail.com" ? "lightGreen" : "black"} textColor={message.email === "test@gmail.com" ? "black" : "white"}/>
                    </Box>
                )
            })
            }
        </Box>
    )
}
export default MessageBox;
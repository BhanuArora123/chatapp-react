import { Box } from "@material-ui/core"
import { VideoCall } from "@mui/icons-material";
import { Typography } from "@mui/material";
import MessageBar from "./MessageBox.js/MessageBar";
import MessageBox from "./MessageBox.js/MessageBox";
import SentMessage from "./MessageBox.js/SentMessage";

const ChatBox = props => {
    return (
        <Box sx={{
            width : "66%",
            height : "100%",
            backgroundColor : "rgb(41,40,40)"
        }}>
            <MessageBar name={props.name} image={props.image}></MessageBar>
            <MessageBox></MessageBox>
            <SentMessage></SentMessage>
        </Box>
    )
}
export default ChatBox;
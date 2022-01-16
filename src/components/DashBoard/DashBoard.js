import { Box } from "@mui/material";
import ChatBox from "./ChatBox";
import ChatList from "./ChatList";
import SideBar from "./Sidebar"
import logo from "../../logo.png";
const DashBoard = props => {
    return (
        <Box sx={{
            width : "100%",
            height : "600px",
            display : "flex",
            justifyContent:"flex-start",
            alignItems : "center",
            backgroundColor : "rgb(33,33,33)"
        }}>
            <SideBar></SideBar>
            <ChatList></ChatList>
            <ChatBox name="Contact" image={logo}></ChatBox>
        </Box>
    )
}

export default DashBoard;
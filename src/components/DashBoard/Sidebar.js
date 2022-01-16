import { MenuItem } from "@mui/material"
import logo from "../../logo.png";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import GroupIcon from '@mui/icons-material/Group';
import ContactsIcon from '@mui/icons-material/Contacts';
import SettingsIcon from '@mui/icons-material/Settings';
import LightModeIcon from '@mui/icons-material/LightMode';
import classes from "./Sidebar.module.css";
const SideBar = props => {
    return (
        <div className={classes.menu}>
            <MenuItem sx={{
                width : "70px",
                height : "70px",
                color : "white",
                display : "flex",
                justifyContent : "center",
                alignItems : "center"
            }}>
                <img width="30px" height="30px" src={ logo } alt="chitchat"></img>
            </MenuItem>
            <MenuItem sx={{
                width : "70px",
                height : "70px",
                color : "white",
                display : "flex",
                justifyContent : "center",
                alignItems : "center"
            }}>
                <PermIdentityIcon sx={{
                    width : "30px",
                    height : "30px"
                }}></PermIdentityIcon>        
            </MenuItem>
            <MenuItem sx={{
                width : "70px",
                height : "70px",
                color : "white",
                display : "flex",
                justifyContent : "center",
                alignItems : "center"
            }}>
                <ChatBubbleIcon sx={{
                    width : "30px",
                    height : "30px"
                }} />       
            </MenuItem>
            <MenuItem sx={{
                width : "70px",
                height : "70px",
                color : "white",
                display : "flex",
                justifyContent : "center",
                alignItems : "center"
            }}>
                <GroupIcon sx={{
                    width : "30px",
                    height : "30px"
                }} />       
            </MenuItem>
            <MenuItem sx={{
                width : "70px",
                height : "70px",
                color : "white",
                display : "flex",
                justifyContent : "center",
                alignItems : "center"
            }}>
                <ContactsIcon sx={{
                    width : "30px",
                    height : "30px"
                }} />       
            </MenuItem>
            <MenuItem sx={{
                width : "70px",
                height : "70px",
                color : "white",
                display : "flex",
                justifyContent : "center",
                alignItems : "center"
            }}>
                <SettingsIcon sx={{
                    width : "30px",
                    height : "30px"
                }} />       
            </MenuItem>
            <MenuItem sx={{
                width : "70px",
                height : "70px",
                color : "white",
                display : "flex",
                justifyContent : "center",
                alignItems : "center"
            }}>
                <LightModeIcon sx={{
                    width : "30px",
                    height : "30px"
                }} />       
            </MenuItem>
            <MenuItem sx={{
                width : "70px",
                height : "70px",
                color : "white",
                display : "flex",
                justifyContent : "center",
                alignItems : "center"
            }}>
                <img width="30px" height="30px" src={logo} alt="profile icon"></img>
            </MenuItem>
        </div>
    )
}

export default SideBar;
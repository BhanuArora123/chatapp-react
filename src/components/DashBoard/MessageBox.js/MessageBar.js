import { Box, Typography } from "@mui/material";
import { MoreHoriz, Person, Phone, Search, VideoCall } from "@mui/icons-material"

const MessageBar = props => {
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
                }} variant="body1">{props.name}</Typography>
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
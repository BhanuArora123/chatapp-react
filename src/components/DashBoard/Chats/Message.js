import { Box, Typography } from "@mui/material";
const Message = props => {
    return (
        <Box sx={{
            width : "60%",
            height : "200px",
            backgroundColor : props.bgColor,
            color : props.textColor,
            padding : "20px",
            boxSizing : "border-box",
            margin : "20px",
            borderRadius : "5px"
        }}>
            <Typography variant="body1" sx={{
                width : "100%",
                height : "20%",
                display : "flex",
                justifyContent : "flex-start",
                alignItems : "center",
                textTransform : "capitalize",
                fontWeight : "bold"
            }}>{props.senderName}</Typography>
            <Typography sx={{
                width : "100%",
                height : "70%",
                display : "flex",
                justifyContent : "flex-start",
                textAlign : "left",
                alignItems : "center"
            }}>{props.message}</Typography>
            <Typography sx={{
                width : "100%",
                height : "10%",
                display : "flex",
                justifyContent : "flex-end",
                alignItems : "center"
            }}>{props.messageDateTime}</Typography>
        </Box>
    )
}
export default Message;
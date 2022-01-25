import { makeStyles } from "@material-ui/core";
import { EmojiEmotions, FileUpload, Image, Send } from "@mui/icons-material";
import { Box, Button } from "@mui/material"
import { FormControl, InputGroup } from "react-bootstrap";
const useStyles = makeStyles({
    button : {
        "&:hover":{
            backgroundColor : "lightgreen"
        }
    }
})
const SentMessage = props => {
    const styling = useStyles();
    return (
        <Box sx={{
            width : "100%",
            height : "80px",
            borderTop : "0.1px solid gray",
            display : "flex",
            justifyContent : "space-between",
            alignItems : "center",
            color : "white"
        }}>
            <InputGroup className="mb-3" style={{
                width : "60%",
                height : "100%",
                display : "flex",
                justifyContent : "center",
                alignItems : "center"
            }}>
                <FormControl style={{
                    backgroundColor : "rgb(56,56,56)",
                    color : "gray",
                    outline : "none",
                    width : "90%",
                    height : "40px",
                    border : "none",
                    paddingLeft : "10px"
                }}
                    placeholder="Enter Message..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <Box sx={{
                display : "flex",
                justifyContent : "space-evenly",
                alignItems : "center",
                width : "40%",
                height : "100%"
            }}>
                <EmojiEmotions></EmojiEmotions>
                <FileUpload></FileUpload>
                <Image></Image>
                <Button variant="contained" sx={{
                    backgroundColor : "lightgreen"
                }} className={styling.button}>
                    <Send sx={{
                        color : "black"
                    }}></Send>
                </Button>
            </Box>
        </Box>
    )
}
export default SentMessage;
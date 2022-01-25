import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Image } from "react-bootstrap";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from "../../logo.png";
import MenuBar from "./MenuItem/Menu";
const Profile = props => {
    return (
        <Box sx={{
            width : "30%",
            height : "100%",
            display : "flex",
            justifyContent : "space-around",
            alignItems :"center",
            flexDirection : "column",
            color : "white",
            overflow:"scroll"
        }} className="scrollElement">
            <Box sx={{
                width : "90%",
                height : "15%",
                display : "flex",
                justifyContent : "space-between",
                alignItems : "center"
            }}>
                <Typography variant="h5">My Profile</Typography>
                <MenuBar></MenuBar>
            </Box>
            <Box sx={{
                width : "90%",
                display : "flex",
                justifyContent : "space-evenly",
                alignItems : "center",
                flexDirection : "column",
                height : "30%"
            }}>
                <Image width="80px" height="80px" src={ logo } style={{
                    overflow : "hidden",
                    borderRadius : "50%",
                    marginBottom : "20px"
                }}></Image>
                <Typography sx={{
                    width : "90%",
                    height : "10%",
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center"
                }}>User 1</Typography>
                <Typography sx={{
                    width : "90%",
                    height : "10%",
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center"
                }}>Active</Typography>
            </Box>
            <Box sx={{
                width : "90%",
                height : "30%",
                display : "flex",
                justifyContent : "center",
                alignItems : "flex-end",
                paddingBottom : "20px",
                boxSizing : "border-box"
            }}>
                <Typography sx={{
                    width : "100%",
                    textAlign : "left"
                }}>
                    Lorem, ipsum dolor sit amet Quidem hhhhh deserunt obcaecati debitis velit laborum veritatis sit quasi. Magnam maiores
                </Typography>
            </Box>
            <Box sx={{
                width : "90%",
                height : "30%"
            }}>
                <Accordion sx={{
                    width : "100%",
                    backgroundColor : "rgb(54,53,52)",
                    color : "white"
                }}>
                    <AccordionSummary
                        expandIcon={ <ExpandMoreIcon sx={{
                            color : "white"
                        }}/> }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>About</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{
                    width : "100%",
                    backgroundColor : "rgb(54,53,52)",
                    color : "white"
                }}>
                    <AccordionSummary
                        expandIcon={ <ExpandMoreIcon sx={{
                            color : "white"
                        }} /> }
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Attachments</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}
export default Profile;
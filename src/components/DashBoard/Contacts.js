import { Typography } from "@material-ui/core"
import { GroupAdd, PersonAdd, Search } from "@mui/icons-material"
import MoreVert from "@mui/icons-material/MoreVert"
import { Box, Button, InputAdornment, TextField } from "@mui/material"
import { InputGroup, FormControl, Form } from "react-bootstrap"
import Chat from "./Chats/Chat"
import Contact from "./Contact/Contact"
import AddBoxIcon from '@mui/icons-material/AddBox';
import "./scrollbarCSS.css";
import { useState } from "react"
import Modal from "./Modals/Modal"
const Contacts = props => {
    const contacts = [
        {
            name: "Nikhil Arora"
        },
        {
            name: "Abhishek Vats",
        },
        {
            name: "Jyoti Arora"
        }
    ];
    const [open, setOpen] = useState(false);
    const handleClose = (event) => {
        event.stopPropagation();
        setOpen(false);
    };
    const handleToggle = (event) => {
        event.stopPropagation();
        setOpen(!open);
    };
    return (
        <Box sx={ {
            width: "30%",
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
            overflow: "scroll"
        } } className="scrollElement">
            <Box sx={ {
                width: "90%",
                height: "10%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxSizing: "border-box",
                padding: "5px"
            } }>
                <Typography variant="h5">Contacts</Typography>
                <AddBoxIcon onClick={ handleToggle } sx={ {
                    width: "30px",
                    height: "30px"
                } } />
            </Box>
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
                    placeholder="Search Contacts"
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
                    contacts.map((group) => {
                        return (
                            <Contact { ...group } />
                        )
                    })
                }
            </Box>
            <Modal open={ open } handleClose={ handleClose }>
                <Box sx={ {
                    width: "45%",
                    height: "400px",
                    backgroundColor: "white",
                    zIndex : 10000,
                    position : "relative",
                    color : "black",
                    boxSizing : "border-box",
                    display : "flex",
                    justifyContent : "space-around",
                    alignItems : "center",
                    flexDirection : "column",
                    borderRadius : "10px"
                } } onClick={(e)=>{e.stopPropagation()}}>
                    <Box sx={{
                        width : "50%",
                        display : "flex",
                        justifyContent : "space-evenly",
                        alignItems : "center",
                        height : "15%"
                    }}>
                        <PersonAdd sx={{
                            fontSize : "38px"
                        }}></PersonAdd>
                        <Typography variant="h4">Add Contact</Typography>
                    </Box>
                    <Box sx={{
                        width : "100%",
                        height : "80%",
                        display : "flex",
                        flexDirection : "column",
                        justifyContent : "space-around",
                        alignItems : "center"
                    }}>
                        <Box sx={{
                            width : "90%"
                        }}>
                            <TextField id="filled-basic" autoComplete="new-password" variant="outlined" type="email" placeholder="Email" label="Email" InputProps={ {
                                // autoComplete :"nope",
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonAdd />
                                    </InputAdornment>
                                )
                            } } sx={{
                                width : "100%",
                                height : "30px"
                            }} />
                        </Box>
                        <Box sx={{
                            width : "90%"
                        }}>
                            <TextField id="filled-basic" autoComplete="new-password" variant="outlined" type="text" placeholder="Name" label="Name" InputProps={ {
                                // autoComplete :"nope",
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonAdd />
                                    </InputAdornment>
                                )
                            } } sx={{
                                width : "100%",
                                height : "30px"
                            }} />
                        </Box>
                        <Box sx={{
                            width : "90%",
                            display : "flex",
                            justifyContent : "flex-start"
                        }}>
                            <Button variant="contained" sx={{
                                height : "45px"
                            }}>
                                Add Contact
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}
export default Contacts;
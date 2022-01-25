import { Typography } from "@material-ui/core"
import { GroupAdd, GroupAddSharp, GroupOutlined, Groups, PersonAdd, Search } from "@mui/icons-material"
import { Box, Button, InputAdornment, TextField } from "@mui/material"
import { useState } from "react"
import { InputGroup , FormControl} from "react-bootstrap"
import Chat from "./Chats/Chat"
import ContactList from "./Contact/ContactList"
import Modal from "./Modals/Modal"
import "./scrollbarCSS.css";
const Group = props => {
    const groups = [
        {
            name : "chit chat code",
            desc:"some desc",
            lastMessageTime:"07:40"
        },
        {
            name : "brawlhalla",
            desc:"some desc",
            lastMessageTime:"07:40"
        },
        {
            name : "Clapingo",
            desc:"some desc",
            lastMessageTime:"07:40"
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
                height : "10%",
                display : "flex",
                justifyContent : "space-between",
                alignItems : "center",
                boxSizing : "border-box",
                padding : "5px"
            }}>
                <Typography variant="h5">Group</Typography>
                <GroupAdd onClick={handleToggle}></GroupAdd>
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
                    placeholder="Search Groups"
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
                    groups.map((group) => {
                        return (
                            <Chat {...group}>
                        </Chat>
                        )
                    })
                }
            </Box>
            <Modal open={ open } handleClose={ handleClose }>
                <Box sx={ {
                    width: "45%",
                    height: "550px",
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
                        <GroupAddSharp sx={{
                            fontSize : "38px"
                        }}/>
                        <Typography variant="h4">Add Group</Typography>
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
                            <TextField id="filled-basic" autoComplete="new-password" variant="outlined" type="email" placeholder="Group Name" label="Group Name" InputProps={ {
                                // autoComplete :"nope",
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Groups />
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
                            <TextField id="filled-basic" autoComplete="new-password" variant="outlined" type="file" placeholder="Group Icon" label="Group Icon" InputProps={ {
                                // autoComplete :"nope",
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <GroupOutlined />
                                    </InputAdornment>
                                )
                            } } sx={{
                                width : "100%",
                                height : "30px"
                            }} />
                        </Box>
                        <Box sx={{
                            width : "90%",
                            height : "30%",
                            display : "flex",
                            alignItems : "flex-start",
                            flexDirection : "column",
                            justifyContent : "space-evenly"
                        }}>
                            <Typography variant="body1" sx={{
                                height : "30%"
                            }}>Select Contacts</Typography>
                            <ContactList contacts={[
                                {
                                    name : "contact1",
                                    email : "contact1@gmail.com"
                                },
                                {
                                    name : "contact12",
                                    email : "contact2@gmail.com"
                                },
                                {
                                    name : "contact3",
                                    email : "contact3@gmail.com"
                                }
                            ]}></ContactList>
                            {/* <TextField id="filled-basic" autoComplete="new-password" variant="outlined" type="text" placeholder="Select Contacts" label="Name" InputProps={ {
                                // autoComplete :"nope",
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonAdd />
                                    </InputAdornment>
                                )
                            } } sx={{
                                width : "100%",
                                height : "30px"
                            }} /> */}
                        </Box>
                        <Box sx={{
                            width : "90%",
                            display : "flex",
                            justifyContent : "flex-start"
                        }}>
                            <Button variant="contained" sx={{
                                height : "45px"
                            }}>
                                Add Group
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}
export default Group;
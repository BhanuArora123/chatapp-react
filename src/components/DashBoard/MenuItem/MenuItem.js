import { Link } from "react-router-dom"
import { Box } from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const MenuItem = props => {
    return (
        <Link to="/Chats">
            <Box>
                {props.name}
            </Box>
        </Link>
    )
}

export default MenuItem;
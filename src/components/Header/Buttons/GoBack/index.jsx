import { IconButton } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useHistory } from "react-router-dom";
export default function GoBack({ sx }) {
    const history = useHistory()
    const goback = () => {
        history.goBack();
    }
    return (
        <IconButton sx={{ ...sx }} aria-label="Back" onClick={goback}>
            <KeyboardBackspaceIcon  sx={{fontSize:'30px'}}/>
        </IconButton>
    )
}
import Feed from "./view/Feed";
import Rightbar from "./view/Rightbar";
import { Box, Stack } from "@mui/material";
import Add from "./view/Add";

function FeedController() {
    return (
        <Box pb={15} bgcolor={"background.default"} color={"text.primary"}>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Feed />
                <Rightbar />
            </Stack>
            <Add />
        </Box>
    );
}

export default FeedController;
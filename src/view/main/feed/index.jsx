import Feed from "./view/Feed";
import Rightbar from "./view/Rightbar";
import { Box, Stack } from "@mui/material";
import tokenService from "_services/token.service";

function FeedController() {
    const userModel = tokenService.getUser();
    return (
        <>
            <Box pt={2} pb={15} color={"text.primary"}>
                <Stack direction="row" spacing={2} gap={2} justifyContent="space-between">
                    <Feed userModel={userModel} feedType={'feeds'} />
                    <Rightbar userModel={userModel} />
                </Stack>
            </Box>
        </>
    );
}

export default FeedController;
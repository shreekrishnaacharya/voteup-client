import Feed from "./view/Feed";
import Rightbar from "./view/Rightbar";
import { Box, Stack } from "@mui/material";
import Add from "./view/Add";
import tokenService from "_services/token.service";
import { Helmet } from "react-helmet";

function FeedController() {
    const userModel = tokenService.getUser();
    return (
        <>
            <Helmet>
                <title>Feeds | Ventvoila</title>
            </Helmet>
            <Box pt={2} pb={15} color={"text.primary"}>
                <Stack direction="row" spacing={2} gap={2} justifyContent="space-between">
                    <Feed userModel={userModel} feedType={'feeds'} />
                    <Rightbar userModel={userModel} />
                </Stack>
                <Add userModel={userModel} />
            </Box>
        </>
    );
}

export default FeedController;
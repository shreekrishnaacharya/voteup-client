import { Button, Card, CardHeader } from "@mui/material";
import { Box } from "@mui/system";

export const HidePost = ({ onUnhide }) => {
  return (
    <Box mb={2}>
      <Card>
        <CardHeader
          action={
            <>
              <Button onClick={onUnhide}>Unhide</Button>
            </>
          }
          titleTypographyProps={{ variant: "h4" }}
          subheaderTypographyProps={{ variant: "subtitle2" }}
          title={"You have hide this post."}
          subheader={"This post will no longer appear in your feeds"}
        />
      </Card>
    </Box>
  );
};

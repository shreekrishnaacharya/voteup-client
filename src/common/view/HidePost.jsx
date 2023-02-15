import { Button, Card, CardHeader } from "@mui/material";
import { Box } from "@mui/system";

export const HidePost = ({ onUndo, hide }) => {
  return (
    <Box mb={2}>
      <Card>
        <CardHeader
          action={
            <>
              <Button onClick={onUndo}>{"Undo"}</Button>
            </>
          }
          titleTypographyProps={{ variant: "h4" }}
          subheaderTypographyProps={{ variant: "subtitle2" }}
          title={`You have ${hide ? "hide" : "unhide"} this post.`}
          subheader={`This post will ${
            hide && "no longer"
          } appear in your feeds`}
        />
      </Card>
    </Box>
  );
};

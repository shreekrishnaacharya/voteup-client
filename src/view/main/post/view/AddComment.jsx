import {
    Avatar,
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Grid,
    styled,
    TextField,
} from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { _GLOBAL } from 'links';
const schema = yup.object({
    post_detail: yup.string()
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "50px",
});
const AddComment = ({ userModel, onAddComment }) => {
    const { mini } = _GLOBAL
    const { handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <>
            <Box mb={2}>
                <Card>
                    <CardContent>
                        <form onSubmit={handleSubmit((fb) => {
                            onAddComment(fb).then(e => {
                                if (e)
                                    reset({ 'comment': '' })
                            })
                        })}>
                            <Grid container alignItems={'center'} spacing={1}>
                                <Grid item xs={12} sm={10} lg={11}>
                                    <Box gap={2} sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
                                        <UserBox>
                                            <Avatar
                                                src={userModel.img}
                                                sx={{ width: 40, height: 40 }}
                                            />
                                        </UserBox>
                                        <Box width={'100%'}>
                                            <Controller
                                                name="post_detail"
                                                defaultValue={''}
                                                control={control}
                                                render={({ field, fieldState }) => (
                                                    <>
                                                        <TextField
                                                            multiline
                                                            // rows={2}
                                                            sx={{ width: "100%" }}
                                                            placeholder="Post if you have any!"
                                                            // variant="standard"
                                                            {...field}
                                                        />
                                                    </>
                                                )}
                                            />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={2} lg={1}>
                                    <ButtonGroup
                                        fullWidth
                                        variant="contained"
                                        aria-label="outlined primary button group"
                                    >
                                        <Button
                                            disableElevation
                                            disabled={isSubmitting}
                                            type="submit"
                                        >Add</Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>

                </Card>
            </Box>
        </>
    );
};

export default AddComment

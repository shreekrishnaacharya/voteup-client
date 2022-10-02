import {
  Avatar,
  Button,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  Image,
} from "@mui/icons-material";
import AnimateButton from 'components/@extended/AnimateButton';
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from 'notistack';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addPost } from "../service";
import { isEmpty } from "_services";
import ImageLoader from "components/ImageLoader";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "redux/action/searchAction";
import { Rid } from "_services";
import InfoIcon from '@mui/icons-material/Info';


const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const schema = yup.object({
  image: yup.mixed(),
  post_detail: yup.string(),
  supporters: yup.number().min(1),
});
const Add = ({ userModel }) => {
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  });
  const { enqueueSnackbar } = useSnackbar();

  const submitForm = async (fdata) => {
    if (isEmpty(fdata.post_detail)) {
      enqueueSnackbar("Post cannot be blank", {
        variant: 'error',
      });
      return false;
    }
    if (isEmpty(fdata.supporters) || fdata.supporters < 1) {
      enqueueSnackbar("Please indicate your supporters", {
        variant: 'error',
      });
      return false;
    }
    await addPost(fdata).then(e => {
      if (e.flag) {
        enqueueSnackbar("Post uploaded", {
          variant: 'success',
        });
        reset();
        setOpen(false);
        dispatch(setSearch({ ...search, update: Rid() }));
      }
    })
  }
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Create Post"
        sx={{
          position: "fixed",
          bottom: 20,
          right: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={600}
          height={'auto'}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={3}
        >
          <Box display={'flex'} justifyContent={'center'}>
            <Typography variant="h6" color="gray" textAlign="center">
              Post Your Idea, Issue and Agenda
            </Typography>
            <Tooltip
              title="Issue / Agenda involving problem, perception, opinion and solution that will be more precious. For eg. throwing shell of chocolate bar indiscriminately went into the drain(perception / opinion) and got stuck in the drainage (problem). Only paper shell should be allowed for manufacturing (solution)."
              sx={{
                ml: 2,
              }}
            >
              <InfoIcon color={'info'} />
            </Tooltip>
          </Box>
          <UserBox>
            <Avatar
              src={userModel.img}
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              {userModel.name}
            </Typography>
          </UserBox>
          <form onSubmit={handleSubmit(submitForm)}>
            <Controller
              name="post_detail"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <TextField
                    sx={{ width: "100%" }}
                    multiline
                    rows={3}
                    placeholder="Your Idea, Issue and Agenda here!"
                    variant="standard"
                    {...field}
                  />
                </>
              )}
            />
            <Controller
              name="supporters"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <TextField
                    type={'number'}
                    sx={{ marginTop: "15px" }}
                    placeholder="Your Supporters"
                    variant="standard"
                    {...field}
                  />
                </>
              )}
            />
            <Stack direction="row" gap={1} mt={2} mb={2}>
              <label htmlFor="uploadimages">
                <Image color="secondary" />
              </label>
            </Stack>
            <Controller
              name="image"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <ImageLoader
                    multiple={true}
                    InputProps={{
                      accept: "image/*",
                      id: 'uploadimages'
                    }}
                    size='md'
                    isModal={false}
                    onChange={(e) => {
                      field.onChange(e.target.files);
                    }}
                  />
                </>
              )}
            />
            <AnimateButton>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                disableElevation
                disabled={isSubmitting}
                fullWidth
              >
                Post
              </Button>
            </AnimateButton>
          </form>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;

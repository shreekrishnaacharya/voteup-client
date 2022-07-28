import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from 'notistack';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addReport } from "../service";
import { isEmpty } from "_services";

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const schema = yup.object({
  rtype: yup.number(),
  remark: yup.string()
});

const Report = ({ report, setOpen }) => {
  const { postid, open } = report;
  const { handleSubmit, control, getValues, setValue, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const { enqueueSnackbar } = useSnackbar();

  const submitForm = (fdata) => {
    if (fdata.rtype == 0 || isEmpty(fdata.remark)) {
      enqueueSnackbar("Please complete the from", {
        variant: 'warning',
      });
      return;
    }
    addReport(postid, fdata).then(e => {
      if (e.status == 208) {
        enqueueSnackbar("Already reported", {
          variant: 'info',
        });
        return;
      }
      if (e.flag) {
        enqueueSnackbar("Report submitted", {
          variant: 'success',
        });
        reset();
        setOpen({ open: false, postid: null });
      } else {
        enqueueSnackbar("Error in query", {
          variant: 'error',
        });
      }
    })
  }

  return (
    <>
      <SytledModal
        open={open}
        onClose={(e) => setOpen({ open: false, postid: null })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={600}
          height={400}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={3}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Report post
          </Typography>
          <form onSubmit={handleSubmit(submitForm)}>
            <Stack direction="column" gap={5}>
              <Controller
                name="rtype"
                control={control}
                defaultValue={0}
                render={({ field, fieldState }) => (
                  <div>
                    <InputLabel sx={{ margin: '5px 0px' }}>Select type of voilation</InputLabel>
                    <Select
                      sx={{ width: "100%" }}
                      {...field}
                    >
                      <MenuItem value={0}>
                        <em>Select type of voilation</em>
                      </MenuItem>
                      <MenuItem value={1}>Advertisment</MenuItem>
                      <MenuItem value={2}>Abuse</MenuItem>
                      <MenuItem value={3}>Sexual Content</MenuItem>
                    </Select>
                  </div>
                )}
              />
              <Controller
                name="remark"
                control={control}
                render={({ field, fieldState }) => (
                  <div>
                    <InputLabel sx={{ margin: '5px 0px' }}>Description</InputLabel>
                    <TextField
                      sx={{ width: "100%" }}
                      multiline
                      rows={3}
                      placeholder="What is wrong with this post?"
                      variant="standard"
                      {...field}
                    />
                  </div>
                )}
              />
              <ButtonGroup
                fullWidth
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button type="submit">Submit</Button>
              </ButtonGroup>
            </Stack>
          </form>
        </Box>
      </SytledModal>
    </>
  );
};

export default Report;

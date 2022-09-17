import * as React from 'react';
import {
    Grid,
    Typography,
    Divider,
    Button,
    Avatar,
    Box,
    Select,
    MenuItem,
    FormHelperText,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { updateProfile } from "../../service";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from 'notistack';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ImageLoader from 'components/ImageLoader';
import { Image } from '@mui/icons-material';
import { KycTypes } from 'links';
import { CapitalText } from '_services';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from 'redux/action/profileAction';
import { KycStatus } from 'links';

const schema = yup.object({
    kyc_file: yup.mixed().required('Kyc Image File is required'),
    kyc_type: yup.string().required('Kyc Type is required'),
});
export default function KycFile({ open, setOpen }) {
    const dispatch = useDispatch();
    const userProfile = useSelector(state => state.profile);
    const { handleSubmit, control, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });
    const { enqueueSnackbar } = useSnackbar();

    const saveAction = (fdata) => {
        // console.log(fdata)
        updateProfile(fdata).then(e => {
            if (e.flag) {
                enqueueSnackbar("Kyc Uploaded", {
                    variant: 'success',
                });
                dispatch(setProfile({ ...userProfile, ...e.data }))
                handleClose();
            } else if (e.data.error) {
                enqueueSnackbar(e.data.error, {
                    variant: 'warning',
                });
            }
        })
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={'sm'}
            fullWidth
        >
            <DialogTitle variant="h3">Kyc File</DialogTitle>
            <form onSubmit={handleSubmit(saveAction)}>
                <DialogContent >
                    <Divider />
                    <Typography variant="subtitle2">
                        <Grid mt={2} container spacing={1} justifyContent={'flex-end'}>
                            <Grid item xs={12}>
                                <Controller
                                    name="kyc_type"
                                    control={control}
                                    defaultValue={Boolean(userProfile.kycTypeCode) ? userProfile.kycTypeCode : 0}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <lable>Kyc File Type</lable>
                                            <Select
                                                fullWidth
                                                size="small"
                                                {...field}
                                                disabled={userProfile.kycStatusCode == KycStatus.VERIFIED}
                                            >
                                                {Object.keys(KycTypes).map(e => {
                                                    return <MenuItem keys={e} value={KycTypes[e]}>{CapitalText(e, true)}</MenuItem>
                                                })}
                                            </Select>
                                            {fieldState.error && (
                                                <FormHelperText size='small' error>
                                                    {fieldState.error?.message}
                                                </FormHelperText>
                                            )}
                                        </>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="kyc_file"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <ImageLoader
                                                multiple={false}
                                                InputProps={{
                                                    accept: "image/*",
                                                    id: 'uploadkycfile'
                                                }}
                                                size='lg'
                                                isModal={false}
                                                initFile={userProfile.kycFile ? [userProfile.kycFile] : null}
                                                onChange={(e) => {
                                                    field.onChange(e.target.files);
                                                }}
                                            />
                                            {userProfile.kycStatusCode != KycStatus.VERIFIED && (
                                                <Button
                                                    fullWidth
                                                    component='label'
                                                    variant='outlined'
                                                    htmlFor="uploadkycfile">
                                                    <Image color="secondary" />
                                                    Select Kyc File
                                                </Button>
                                            )}
                                            {fieldState.error && (
                                                <FormHelperText size='small' error>
                                                    {fieldState.error?.message}
                                                </FormHelperText>
                                            )}
                                        </>
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </Typography>
                </DialogContent>
                <Divider />
                <DialogActions sx={{ padding: '10px 20px' }}>
                    <Button color='error' variant='contained' onClick={handleClose}>Close</Button>
                    {userProfile.kycStatusCode != KycStatus.VERIFIED && (
                        <Button
                            color='success'
                            variant='contained'
                            disableElevation
                            disabled={isSubmitting}
                            type={'submit'}>Upload</Button>
                    )}
                </DialogActions>
            </form>
        </Dialog>

    );
}

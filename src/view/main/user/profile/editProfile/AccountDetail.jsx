import {
    Grid,
    Typography,
    CardContent,
    Card,
    Box,
    Divider,
    Button,
    IconButton,
} from '@mui/material';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Label from 'components/Label';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Text from 'components/Text';
import React from "react";
import { useSelector } from "react-redux";
import { useState } from 'react';
import ChangePassword from './ChangePassword';
import KycFile from './KycFile';
import { KycStatusList } from 'links';


export default function AccountDetail() {
    const userProfile = useSelector(state => state.profile);
    const [pstate, setPstate] = useState(false);
    const [kstate, setKstate] = useState(false);
    return (
        <Card>
            <Box
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Box>
                    <Typography variant="h4" gutterBottom>
                        Account Details
                    </Typography>
                    <Typography variant="subtitle2">
                        Details related to your account
                    </Typography>
                </Box>
            </Box>
            <Divider />
            <CardContent sx={{ p: 4 }}>
                <Typography variant="subtitle2">
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                            <Box pr={3} pb={2}>
                                Email:
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8} md={9}>
                            <Text color="black">
                                <b>{userProfile.email}</b>
                            </Text>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                            <Box pr={3} pb={2}>
                                Password:
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8} md={9}>
                            <Text color="black">
                                <b>*****************</b>
                            </Text>
                            <IconButton
                                size="small"
                                sx={{ marginLeft: 2 }}
                                onClick={() => {
                                    setPstate(true)
                                }}
                                component="label" color='primary'>
                                <ChangeCircleIcon />
                                Change
                            </IconButton>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                            <Box pr={3} pb={2}>
                                KYC:
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8} md={9}>
                            <Label color={KycStatusList[userProfile.kycStatusCode].color}>
                                {KycStatusList[userProfile.kycStatusCode].icon}{userProfile.kycStatus}
                            </Label>
                            <IconButton
                                size="small"
                                sx={{ ml: 2, mt: -1.5 }}
                                onClick={() => {
                                    setKstate(true)
                                }}
                                component="label" color='primary'>
                                <AttachFileIcon />
                                Kyc File
                            </IconButton>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                            <Box pr={3} pb={2}>
                                Account status:
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8} md={9}>
                            {userProfile.status == "Active" ? (
                                <Label color="success">
                                    <DoneTwoToneIcon fontSize="small" />
                                    <b>&nbsp;{userProfile.status}</b>
                                </Label>
                            ) : (
                                <Label color="warning">
                                    <ReportProblemIcon fontSize="small" />
                                    <b>&nbsp;{userProfile.status}</b>
                                </Label>
                            )}
                        </Grid>
                    </Grid>
                </Typography>
                <ChangePassword open={pstate} setOpen={setPstate} />
                <KycFile open={kstate} setOpen={setKstate} />
            </CardContent>
        </Card>)
}
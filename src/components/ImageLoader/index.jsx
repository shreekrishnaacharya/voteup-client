import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Typography,
    Box,
    Divider,
    Button,
    Input,
    Card,
    CardMedia,
    CardContent
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import imageIcon from "assets/images/product.png";
import imageIcon from 'assets/images/cover_image.png'
import { VideoIcon, PdfIcon, DocIcon, ExcelIcon, WordIcon } from './Icons';
import { useRef } from 'react';

const extensions = {
    pdf: ['pdf'],
    video: ['mp4', 'avi', 'webm', 'mpeg', 'mov'],
    doc: ['doc', 'docx'],
    excel: ['xlsx', 'xls', 'xlsm', 'ods'],
    image: ['jpg', 'jpeg', 'png', 'gif']
}

function ImageLoader({ InputProps, cancelName, saveName, onSave, multiple }) {

    const [profileImg, setProfile] = React.useState(null)
    const [totSize, setTotSize] = React.useState(0)
    const handleClose = () => {
        setProfile(null);
    };
    const removeSelectedImage = () => {
        setProfile(null);
    };
    const getSize = (size) => {
        if (size > 1048576) {
            return Math.round(size / 1048576, 2) + ' MB'
        } else if (size > 1024) {
            return Math.round(size / 1024, 2) + ' KB'
        } else {
            return size + ' Bytes'
        }
    }
    function getFileIcon(file) {
        const en = file.name.split('.').pop().toLowerCase();
        console.log(en)
        let ex = null;
        for (const ext of Object.keys(extensions)) {
            if (extensions[ext].includes(en)) {
                ex = ext;
                break;
            }
        }
        switch (ex) {
            case 'pdf':
                return PdfIcon;
            case 'image':
                return URL.createObjectURL(file)
            case 'doc':
                return WordIcon;
            case 'excel':
                return ExcelIcon;
            case 'video':
                return VideoIcon;
            default:
                return DocIcon;
        }

    }

    const ImageList = () => {
        let imageList = [];
        let _totSize = 0;
        if (Boolean(profileImg)) {
            for (let i = 0; i < profileImg.length; i++) {
                _totSize += profileImg[i].size;
                imageList.push(
                    <Grid item xs={3}>
                        <Card sx={{ height: "auto", width: "100%" }}>
                            <div style={{ height: '150px' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ margin: 'auto', maxHeight: '150px' }}
                                    image={getFileIcon(profileImg[i])}
                                    alt="Paella dish"
                                />
                            </div>
                            <CardContent>
                                <Box>
                                    <Typography noWrap style={{ color: "#6E759F" }}>
                                        {profileImg[i].name}
                                    </Typography>
                                    <Typography noWrap style={{ color: "#6E759F" }}>
                                        {getSize(profileImg[i].size)}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            }
        }
        setTotSize(_totSize)
        return imageList
    }

    return (
        <>
            <Input
                {...InputProps}
                type="file"
                sx={{ display: 'none' }}
                inputProps={{ multiple }}
                onChange={(e) => {
                    if (e.target.files != undefined) {
                        setProfile(e.target.files)
                    }
                }}
            />
            <Dialog open={Boolean(profileImg)} fullWidth maxWidth={'md'}>
                <DialogTitle variant="h3">Image Upload</DialogTitle>
                <DialogContent>
                    <Divider />
                    <Typography variant="subtitle2">
                        <Grid
                            mt={1}
                            container
                            spacing={3}
                        >
                            <ImageList />
                        </Grid>
                    </Typography>

                    <Box mt={2} >
                        <Divider />
                        <Typography variant="subtitle2">
                            Total Files : {Boolean(profileImg) ? profileImg.length : 0}
                        </Typography>
                        <Typography variant="subtitle2">
                            Size : {getSize(totSize)}
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ padding: '10px 20px' }}>
                    <Button color='error' onClick={handleClose}>{cancelName}</Button>
                    <Button color='primary' type={'submit'} onClick={() => {
                        onSave(profileImg, handleClose)
                    }}>{saveName}</Button>
                </DialogActions>
            </Dialog >
        </>
    );
}

ImageLoader.propTypes = {
    cancelName: PropTypes.string,
    saveName: PropTypes.string,
    onSave: PropTypes.func,
    InputProps: PropTypes.object,
    multiple: PropTypes.bool
}

ImageLoader.defaultProps = {
    cancelName: 'Cancel',
    saveName: 'Save',
    multiple: true
}

export default ImageLoader;
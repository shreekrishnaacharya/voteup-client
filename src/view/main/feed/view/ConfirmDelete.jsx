import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deletePost } from '../service';
import { useSnackbar } from 'notistack';

export default function ConfirmDelete({ confirm, setConfirm, filterPost }) {
    const { open, postid } = confirm
    const { enqueueSnackbar } = useSnackbar();
    const handleAction = () => {
        deletePost(postid).then(e => {
            console.log(e)
            if (e.flag) {
                enqueueSnackbar("Post deleted", {
                    variant: 'success',
                });
                filterPost(postid)
            } else {
                enqueueSnackbar("Error performing query", {
                    variant: 'error',
                });
            }
        })
        setConfirm({ open: false, postid: null });
    };

    const handleClose = () => {
        setConfirm({ open: false, postid: null });
    };

    return (
        <div>
            <Dialog
                open={open}
            >
                <DialogTitle sx={{ fontWeight: 700, fontSize: 20, padding: '16px 20px' }}>
                    {"Are you sure you want to delete this post?"}
                </DialogTitle>
                <DialogContent sx={{ padding: '20px' }}>
                    <DialogContentText>
                        Deleting a post will also delete all the activities related to this post such as its vote, shared links
                        and you will not be able to recover them.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ padding: '20px' }}>
                    <Button variant='outlined' onClick={handleClose}>Cancel</Button>
                    <Button color={'error'} variant='outlined' onClick={handleAction} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

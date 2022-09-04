import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { addComment, deleteComment, getViewPost, actionUpdateAction } from "../service";
import ConfirmDelete from "common/view/ConfirmDelete";
import Post from "common/view/Post";
import PostLoad from "common/view/PostLoad";
import Report from "common/view/Report";
import { useLocation, useHistory } from "react-router-dom";
import { pages, StatusCode } from "links";
import tokenService from "_services/token.service";
import Comment from "./Comment";
import AddComment from "./AddComment";
import Text from "components/Text";
import CommentLoad from "./CommentLoad";
import { isEmpty } from "_services";
import { useSnackbar } from 'notistack';
import { addReport } from "common/service";

const ViewPost = () => {
    const userModel = tokenService.getUser();
    const location = useLocation();
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [postFeeds, setPost] = useState({});
    const { enqueueSnackbar } = useSnackbar();

    const params = new URLSearchParams(location.search);
    const postid = params.get('id');
    const [report, setReport] = useState({
        open: false,
        postid: postid
    })
    const [confirm, setConfirm] = useState({
        open: false,
        postid: postid
    })
    const homePage = () => {
        history.push({
            pathname: pages.HOME
        });
    }

    const initLoad = () => {
        getViewPost(postid).then(res => {
            if (res.flag) {
                setPost(res.data);
                setLoading(false);
            }
        })
    }
    const onVote = (id) => {
        actionUpdateAction(id).then(e => {
            if (e.flag) {
                initLoad();
            }
        })
    }
    const addCommentForm = (fdata) => {
        if (isEmpty(fdata.post_detail)) {
            enqueueSnackbar("Review cannot be blank", {
                variant: 'error',
            });
            return false;
        }
        addComment(postid, fdata).then(e => {
            if (e.flag) {
                enqueueSnackbar("Review uploaded", {
                    variant: 'success',
                });
                initLoad()
            }
        })
    }

    const submitReportForm = (fdata) => {
        if (fdata.rtype == 0 || isEmpty(fdata.remark)) {
            enqueueSnackbar("Please complete the from", {
                variant: 'warning',
            });
            return;
        }
        addReport(report.postid, fdata).then(e => {
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
                reset()
                setReport({ open: false, postid: null });
            } else {
                enqueueSnackbar("Error in query", {
                    variant: 'error',
                });
            }
        })

    }

    const deleteCommentPost = () => {
        deleteComment(confirm.postid).then((e) => {
            if (e.flag) {
                if (confirm.postid == postid) {
                    enqueueSnackbar("Post deleted", {
                        variant: 'success',
                    });
                    homePage()
                } else {
                    enqueueSnackbar("Review deleted", {
                        variant: 'success',
                    });
                    setConfirm({ open: false, postid: null })
                    initLoad()
                }
            }
        })
    }

    const handleMenu = (postid, type) => {
        if (type == 0) {
            setReport({ postid: postid, open: true })
        } else if (type == 2) {
            console.log('delete confirm open')
            setConfirm({ postid: postid, open: true })
        }
    }


    useEffect(() => {
        initLoad()
        return () => {
            setPost({})
            setConfirm({ open: false, postid: null })
        }
    }, []);

    return (
        <Box sx={{ margin: '20px' }}>
            {loading ? (
                <>
                    <PostLoad isOpen={true} />
                </>
            ) : (
                <>
                    <Post isOpen={true} onVote={() => { onVote(postid) }} key={postFeeds._id} post={postFeeds} onMenu={handleMenu} userModel={userModel} viewPost={() => { }} />
                </>
            )
            }

            <Box sx={{ marginLeft: '40px' }}>
                <Text varient={'h1'}>Review</Text>
                {postFeeds.statusCode == StatusCode.REVIEW && (
                    <AddComment userModel={userModel} onAddComment={addCommentForm} />
                )}
                {loading ? (
                    <>
                        <CommentLoad />
                        <CommentLoad />
                    </>
                ) : (
                    <>
                        {postFeeds.comments.map(comment => {
                            return <Comment post={postFeeds} onVote={() => { onVote(comment._id) }} key={comment._id} comment={comment} setReport={setReport} setConfirm={setConfirm} userModel={userModel} />
                        })}
                    </>
                )
                }
            </Box>
            <Report open={report.open} onReport={submitReportForm} onClose={() => { setReport({ open: false, postid: null }) }} />
            <ConfirmDelete open={confirm.open} onDelete={deleteCommentPost} onClose={() => { setConfirm({ open: false, postid: null }) }} />
        </Box>
    );
};

export default ViewPost;

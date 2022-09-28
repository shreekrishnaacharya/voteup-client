import HowToVoteIcon from '@mui/icons-material/HowToVote';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import PendingIcon from '@mui/icons-material/Pending';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const StatusCode = Object.freeze({
    REVIEW: 0,
    VOTING: 1,
    RESULT: 2,
    ACCEPTANCE: 3,
    REJECTANCE: 4
})


const KycTypes = Object.freeze({
    LICENSES: 0,
    CITIZENSHIP: 1,
    PAN_CARD: 2,
    VOTER_CARD: 3,
    OTHER: 4
})

const KycStatus = Object.freeze({
    PENDING: 0,
    PROCESSING: 1,
    VERIFIED: 2,
    NOT_VERIFIED: 3,
})

const KycStatusList = {
    [KycStatus.PENDING]: { color: 'info', icon: <ErrorOutlineIcon sx={{ mr: 1 }} /> },
    [KycStatus.PROCESSING]: { color: 'primary', icon: <PendingIcon sx={{ mr: 1 }} /> },
    [KycStatus.VERIFIED]: { color: 'success', icon: <CheckCircleIcon sx={{ mr: 1 }} /> },
    [KycStatus.NOT_VERIFIED]: { color: 'error', icon: <ErrorIcon sx={{ mr: 1 }} /> },
}

const StatusList = {
    [StatusCode.REVIEW]: { color: 'info', icon: <InsertCommentIcon sx={{ mr: 1 }} /> },
    [StatusCode.VOTING]: { color: 'primary', icon: <HowToVoteIcon sx={{ mr: 1 }} /> },
    [StatusCode.ACCEPTANCE]: { color: 'success', icon: <CheckCircleIcon sx={{ mr: 1 }} /> },
    [StatusCode.REJECTANCE]: { color: 'error', icon: <ErrorIcon sx={{ mr: 1 }} /> },
    [StatusCode.RESULT]: { color: 'warning', icon: <PendingActionsIcon sx={{ mr: 1 }} /> },
}



export { StatusCode, StatusList, KycTypes, KycStatusList, KycStatus }
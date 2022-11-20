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
    MANDATE: 2,
    ACCEPTANCE: 3,
    REJECTION: 4
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

const ICONS_FONT = Object.freeze({
    xs: '16px',
    sm: '20px'
})

const TEXT_FONT = Object.freeze({
    xs: '13px'
})

const KycStatusList = {
    [KycStatus.PENDING]: { color: 'info', icon: <ErrorOutlineIcon sx={{ fontSize: ICONS_FONT }} /> },
    [KycStatus.PROCESSING]: { color: 'primary', icon: <PendingIcon sx={{ fontSize: ICONS_FONT }} /> },
    [KycStatus.VERIFIED]: { color: 'success', icon: <CheckCircleIcon sx={{ fontSize: ICONS_FONT }} /> },
    [KycStatus.NOT_VERIFIED]: { color: 'error', icon: <ErrorIcon sx={{ fontSize: ICONS_FONT }} /> },
}

const StatusList = {
    [StatusCode.REVIEW]: { color: 'info', icon: <InsertCommentIcon sx={{ fontSize: ICONS_FONT }} /> },
    [StatusCode.VOTING]: { color: 'primary', icon: <HowToVoteIcon sx={{ fontSize: ICONS_FONT }} /> },
    [StatusCode.ACCEPTANCE]: { color: 'success', icon: <CheckCircleIcon sx={{ fontSize: ICONS_FONT }} /> },
    [StatusCode.REJECTION]: { color: 'error', icon: <ErrorIcon sx={{ mr: 1, fontSize: ICONS_FONT }} /> },
    [StatusCode.MANDATE]: { color: 'warning', icon: <PendingActionsIcon sx={{ fontSize: ICONS_FONT }} /> },
}

const _GLOBAL = Object.freeze({
    mini: true
})


export { StatusCode, StatusList, KycTypes, KycStatusList, KycStatus, ICONS_FONT, TEXT_FONT, _GLOBAL }
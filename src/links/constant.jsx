import HowToVoteIcon from "@mui/icons-material/HowToVote";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
const StatusCode = Object.freeze({
  REVIEW: 0,
  VOTING: 1,
  ACCEPTANCE: 3,
  REJECTION: 4,
  MANDATE: 5,
  REFERENDUM: 6,
});

const KycTypes = Object.freeze({
  LICENSES: 0,
  CITIZENSHIP: 1,
  PAN_CARD: 2,
  VOTER_CARD: 3,
  OTHER: 4,
});

const KycStatus = Object.freeze({
  PENDING: 0,
  PROCESSING: 1,
  VERIFIED: 2,
  NOT_VERIFIED: 3,
});

const ICONS_FONT = Object.freeze({
  xs: "15px",
  sm: "20px",
});

const TEXT_FONT = Object.freeze({
  xs: "11px",
  sm: "13px",
});

const KycStatusList = {
  [KycStatus.PENDING]: {
    color: "info",
    icon: <ErrorOutlineIcon sx={{ fontSize: ICONS_FONT }} />,
  },
  [KycStatus.PROCESSING]: {
    color: "primary",
    icon: <PendingIcon sx={{ fontSize: ICONS_FONT }} />,
  },
  [KycStatus.VERIFIED]: {
    color: "success",
    icon: <CheckCircleIcon sx={{ fontSize: ICONS_FONT }} />,
  },
  [KycStatus.NOT_VERIFIED]: {
    color: "error",
    icon: <ErrorIcon sx={{ fontSize: ICONS_FONT }} />,
  },
};

const StatusList = {
  [StatusCode.REVIEW]: {
    name: "Review",
    color: "info",
    icon: <InsertCommentIcon sx={{ fontSize: ICONS_FONT }} />,
  },
  [StatusCode.VOTING]: {
    name: "Voting",
    color: "primary",
    icon: <HowToVoteIcon sx={{ fontSize: ICONS_FONT }} />,
  },
  [StatusCode.ACCEPTANCE]: {
    name: "Mandate",
    color: "success",
    icon: <CheckCircleIcon sx={{ fontSize: ICONS_FONT }} />,
  },
  [StatusCode.REJECTION]: {
    name: "Rejected",
    color: "error",
    icon: <ErrorIcon sx={{ mr: 1, fontSize: ICONS_FONT }} />,
  },
  [StatusCode.MANDATE]: {
    name: "Vote for Referendum",
    icon: <ThumbsUpDownIcon sx={{ fontSize: ICONS_FONT, color: "#ddd013" }} />,
  },
  [StatusCode.REFERENDUM]: {
    name: "Referendum",
    icon: <GppGoodIcon sx={{ fontSize: ICONS_FONT, color: "#00897b" }} />,
  },
};

const _GLOBAL = Object.freeze({
  mini: false,
});

export {
  StatusCode,
  StatusList,
  KycTypes,
  KycStatusList,
  KycStatus,
  ICONS_FONT,
  TEXT_FONT,
  _GLOBAL,
};

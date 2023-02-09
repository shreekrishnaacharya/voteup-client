import { LoadingButton } from "@mui/lab";
import {
  SentimentVeryDissatisfied,
  SentimentSatisfiedAlt,
} from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { useEffect } from "react";

const LoaderIndicator = styled("div")(({ theme }) => ({
  position: "relative",
  width: "10px",
  height: "10px",
  borderRadius: "5px",
  backgroundColor: "#9880ff",
  color: "#9880ff",
  animation: "dotFlashing 1s infinite linear alternate",
  "&:before, &:after": {
    content: "''",
    display: "inline-block",
    position: "absolute",
    top: 0,
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    backgroundColor: "#9880ff",
    color: "#9880ff",
    animation: "dotFlashing 1s infinite alternate",
  },
  animationDelay: "0.5s",
  "&:after": {
    left: "15px",
    animationDelay: "1s",
  },
  "&:before": {
    left: "-15px",
    animationDelay: "0s",
  },

  "@keyframes dotFlashing": {
    "0%": {
      backgroundColor: "#9880ff",
    },
    "50%": {
      backgroundColor: "#ebe6ff",
    },
    "100%": {
      backgroundColor: "#ebe6ff",
    },
  },
}));

const MandateButton = ({ hasMandate, onClick, sxy, sxn, ...rest }) => {
  const [loading, setLoading] = useState({ yes: false, no: false });
  useEffect(() => {
    setLoading({ ...loading, yes: false, no: false });
  }, [hasMandate]);
  return (
    <>
      <LoadingButton
        onClick={() => {
          onClick("yes");
          setLoading({ ...loading, yes: true });
        }}
        color={hasMandate == "yes" ? "info" : "primary"}
        startIcon={<SentimentSatisfiedAlt />}
        variant={hasMandate == "yes" ? "contained" : "outlined"}
        loadingIndicator={<LoaderIndicator />}
        loading={loading.yes}
        disabled={loading.no}
        sx={sxy}
        {...rest}
      >
        {hasMandate == "yes" ? "Accepted/Agreed" : "Accept/Agree"}
      </LoadingButton>
      <LoadingButton
        onClick={() => {
          onClick("no");
          setLoading({ ...loading, no: true });
        }}
        color={hasMandate == "no" ? "warning" : "primary"}
        startIcon={<SentimentVeryDissatisfied />}
        variant={hasMandate == "no" ? "contained" : "outlined"}
        loadingIndicator={<LoaderIndicator />}
        loading={loading.no}
        disabled={loading.yes}
        sx={sxy}
        {...rest}
      >
        {hasMandate == "no" ? "Rejected/Disagreed" : "Reject/Disagree"}
      </LoadingButton>
    </>
  );
};

export default React.memo(MandateButton);

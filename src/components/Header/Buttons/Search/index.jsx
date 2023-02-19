import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Slide,
  TextField,
  Tooltip,
} from "@mui/material";
import { StatusCode, StatusList } from "links";
import { useState, forwardRef } from "react";
import { CapitalText } from "_services";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "redux/action/searchAction";
import { setFeedList } from "redux/action/feedsAction";
import PropTypes from "prop-types";
import { _GLOBAL } from "links";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogWrapper = styled(Dialog)(
  () => `
      .MuiDialog-container {
          height: auto;
      }
      
      .MuiDialog-paperScrollPaper {
          max-height: calc(100vh - 64px)
      }
  `
);

const SearchInputWrapper = styled(TextField)(
  ({ theme }) => `
      background: ${theme.colors.alpha.white[100]};
  
      .MuiInputBase-input {
          font-size: ${theme.typography.pxToRem(17)};
      }
  `
);

const DialogTitleWrapper = styled(DialogTitle)(
  ({ theme }) => `
      background: ${theme.colors.alpha.black[5]};
      padding: ${theme.spacing(3)}
  `
);
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.07),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  marginRight: 10,
  display: "inline-flex",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchClearIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  height: "100%",
  display: "flex",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function HeaderSearch({ openDialog, setDialog }) {
  const { mini } = _GLOBAL;
  const search = useSelector((state) => state.search);
  const [stext, setStext] = useState(search.text);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (event.key === "Enter") {
      dispatch(setSearch({ ...search, text: stext }));
    }
  };

  const handleSaveChange = (event) => {
    dispatch(setSearch({ ...search, text: stext }));
    setDialog(false);
  };

  const handleClose = () => {
    setDialog(false);
  };

  const handleClickOpen = () => {
    setDialog(true);
  };
  const handleTextChange = (event) => {
    setStext(event.target.value);
  };
  const handleCatChange = (event) => {
    dispatch(setSearch({ ...search, cat: event.target.value }));
    dispatch(setFeedList([]));
  };
  const handleClear = (event) => {
    dispatch(setSearch({ ...search, text: "" }));
    dispatch(setFeedList([]));
    setStext("");
  };
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Tooltip arrow title="Search">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              value={stext}
              onChange={handleTextChange}
              onKeyPress={handleChange}
              inputProps={{ "aria-label": "search" }}
            />
            <SearchClearIconWrapper
              onClick={handleClear}
              style={
                stext == ""
                  ? { opacity: 0 }
                  : {
                      cursor: "pointer",
                      opacity: 1,
                    }
              }
            >
              <ClearIcon />
            </SearchClearIconWrapper>
          </Search>
        </Tooltip>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            size="small"
            value={search.cat}
            displayEmpty
            onChange={handleCatChange}
          >
            <MenuItem key={"all"} value="">
              All
            </MenuItem>
            {Object.values(StatusCode).map((e) => {
              return (
                <MenuItem key={e} value={e}>
                  {CapitalText(StatusList[e].name)}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        {!mini && (
          <Tooltip arrow title="Search">
            <IconButton color="primary" onClick={handleClickOpen}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
        )}
        <DialogWrapper
          open={openDialog}
          TransitionComponent={Transition}
          keepMounted
          scroll="paper"
          onClose={handleClose}
          fullScreen
          fullWidth
        >
          <DialogTitleWrapper sx={{ m: 0, p: 2 }}>
            {"Search"}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <ClearIcon />
            </IconButton>
          </DialogTitleWrapper>
          <DialogContent>
            <Grid py={1} container spacing={1}>
              <Grid item xs={12}>
                <SearchInputWrapper
                  value={stext}
                  autoFocus
                  onChange={handleTextChange}
                  onKeyPress={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <SearchClearIconWrapper
                        onClick={handleClear}
                        style={
                          stext == ""
                            ? { opacity: 0 }
                            : {
                                cursor: "pointer",
                                opacity: 1,
                              }
                        }
                      >
                        <ClearIcon />
                      </SearchClearIconWrapper>
                    ),
                  }}
                  placeholder="Search terms here."
                  fullWidth
                  label="Search"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Select
                    fullWidth
                    size="small"
                    value={search.cat}
                    displayEmpty
                    onChange={handleCatChange}
                    sx={{
                      fontSize: 15,
                      py: 0.81,
                    }}
                  >
                    <MenuItem key={"all"} value="">
                      All
                    </MenuItem>
                    {Object.values(StatusCode).map((e) => {
                      return (
                        <MenuItem key={e} value={e}>
                          {CapitalText(StatusList[e].name)}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="info"
                  disabled={stext == ""}
                  onClick={handleSaveChange}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </DialogWrapper>
      </Box>
    </>
  );
}

HeaderSearch.propTypes = {
  openDialog: PropTypes.bool,
  setDialog: PropTypes.func,
};
HeaderSearch.defaultValue = {
  openDialog: false,
  setDialog: () => {},
};

export default HeaderSearch;

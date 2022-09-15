import { forwardRef, useState } from 'react';
import {
  Avatar,
  Link,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  lighten,
  List,
  ListItem,
  ListItemAvatar,
  TextField,
  Tooltip,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Hidden,
  styled,
  FormControl,
  Select,
  MenuItem
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from 'redux/action/searchAction';
import { setFeedList } from 'redux/action/feedsAction';
import { CapitalText } from '_services';
import { StatusCode } from 'links';
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

const SearchClearIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  height: '100%',
  display: 'flex'
}));

const DialogTitleWrapper = styled(DialogTitle)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(3)}
`
);

function HeaderSearch() {
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(search.text);

  const handleTextChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleChange = (event) => {
    if (event.key === 'Enter') {
      dispatch(setSearch({ ...search, text: searchValue }));
      setOpen(false);
    }
  };


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCatChange = (event) => {
    dispatch(setSearch({ ...search, cat: event.target.value }));
    dispatch(setFeedList([]));
  };
  const handleClear = (event) => {
    dispatch(setSearch({ ...search, text: "" }));
    dispatch(setFeedList([]));
    setSearchValue("")
  };
  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <Tooltip arrow title="Search">
        <IconButton color="primary" onClick={handleClickOpen}>
          <SearchTwoToneIcon />
        </IconButton>
      </Tooltip>
      <DialogWrapper
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="md"
        fullWidth
        scroll="paper"
        onClose={handleClose}

      >
        <DialogTitleWrapper>
          <Box sx={{ display: 'flex' }} gap={1}>
            <SearchInputWrapper
              value={searchValue}
              autoFocus
              onChange={handleTextChange}
              onKeyPress={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <SearchClearIconWrapper
                    onClick={handleClear}
                    style={(searchValue == "" ? { opacity: 0 } : {
                      cursor: 'pointer',
                      opacity: 1
                    })}
                  >
                    <ClearIcon />
                  </SearchClearIconWrapper>
                )
              }}
              placeholder="Search terms here..."
              fullWidth
              label="Search"
            />
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                size="small"
                value={search.cat}
                displayEmpty
                onChange={handleCatChange}
                sx={{
                  fontSize: 15,
                  py: 0.7
                }}
              >
                <MenuItem keys={'all'} value="">All</MenuItem>
                {Object.keys(StatusCode).map(e => {
                  return <MenuItem keys={e} value={StatusCode[e]}>{CapitalText(e)}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Box>
        </DialogTitleWrapper>
      </DialogWrapper>
    </Box>
  );
}

export default HeaderSearch;

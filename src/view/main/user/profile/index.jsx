import ProfileCover from "./ProfileCover";
import { useState, useEffect } from "react";
import { getProfile, updateProfile } from "../service";
import EditProfileTab from "./EditProfileTab";
import { Tabs, Tab, Grid, styled } from "@mui/material";
import Feed from "view/main/feed/view/Feed";
import tokenService from "_services/token.service";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "redux/action/profileAction";
import { useSnackbar } from "notistack";
import { Helmet } from "react-helmet";
import HiddenList from "./HiddenList";

const TabsWrapper = styled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

function ManagementUserProfile() {
  const [currentTab, setCurrentTab] = useState("activity");
  const userProfile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const userModel = tokenService.getUser();
  const tabs = [
    { value: "activity", label: "Post" },
    { value: "edit_profile", label: "Edit Profile" },
    { value: "hidden_post", label: "Blocked Post" },
  ];
  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };
  useEffect(() => {
    getProfile().then((e) => {
      if (e.flag) {
        dispatch(setProfile(e.data));
      }
    });
  }, []);

  const saveImage = (fdata, closeModel) => {
    updateProfile(fdata).then((e) => {
      if (e.flag) {
        enqueueSnackbar("Updated success", {
          variant: "success",
        });
        dispatch(setProfile({ ...userProfile, ...e.data }));
        closeModel();
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>{"User Profile | Referendum 2.0"}</title>
      </Helmet>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <ProfileCover user={userProfile} saveImage={saveImage} />
        </Grid>
        <Grid item xs={12}>
          <TabsWrapper
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            scrollButtons="auto"
            indicator={true}
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </TabsWrapper>
        </Grid>
        <Grid item xs={12}>
          {currentTab === "activity" && (
            <Feed userModel={userModel} feedType={"profile"} />
          )}
          {currentTab === "edit_profile" && (
            <EditProfileTab userProfile={userProfile} />
          )}
          {currentTab === "hidden_post" && <HiddenList />}
        </Grid>
      </Grid>
    </>
  );
}

export default ManagementUserProfile;

import { Toolbar, IconButton, Button, Modal, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AboutMeMenuItems } from "../MenuGroup/AboutMeMenuItems";
import { MyServicesMenuItems } from "../MenuGroup/MyServiceMenuItems";
import Link from "@mui/material/Link";
import MyMenu from "./SubComponent/MyMenu";
import { useTheme } from "@mui/material/styles";
import MobileDrawer from "./SubComponent/MobileDrawer";
import BackToTopButton from "./SubComponent/BackToTopButton";
import ScrollToHide from "./SubComponent/ScrollToHide";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Mail } from "@mui/icons-material";

const rightLink = {
  fontSize: 16,
  ml: 3,
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};
export default function MyAppBar(props) {
  const [myServiceMenuOpen, setMyServiceMenuOpen] = useState(false);
  const [myServiceMenuAnchorEl, setMyServiceMenuAnchorEl] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  //For mobile
  const [drawOpen, setDrawOpen] = React.useState(false);

  const handleMyServiceMenuOpen = (e) => {
    setMyServiceMenuAnchorEl(e.currentTarget);
    setMyServiceMenuOpen(true);
  };
  const handleMyServiceMenuClose = () => {
    setMyServiceMenuAnchorEl(null);
    setMyServiceMenuOpen(false);
  };

  const [aboutMeMenuOpen, setAboutMeMenuOpen] = useState(false);
  const [aboutMeMenuOpenAnchorEl, setAboutMeMenuOpenAnchorEl] = useState(null);
  const handleAboutMeMenuOpen = (e) => {
    setAboutMeMenuOpenAnchorEl(e.currentTarget);
    setAboutMeMenuOpen(true);
  };
  const handleAboutMeMenuClose = () => {
    setAboutMeMenuOpenAnchorEl(null);
    setAboutMeMenuOpen(false);
  };
  const theme = useTheme();

  return (
    <>
      <ScrollToHide>
        <AppBar open={drawOpen}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              backgroundColor: theme.palette.bg.main,
              height: "70px",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setDrawOpen(true);
              }}
              edge="start"
              sx={{
                mr: 2,
                ...drawOpen,
                display: { sx: "block", sm: "block", md: "none" },
              }}
            >
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <Box sx={{ display: "flex", flex: 1, justifyContent: "center" }}>
              <Link
                variant="h6"
                underline="none"
                href="/"
                sx={{ fontSize: 30 }}
              >
                {"BoBroccoli"}
              </Link>
            </Box>
            <Box
              sx={{ flex: 1, display: { xs: "none", sm: "none", md: "flex" } }}
            >
              <Box sx={{ flex: 2, display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  sx={{ fontSize: 17 }}
                  onClick={handleMyServiceMenuOpen}
                >
                  {"My Service"}
                </Button>
                <MyMenu
                  id="myservice-menu"
                  anchorEl={myServiceMenuAnchorEl}
                  open={myServiceMenuOpen}
                  onClose={handleMyServiceMenuClose}
                  myMenuItems={MyServicesMenuItems}
                />

                <Button
                  variant="outlined"
                  sx={{ fontSize: 17 }}
                  onClick={handleAboutMeMenuOpen}
                >
                  {"About Me"}
                </Button>
                <MyMenu
                  id="aboutme-menu"
                  anchorEl={aboutMeMenuOpenAnchorEl}
                  open={aboutMeMenuOpen}
                  onClose={handleAboutMeMenuClose}
                  setContactModalOpen={() => setContactModalOpen(true)}
                  myMenuItems={AboutMeMenuItems}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                {/* <Link
                  variant="h6"
                  underline="none"
                  href="/"
                  sx={{ ...rightLink }}
                >
                  {"Sign In"}
                </Link>
                <Link
                  variant="h6"
                  underline="none"
                  href="/"
                  sx={{ ...rightLink }}
                >
                  {"Sign Up"}
                </Link> */}
              </Box>
            </Box>
            <Modal
              open={contactModalOpen}
              onClose={() => {
                setContactModalOpen(false);
                setAboutMeMenuOpen(false);
              }}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Box display={'flex'} flexDirection='row' alignItems='center' alignContent='space-around'>
                  <EmailIcon/>
                  <Typography ml={2} variant="h6" component="h2" color="black">
                    bowen4091761@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }}  display={'flex'} flexDirection='row'  alignItems='center'>
                  <PhoneIphoneIcon />
                  <Typography ml={2} variant="h6" component="h2" color="black">
                    2184091761
                  </Typography>
                </Box>
              </Box>
            </Modal>
          </Toolbar>
        </AppBar>
      </ScrollToHide>
      <MobileDrawer drawOpen={drawOpen} setDrawOpen={setDrawOpen} />

      <BackToTopButton />
    </>
  );
}

import { Toolbar, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { AboutMeMenuItems } from "../MenuGroup/AboutMeMenuItems";
import { MyServicesMenuItems } from "../MenuGroup/MyServiceMenuItems";
import Link from "@mui/material/Link";
import MyMenu from "./SubComponent/MyMenu";
import { useTheme } from "@mui/material/styles";
import MobileDrawer from "./SubComponent/MobileDrawer";
import BackToTopButton from "./SubComponent/BackToTopButton";
import ScrollToHide from "./SubComponent/ScrollToHide";

const rightLink = {
  fontSize: 16,
  ml: 3,
};
export default function MyAppBar(props) {
  const [myServiceMenuOpen, setMyServiceMenuOpen] = useState(false);
  const [myServiceMenuAnchorEl, setMyServiceMenuAnchorEl] = useState(null);
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
  const topRef = useRef();

  return (
    <>
      <ScrollToHide>
        <AppBar open={drawOpen}>
          <Toolbar
            ref={topRef}
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
                <Link
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
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ScrollToHide>
      <MobileDrawer drawOpen={drawOpen} setDrawOpen={setDrawOpen} />

      <BackToTopButton topRef={topRef} />
    </>
  );
}

import React from "react";
import { ClickAwayListener, IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import Link from "@mui/material/Link";
import { DrawerMenuItems } from "../../MenuGroup/DrawerMenuItems";
import { DrawerHeader } from "./DrawerHeader";
import { useNavigate } from "react-router-dom";

const drawerWidth = 280;
const MobileDrawer = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={() => {
        props.setDrawOpen(false);
      }}
    >
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: theme.palette.menu_grey.main,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={props.drawOpen}
      >
        <DrawerHeader>
          <Box sx={{ display: "flex", flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <Link
                variant="h6"
                underline="none"
                href="/"
                sx={{
                  display: "flex",
                  flex: 1,
                  fontSize: 22,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {"Welcome"}
              </Link>
            </Box>
            <IconButton
              onClick={() => {
                props.setDrawOpen(false);
              }}
            >
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </Box>
        </DrawerHeader>
        <Divider sx={{ borderColor: theme.palette.bg_secondary.main }} />
        <List>
          {DrawerMenuItems.slice(0, 3).map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => {navigate(item.path)}}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: theme.palette.bg_secondary.main }} />
        <List>
          {DrawerMenuItems.slice(3, 4).map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => {navigate(item.path)}}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </ClickAwayListener>
  );
};

export default MobileDrawer;

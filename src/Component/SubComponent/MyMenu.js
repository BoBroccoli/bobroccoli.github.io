import React from "react";
import { MenuItem, Menu } from "@mui/material";
import { useNavigate } from "react-router-dom";
const MyMenu = (props) => {
  const navigate = useNavigate();
  const handleClick = (path) => () => {
    if(path === 'contact') {
      props.setContactModalOpen()
    }
    else
      navigate(path);
  };
  return (
    <Menu
      id={props.id}
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.onClose}
    >
      {props.myMenuItems.map((item) => (
        <MenuItem
          key={item.id}
          onClick={handleClick(item.path)}
          sx={{ color: "primary.main" }}
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MyMenu;

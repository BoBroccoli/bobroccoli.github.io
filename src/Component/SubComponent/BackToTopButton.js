import { IconButton } from "@mui/material";
import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
const BackToTopButton = (props) => {
  const handleScroll = (topRef) => {
    window.scrollTo({
      top: topRef.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <IconButton
      sx={{ position: "fixed", bottom: 10, right: 10 }}
      onClick={() => {
        handleScroll(props.topRef.current);
      }}
    >
      <ArrowCircleUpIcon sx={{ width: 40, height: 40, color: "#3AA14F" }} />
    </IconButton>
  );
};

export default BackToTopButton;

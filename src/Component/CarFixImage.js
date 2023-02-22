import { useTheme } from "@emotion/react";
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import MySheet from "./SubComponent/MySheet";
const CarFixImage = () => {
  const mediumView = useMediaQuery("(min-width:800px)");
  const theme = useTheme();
  return (
    <MySheet sx={{ marginTop: 5 }} width="90%">
      <ImageList
        sx={{ height: 1150, padding: 5, width: "100%" }}
        cols={mediumView ? 2 : 1}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
          >
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position:'absolute',
                opacity: "0",
                color: 'black',
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                transition: theme.transitions.create("opacity", {
                  duration: theme.transitions.duration.standard,
                  easing: theme.transitions.easing.easeOut,
                }),
                "&:hover": {
                   opacity: 0.8
                },
              }}
            >
              <Typography alignContent='center' sx={{position:'absolute'}}>{item.title}</Typography>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </MySheet>
  );
};
const itemData = [
  {
    img: "./1.jpg",
    title: "Timing Belt Replacement",
  },
  {
    img: "./5.jpg",
    title: "AC Recharge",
  },
  {
    img: "./4.jpg",
    title: "Brakes",
  },
  {
    img: "./3.jpg",
    title: "Paint",
  },
  {
    img: "./6.jpg",
    title: "AC compressor",
  },
  {
    img: "./2.jpg",
    title: "Hood Latch",
  },
  
];
export default CarFixImage;

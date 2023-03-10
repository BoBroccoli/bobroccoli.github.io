import { Box, Stack } from "@mui/material";
import React from "react";

const CodeServicePage = () => {
  return (
    <>
      <Stack spacing={2}>
        <Box
          sx={{
            backgroundImage: 'url(./web_building.png)',
            width: 350,
            height: 350,
            backgroundSize: "cover",
          }}
        />
      </Stack>
    </>
  );
};

export default CodeServicePage;

import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CodeServicePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack spacing={{ xs: 1, md: 10 }} mt={10} mb={10}>
        <Divider>
          <Typography variant="h3" color="#3AA14F" align="center">
            Current Projects
          </Typography>
        </Divider>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            sx={{
              backgroundImage: "url(./web_building.png)",
              width: { xs: 400, md: 900 },
              height: { xs: 400, md: 900 },
              backgroundSize: "cover",
            }}
          />
          <Paper
            sx={{
              width: { xs: "80%", md: "40%" },
              position: "relative",
              top: { xs: "-70px" },
              left: { md: "-10%" },
              backgroundColor: "#3AA14F",
              p: 3,
            }}
          >
            <Typography variant="h3" sx={{ p: 3 }}>
              Build Website
            </Typography>
            <Typography variant="body1" color={"white"} sx={{ p: 3 }}>
              Customize website for your portforlio or your business with as low
              as $25/month.
            </Typography>
          </Paper>
        </Box>

        <Box
          display="flex"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
          justifyContent="center"
          alignItems="center"
        >
          <Paper
            sx={{
              width: { xs: "80%", md: "40%" },
              position: "relative",
              top: { xs: "70px" },
              left: { md: "10%" },
              backgroundColor: "#3AA14F",
              p: 3,
            }}
          >
            <Typography variant="h3" sx={{ p: 3 }}>
              Create Connection
            </Typography>
            <Typography variant="body1" color={"white"} sx={{ p: 3 }}>
              Help you connect to experienced professional from many companies.
              Understand what they do and what technologies they use.
            </Typography>
          </Paper>
          <Box
            sx={{
              backgroundImage: "url(./industry.png)",
              width: { xs: 400, md: 900 },
              height: { xs: 400, md: 900 },
              backgroundSize: "cover",
            }}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={{ width: 500, backgroundColor: "#3AA14F" }}
            onClick={() => {
              navigate("/schedule");
            }}
          >
            {"Schedule an appointment or directly contact me"}
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default CodeServicePage;

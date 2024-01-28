import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Divider, Paper, styled } from "@mui/material";

const MyTypography = styled(Typography)`
  color: black;
`;

export default function MyTimeline() {
  return (
    <Paper
      sx={{
        width: { sx: "100%", md: "40%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box width="95%" marginTop={2}>
        <Divider>
          <Typography variant="h4" color="black">
            Education and Career
          </Typography>
        </Divider>
      </Box>
      <Timeline sx={{ width: "95%", justifyContent: "space-around"}}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="#3AA14F"
          >
            05-10-2014
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Avatar alt="M" src="/umn.jfif" sx={{ width: 75, height: 75 }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{ py: "12px", px: 2, width: { xs: "auto", sm: "400px" } }}
          >
            <MyTypography variant="h5" component="span">
              UMD
            </MyTypography>
            <MyTypography variant="subtitle1">
              Computer Science
            </MyTypography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="h6"
            color="#3AA14F"
          >
            07-20-2019
          </TimelineOppositeContent>

          <Avatar alt="M" src="/umn.jfif" sx={{ width: 75, height: 75 }} />

          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <MyTypography variant="h5" component="span">
              UMD
            </MyTypography>
            <MyTypography variant="subtitle1">
              Computer Science
            </MyTypography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="#3AA14F"
          >
            10-24-2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Avatar
              alt="M"
              src="/gartner.jfif"
              sx={{ width: 75, height: 75 }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <MyTypography variant="h5" component="span">
              Gartner
            </MyTypography>
            <MyTypography variant="subtitle1">Software Engineer</MyTypography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="#3AA14F"
          >
            05-02-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Avatar alt="M" src="/meta.jfif" sx={{ width: 75, height: 75 }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <MyTypography variant="h5" component="span">
              Meta
            </MyTypography>
            <MyTypography variant="subtitle1">Software Engineer</MyTypography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Paper>
  );
}

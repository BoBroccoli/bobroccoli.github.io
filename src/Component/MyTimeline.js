import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import MySheet from "./SubComponent/MySheet";
import { Avatar, styled } from "@mui/material";

const MyTypography = styled(Typography)`
  color: black;
`;

export default function MyTimeline() {
  return (
    <MySheet
      sx={{ "& p.MuiTypography-root": { fontSize: 25 }, marginTop: {xs: '40px'} }}
      subject="My Experience"
    >
      <Timeline>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#3AA14F"
          >
            05-10-2014
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <Avatar alt="M" src="/umn.jfif" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, width:{xs: "auto", sm: '400px'} }}>
            <MyTypography variant="h6" component="span">
              University of Minnesota
            </MyTypography>
            <MyTypography variant="subtitle2">
              Graduated Computer Science (B.S.)
            </MyTypography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="#3AA14F"
          >
            07-20-2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <Avatar alt="M" src="/umn.jfif" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <MyTypography variant="h6" component="span">
              University of Minnesota
            </MyTypography>
            <MyTypography variant="subtitle2">
              Graduated Computer Science (M.S.)
            </MyTypography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#3AA14F"
          >
            10-24-2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <Avatar alt="M" src="/gartner.jfif" />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <MyTypography variant="h6" component="span">
              Gartner
            </MyTypography>
            <MyTypography variant="subtitle2">Software Engineer</MyTypography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#3AA14F"
          >
            05-02-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="primary" variant="outlined">
              <Avatar alt="M" src="/meta.jfif" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <MyTypography variant="h6" component="span">
              Meta
            </MyTypography>
            <MyTypography variant="subtitle2">Partner Engineer</MyTypography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#3AA14F"
          >
            05-02-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="primary" variant="outlined">
              <Avatar alt="M" src="/od.jfif" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <MyTypography variant="h6" component="span">
              OnDeck
            </MyTypography>
            <MyTypography variant="subtitle2">Senior Software Engineer</MyTypography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </MySheet>
  );
}

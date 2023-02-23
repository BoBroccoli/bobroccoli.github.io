import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { LineUpTypography } from "./StyledComponent/LineUpTypography";
import CodingCard from "./SubComponent/CodingCard";
const ServicesCards = () => {
  const [webBuildingMoreExpanded, setWebBuildingMoreExpanded] = useState(false);
  const [webTeachingMoreExpanded, setWebTeachingMoreExpanded] = useState(false);
  const [webConversationMoreExpanded, setWebConversationMoreExpanded] =
    useState(false);
    const MyIntro = styled(Box)`
  animation: slide-bounce 1s ease-in-out;
  @keyframes slide-bounce {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(-35px);
    }
    100% {
      transform: translateX(0);
    }
  }
`

  const codingImageUrl = "./web_building.png";
  const webTeachingUrl = "./car.png";
  const conversationImageUrl = "./conversation.png";

  const codingCardTitle = "Web / Coding";
  const codingCardContent =
    "Whether it's for personal use or business, I am here to help you create a website that meets your unique needs and requirements. Let's take your online presence to the next level! Contact me for more information on how I can help you build the website of your dreams.";
  const teachingCardTitle = "Car Project";
  const teachingCardContent =
    "I offer a comprehensive coding assistant service that covers everything from data structures to interview preparation. My goal is to help you strengthen your coding abilities and achieve your career aspirations. With my expertise and personalized approach, I am confident that I can help you reach your full potential. Let's work together to enhance your coding skills and advance your career.";
  const converstationCardTitle = "Conversation";
  const converstationCardContent =
    "Of course, anything you want to share, any new technologies you learned which is cool, I love to hear and have conversation with you.";

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center",  backgroundColor: "#dcdcdc" }}
      >
        <Box
          sx={{
            display: "flex",
            backgroundAttachment: "fixed",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: "url(./coding_bg.png)",
            backgroundSize: "cover",
            width: "100%",
            height: { xs: 400, md: 900, lg: 1000 },
            backgroundRepeat: "no-repeat",
          }}
        >
          <MyIntro
            sx={{
              backgroundColor: "white",
              opacity: 0.7,
              width: { xs: "100%", md: "50%" },
              flexWrap: "wrap",
              padding: 10,
            }}
          >
            <Typography
              marginBottom={10}
              align="center"
              variant="h4"
              color={"black"}
            >
              Introduction
            </Typography>
            <LineUpTypography align="center" color={"black"}>
              Hello and welcome to my personal website!
            </LineUpTypography>
          </MyIntro>
        </Box>

        <Box
          sx={{
            marginTop: 5,
            width: "90%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <CodingCard
            expand={webBuildingMoreExpanded}
            setExpand={setWebBuildingMoreExpanded}
            imageUrl={codingImageUrl}
            cardTitle={codingCardTitle}
            cardContent={codingCardContent}
          ></CodingCard>
          <CodingCard
            expand={webTeachingMoreExpanded}
            setExpand={setWebTeachingMoreExpanded}
            imageUrl={webTeachingUrl}
            cardTitle={teachingCardTitle}
            cardContent={teachingCardContent}
          ></CodingCard>
          <CodingCard
            expand={webConversationMoreExpanded}
            setExpand={setWebConversationMoreExpanded}
            imageUrl={conversationImageUrl}
            cardTitle={converstationCardTitle}
            cardContent={converstationCardContent}
          ></CodingCard>
        </Box>
      </Box>
    </>
  );
};

export default ServicesCards;

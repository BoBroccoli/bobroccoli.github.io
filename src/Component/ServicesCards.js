import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { BouncyCard } from "./StyledComponent/BouncyCard";
import { LineUpTypography } from "./StyledComponent/LineUpTypography";
import ServiceCard from "./SubComponent/ServiceCard";
const ServicesCards = () => {
  const [webBuildingMoreExpanded, setWebBuildingMoreExpanded] = useState(false);
  const [webTeachingMoreExpanded, setWebTeachingMoreExpanded] = useState(false);
  const [webConversationMoreExpanded, setWebConversationMoreExpanded] =
    useState(false);
    const [phoneMoreExpanded, setPhoneMoreExpanded] =
    useState(false);

  const codingImageUrl = "./web_building.png";
  const webTeachingUrl = "./car.png";
  const conversationImageUrl = "./conversation.png";
  const phoneImagUrl = './phone.png';

  const codingCardTitle = "Web / Coding";
  const codingCardContent =
    "Whether it's for personal use or business, I am here to help you create a website that meets your unique needs and requirements. Let's take your online presence to the next level! Contact me for more information on how I can help you build the website of your dreams.";
  const teachingCardTitle = "Car Project";
  const teachingCardContent =
    "I have worked on many car projects and I love working on cars. If you around Stamford, CT area, I can help you get things replaced or repaired at your place.";
  const converstationCardTitle = "Conversation";
  const converstationCardContent =
    "Of course, anything you want to share, any new technologies you learned which is cool, I love to hear and have conversation with you.";
  const phoneCardTitle = "PC / Laptop / Phone";
  const phoneCardContent =
    "I worked on personal projects in the field of electronics, such as assembling my own gaming PC by selecting components like the CPU and graphics card. I have replaced various laptop components, including hard drives and batteries, I have also replaced phone batteries and screens, etc.";
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
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
            height: { xs: 800, md: 900, lg: 1000 },
            backgroundRepeat: "no-repeat",
          }}
        >
          <BouncyCard
            sx={{
              backgroundColor: "white",
              opacity: 0.7,
              width: { xs: "90%", md: "50%" },
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
          </BouncyCard>
        </Box>

        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            flexWrap: 'wrap'
          }}
        >
          <ServiceCard
            expand={webBuildingMoreExpanded}
            setExpand={setWebBuildingMoreExpanded}
            imageUrl={codingImageUrl}
            cardTitle={codingCardTitle}
            cardContent={codingCardContent}
          ></ServiceCard>
          <ServiceCard
            expand={webTeachingMoreExpanded}
            setExpand={setWebTeachingMoreExpanded}
            imageUrl={webTeachingUrl}
            cardTitle={teachingCardTitle}
            cardContent={teachingCardContent}
          ></ServiceCard>
          <ServiceCard
            expand={webConversationMoreExpanded}
            setExpand={setWebConversationMoreExpanded}
            imageUrl={conversationImageUrl}
            cardTitle={converstationCardTitle}
            cardContent={converstationCardContent}
          ></ServiceCard>
          <ServiceCard
            expand={phoneMoreExpanded}
            setExpand={setPhoneMoreExpanded}
            imageUrl={phoneImagUrl}
            cardTitle={phoneCardTitle}
            cardContent={phoneCardContent}
          ></ServiceCard>
        </Box>
      </Box>
    </>
  );
};

export default ServicesCards;
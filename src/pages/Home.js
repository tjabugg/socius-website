import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import GraphicCards from "../components/GraphicCard";
import StockExchange from "../assets/images/stock_exchange.jpg";
import FrozenIce from "../assets/images/frozen_ice.jpg";
import FriendsAtDusk from "../assets/images/friends.jpg";
import PostIt from "../assets/images/post_it_notes.jpg";
import CallToAction from "../components/CallToAction";
import TextAndImage from "../components/TextAndImage";
import HoverAnimation from "../assets/videos/hover_animation.json";
import SquarePattern from "../assets/svgs/organised/organised_1x1_pattern.svg";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import React from "react";
import {
  LetterContainer,
  Subheading,
  Body,
  CentreContainer,
  MyImage,
  CentreText,
  ParentContainer,
  TertiaryButton,
  Title,
} from "../styles";

const Home = () => {
  // An array and function
  const [textBlocks] = useState([
    {
      heading: "AI models for social scientists",
      paragraph:
        "Discovery driven by understanding, insights you can trust. We create open-source AI models for social scientists seeking to integrate the predictive power of AI with the interpretability of traditional methods. ",
      id: 1,
    },
    {
      heading: "Resources to streamline your workflows",
      paragraph:
        "Concentrate on your impactful discoveries, not technicalities. Our documentation features step-by-step instructions, tutorials and API references, making our AI models and datasets readily accessible.  ",
      id: 2,
      button: "Discover all of our resources",
      link: "forsocialscientists",
    },
  ]);

  const [graphicCards] = useState([
    {
      image: SquarePattern,
      heading: "Sentium: Accuracy engineered for understanding",
      paragraph:
        "Fusing AI linguistics with configurable logic for interpretable sentiment analysis",
      id: 1,
      link: "sentium",
    },
    {
      bgImage: FrozenIce,
      heading: "SentiBank: Unleashing the emotions of textual data",
      paragraph:
        "Providing a trusted foundation for sentiment analysis via verified dictionaries",
      id: 2,
      link: "sentibank",
    },
  ]);

  const [articleCards] = useState([
    {
      align: "center",
      image: FriendsAtDusk,
      padding: "0px",
      heading: "Sentium",
      paragraph:
        "Explore our comprehensive guides and resources to utilise Sentium, through documentation crafted to simplify and streamline your research workflow.",
      alt: "A group of friends sat in the foreground before an evening sky",
      id: 1,
      link: "forsocialscientists",
    },
    {
      bgColour: "#CBDCFF",
      animation: HoverAnimation,
      heading: "SentiBank",
      paragraph:
        "Access extensive documentation explaining the breadth of annotated lexica available in SentiBank, to amplify the capabilities of your sentiment analysis.",
      alt: "An animation from the socius design system",
      id: 2,
      link: "forsocialscientists",
    },
  ]);

  const [textAndImages] = useState([
    {
      heading: "Open Data",
      paragraph:
        "AI runs on data. Our growing open data repository curates diverse datasets to power new breakthroughs.",
      id: 1,
      button: "Explore our collection",
      link: "database",
    },
  ]);

  const [callToActions] = useState([
    {
      heading: "We're ready to combine our capabilities with your expertise.",
      button: "Get in touch",
      bgColour: "#3C46FF",
      id: 1,
      textColour: "White",
    },
  ]);

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Open-source AI models for social scientists | socius</title>
        <meta
          name="title"
          content="Open-source AI models for social scientists | socius"
        />
        <meta
          name="description"
          content="We create open-source AI models for social scientists seeking to integrate the power of AI with the interpretability of traditional methods."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://socius-ai.netlify.app/" /> */}
        <meta
          property="og:title"
          content="Open-source AI models for social scientists | socius"
        />
        <meta
          property="og:description"
          content="We create open-source AI models for social scientists seeking to integrate the power of AI with the interpretability of traditional methods."
        />
        <meta property="og:image" content={StockExchange} />
      </Helmet>
      <Hero />
      {/* Property name (blogs) with dynamic prop value {blogs} */}
      <TextBlocks
        textBlocks={textBlocks.filter((textBlock) => textBlock.id === 1)}
      />
      <ParentContainer>
        <LetterContainer>
          <MyImage
            style={{
              borderRadius: "20px",
            }}
            alt={`Black and white photo of the New York Stock Exchange`}
            src={PostIt}
          />
        </LetterContainer>
      </ParentContainer>

      <CentreText>
        <Subheading>Our Research</Subheading>
        <Body>
          Designing AI with social science principles. Our research focuses on
          leveraging AI while maintaining transparency and interpretability. 
        </Body>
        <TertiaryButton href="research">View all research</TertiaryButton>
      </CentreText>

      <GraphicCards graphicCards={graphicCards} />

      <TextBlocks
        textBlocks={textBlocks.filter((textBlock) => textBlock.id === 2)}
      />

      <LetterContainer>
        <MyImage
          style={{
            borderRadius: "0px",
          }}
          alt={`Black and white photo of the New York Stock Exchange`}
          src={StockExchange}
        />
      </LetterContainer>

      <CentreContainer>
        <Title
          style={{
            margin: "80px 0px 24px 0px",
          }}
        >
          Explore our documentation
        </Title>
      </CentreContainer>

      <ArticleCard articleCards={articleCards} alignment={"center"} />

      <TextAndImage textAndImages={textAndImages} />

      <QuoteContainer>
        <Subheading>
          “Artificial intelligence is not a substitute for human intelligence;
          it's a tool to help us think."
        </Subheading>
        <Body>Fei-Fei Li</Body>
      </QuoteContainer>
      <CallToAction callToActions={callToActions} />
    </>
  );
};

export default Home;

export const QuoteContainer = styled(CentreContainer)`
  margin: 20vh 20vw 20vh 20vw;
  gap: 8px;

  @media (max-width: 768px) {
    margin: 20vh 10vw 20vh 10vw;
  }

  @media (max-width: 414px) {
    margin: 10vh 10vw 10vh 10vw;
  }
`;

export const ButtonContainer = styled(CentreContainer)`
  margin: 24px;
`;

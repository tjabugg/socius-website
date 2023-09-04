import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import GraphicCards from "../components/GraphicCard";
import Studying from "../assets/videos/studying.mp4";
import StockExchange from "../assets/images/stock_exchange.jpg";
import FriendsAtDusk from "../assets/images/friends.jpg";
import CallToAction from "../components/CallToAction";
import TextAndImage from "../components/TextAndImage";
import styled from "styled-components";
// import PatternAnimation from "../assets/videos/5x5_animation.json";
import { Helmet } from "react-helmet";

import React from "react";
import {
  LetterContainer,
  Subheading,
  Body,
  CentreContainer,
  MyImage,
  CentreText,
} from "../styles";

const Home = () => {
  // An array and function
  const [textBlocks] = useState([
    {
      heading: "Bridging Artificial Intelligence to Human Knowledge",
      paragraph:
        "We create open-source AI models for computational social scientists seeking to integrate the predictive power of AI with the interpretability of traditional methods.\n\nUnlike standard R packages that can not interface with AI models or Python libraries that offer black-box solutions, we provide an open-source collection of transparent and accountable AI integrations. This allows researchers to leverage advanced techniques like deep-learning models, while still being able to understand and explain their models.",
      id: 1,
    },
    {
      heading: "Explore our resources for social scientists",
      paragraph:
        "Our comprehensive documentation illuminates everything we offer - from model logic to data sources and from methodology to applications. This transforms complexity into accessible clarity, streamlining research workflows. With obstacles removed, social scientists can concentrate on driving impactful discoveries.\n\nAdditionally, for academic researchers, we offer extensive free support - including guidance on methodologies, algorithms, and domain-specific fine-tuned models. This provides the necessary resources to fully leverage AI innovations across disciplines.",
      id: 2,
    },
  ]);

  const [articleCards] = useState([
    {
      align: "center",
      image: FriendsAtDusk,
      padding: "0px",
      heading: "CompliSent",
      paragraph:
        "Explore our comprehensive guides and resources to utilize CompliSent (sentium), through documentation crafted to simplify and streamline your research workflow.",
      alt: "A group of friends sat in the foreground before an evening sky",
      id: 1,
      // link: "",
    },
    {
      bgColour: "#CBDCFF",
      // animation: PatternAnimation,
      heading: "SentiBank",
      paragraph:
        "Access extensive documentation explaining the breadth of annotated lexica available in sentibank, to amplify the capabilities of your sentiment analysis.",
      alt: "An animation from the socius design system",
      id: 2,
      // link: "",
    },
  ]);

  const [textAndImages] = useState([
    {
      heading: "Opening new research frontiers by pooling knowledge resources",
      paragraph:
        "Our public open data repository contains a growing collection of datasets from researchers worldwide - an inclusive knowledge base to fuel new breakthroughs.\n\nBy pooling diverse data in one place, we aim to simplify the process of data discovery, preparation, and aggregation.\n\nOur first project, sentibank, has compiled the largest public repository of annotated sentiment lexicons and dictionaries. With this robust labeled data conveniently accessible in one location, researchers can advance sentiment analysis with greater precision and customization tailored to their field or application.",
      id: 1,
      button: "Explore sentibank",
      video: Studying,
      alt: "An video a woman sat at a desk reading through a book",
      link: "/sentibank",
    },
  ]);

  const [callToActions] = useState([
    {
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

      <CentreText>
        <Subheading>Our Research</Subheading>
        <Body>
          Our research focuses on integrating AI with social science principles,
          enhancing interpretability, transparency, and accountability - areas
          where the two diverge. 
        </Body>
      </CentreText>

      <GraphicCards></GraphicCards>

      <LetterContainer>
        <MyImage
          style={{
            borderRadius: "0px",
          }}
          alt={`Black and white photo of the New York Stock Exchange`}
          src={StockExchange}
        />
      </LetterContainer>

      <TextBlocks
        textBlocks={textBlocks.filter((textBlock) => textBlock.id === 2)}
      />

      <TextAndImage textAndImages={textAndImages} />

      <ArticleCard articleCards={articleCards} alignment={"center"} />

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

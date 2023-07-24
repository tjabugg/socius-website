import Hero from "../components/Hero";
import GraphicCard from "../components/GraphicCard";
import ArticleCard from "../components/ArticleCard";
import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
// import Random9x9Pattern01 from "../assets/svgs/random/random_9x9_01.svg";
// import Random5x5Pattern01 from "../assets/svgs/random/random_5x5_01.svg";
import Random16x9Pattern01 from "../assets/svgs/random/random_16x9_01.svg";
import Organised5x5Pattern01 from "../assets/svgs/organised/organised_5x5_01.svg";
import Studying from "../assets/videos/studying.mp4";
import StockExchange from "../assets/images/stock_exchange.jpg";
// import FrozenIce from "../assets/images/frozen_ice.jpg";
import FriendsAtDusk from "../assets/images/friends.jpg";
import CallToAction from "../components/CallToAction";
import TextAndImage from "../components/TextAndImage";
import styled from "styled-components";

import React from "react";
import {
  LetterContainer,
  H2,
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
        "We create publicly available AI models and systems that are not only state-of-the-art in terms of technical capabilities, but also deeply rooted in the principles of social science. Our objective is to advance the frontiers of social science research through the development and application of AI technologies. The story of Socius starts from a simple question: could computational intelligence help social scientists to consider every possible causative relationships between their theory-of-interest?",
      id: 1,
    },
    {
      heading: "Discover how social scientists use our AI toolkits ",
      paragraph:
        "Limited to academic researchers, we provide FREE 24/5 support in terms of methodologies, models, algorithms and many more.",
      id: 2,
    },
  ]);

  const [graphicCards] = useState([
    // {
    //   bgcolor: "#D9FFD8",
    //   graphic: Random9x9Pattern01,
    //   heading: "alphaVADER: a first step to compliance-proof",
    //   paragraph:
    //     "Aspect-based sentiment analysis model that analyzes text-based data ranging from media (i.e news) and social media (i.e reddit).",
    //   id: 1,
    //   link: "/alphavader",
    // },
    {
      bgcolor: "#193718",
      textColour: "white",
      graphic: Random16x9Pattern01,
      heading: "CompliSent: a first step to compliance-proof",
      paragraph:
        "Aspect-based sentiment analysis model that analyses text-based data ranging from media and social media.",
      id: 3,
      link: "/thisphenomenon",
    },
    // {
    //   bgImage: FrozenIce,
    //   opacity: "0",
    //   textColour: "white",
    //   heading: "This (phenomenon) looks like that (phenomena)",
    //   paragraph:
    //     "An AI model that “reasons” in a way that is similar to how economists and others explain why a current phenomenon looks like a past phenomena.",
    //   id: 2,
    //   link: "/thisphenomenon",
    // },
  ]);

  const [articleCards] = useState([
    {
      align: "center",
      image: FriendsAtDusk,
      padding: "0px",
      heading: "Sentiment Analysis",
      paragraph:
        "Systematically identify and study affective states and subjective information.",
      id: 1,
      link: "/",
    },
    {
      bgColour: "#00002E",
      image: Organised5x5Pattern01,
      heading: "Keyword Extraction",
      paragraph:
        "Identification of terms that best describe the subject of a document",
      id: 2,
      link: "/",
    },
  ]);

  const [textAndImages] = useState([
    {
      heading: "Find out about our progress via our open source database",
      paragraph:
        "We advance the understanding of Social Science through the development and application of AI technologies. We know more than we used to, but we still know too little. Social scientists, like any other natural scientists, should also equip with state-of-the-art AI models, but models that are compatible with the principles of social science. ",
      id: 1,
      button: "Learn more about our approach",
      video: Studying,
      link: "/database",
      imageDisplay: "none",
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
      <meta
        name="description"
        content="Socius creates publicly available AI models and systems that are not only state-of-the-art in terms of technical capabilities, but also deeply rooted in the principles of social science. Our objective is to advance the frontiers of social science research through the development and application of AI technologies. The story of Socius starts from a simple question: could computational intelligence help social scientists to consider every possible causative relationships between their theory-of-interest?"
      />
      <title>
        Bridging Artificial Intelligence to Human Knowledge | socius
      </title>
      <Hero />
      {/* Property name (blogs) with dynamic prop value {blogs} */}
      <TextBlocks
        textBlocks={textBlocks.filter((textBlock) => textBlock.id === 1)}
      />

      <CentreText>
        <H2>Our Research</H2>
        <Body>
          We aim to create AI tools that empower social scientists to make
          discoveries that were previously impossible, to uncover new insights
          into human behaviour and social systems, and to inform evidence-based
          decisions.
        </Body>
      </CentreText>

      <GraphicCard graphicCards={graphicCards} />

      {/* <ButtonContainer>
        <PrimaryButton href="/research">
          Explore all of our publications
        </PrimaryButton>
      </ButtonContainer> */}

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
      <ArticleCard articleCards={articleCards} alignment={"center"} />

      <TextAndImage textAndImages={textAndImages} />

      <QuoteContainer>
        <H2>
          "Artificial intelligence is not a substitute for human intelligence;
          it's a tool to help us think."
        </H2>
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

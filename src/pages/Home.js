import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import GraphicCards from "../components/GraphicCard";
import InformationCards from "../components/InformationCard";
import StockExchange from "../assets/images/stock_exchange.jpg";
import FrozenIce from "../assets/images/frozen_ice.jpg";
import Crossroads from "../assets/images/crossroads.jpg";
import FilmCrowd from "../assets/images/film_crowd.jpg";
import CallToAction from "../components/CallToAction";
import TextAndImage from "../components/TextAndImage";
import HoverAnimation from "../assets/videos/hover_animation.json";
import SquarePattern from "../assets/svgs/organised/organised_1x1_pattern.svg";
import BgBlue from "../assets/svgs/bg_blue.svg";
import BgMint from "../assets/svgs/bg_mint.svg";
import BgGreen from "../assets/svgs/bg_green.svg";
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
  TertiaryButton,
  Caption,
  Synopsis,
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
      caption: "Database",
      heading: "Transparent, reproducible research fuel",
      paragraph:
        "Leverage curated datasets or crawl data seamlessly through our growing open database.",
      id: 2,
      button: "Explore our collection",
      link: "database",
    },
  ]);

  const [graphicCards] = useState([
    {
      image: SquarePattern,
      heading: "sentibank: Encyclopedic Hub for Sentiment dictionaries",
      paragraph:
        "Domain-genre specific dictionaries tailored to your field of application",
      id: 1,
      link: "sentibank",
    },
    {
      bgImage: FrozenIce,
      heading: "RedditHarbor: Responsible ETL toolkit for Reddit data",
      paragraph: "Ethical, legal, and effortless extraction of Reddit data",
      id: 2,
      link: "https://github.com/socius-org/RedditHarbor",
    },
  ]);

  const [informationCards] = useState([
    {
      bgImage: BgBlue,
      heading: "Research",
      paragraph:
        "Our research designs transparent and interpretable AI systems guided by social science principles.",
      id: 1,
      link: "sentium",
    },
    {
      bgImage: BgMint,
      heading: "Database",
      paragraph:
        "Gain access to our curated datasets or crawl data seamlessly through our open data repository.",
      id: 2,
      link: "sentibank",
    },
    {
      bgImage: BgGreen,
      heading: "Documentation",
      paragraph:
        "Our documentation enables accessible AI, datasets, and tools through step-by-step API references.",
      id: 3,
    },
  ]);

  const [articleCards] = useState([
    {
      align: "center",
      image: Crossroads,
      padding: "0px",
      heading: "Sentium",
      paragraph:
        "Explore our comprehensive guides and resources to utilise Sentium, through documentation crafted to simplify and streamline your research workflow.",
      alt: "A group of friends sat in the foreground before an evening sky",
      id: 1,
      link: "",
    },
    {
      bgColour: "#CBDCFF",
      animation: HoverAnimation,
      align: "center",
      heading: "sentibank",
      paragraph:
        "Access extensive documentation explaining the breadth of annotated lexica available in sentibank, to amplify the capabilities of your sentiment analysis.",
      alt: "A group of friends sat in the foreground before an evening sky",
      id: 2,
      link: "https://socius-org.github.io/sentibank/Introduction.html",
    },
    {
      image: FilmCrowd,
      padding: "0px",
      heading: "RedditHarbor",
      paragraph:
        "Harness the power of RedditHarbor, our responsible ETL toolkit designed to simplify and streamline the process of collecting and storing Reddit data for your research needs.",
      alt: "An animation from the socius design system",
      id: 3,
      link: "https://socius-org.github.io/RedditHarbor/about.html",
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

      <CentreText>
        <Synopsis>
          Accelerate every stage of your research lifecycle with open-source AI
          models, datasets, and tools
        </Synopsis>
      </CentreText>

      <InformationCards informationCards={informationCards} />

      <TextAndImage />

      <TextBlocks
        textBlocks={textBlocks.filter((textBlock) => textBlock.id === 2)}
      />

      <GraphicCards graphicCards={graphicCards} />

      <LetterContainer>
        <MyImage
          style={{
            borderRadius: "0px",
          }}
          alt={`Black and white photo of the New York Stock Exchange`}
          src={StockExchange}
        />
      </LetterContainer>

      <CentreText>
        <Caption>Documentation</Caption>
        <Subheading>Focus on discoveries, not technicalities </Subheading>
        <Body>
          Our documentation enables accessible AI, datasets, and tools through
          step-by-step API references.{" "}
        </Body>
        <TertiaryButton href="documentation">
          Discover our resources
        </TertiaryButton>
      </CentreText>

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

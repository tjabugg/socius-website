import { useState } from "react";
import SecondaryHero from "../components/SecondaryHero";
import Random7x7Pattern01 from "../assets/svgs/random/random_7x7_pattern_01.svg";
import Organised15x15Pattern from "../assets/svgs/organised/organised_15x15_pattern.svg";
import Organised5x5Pattern from "../assets/svgs/organised/organised_5x5_pattern.svg";
import Organised10x10Pattern from "../assets/svgs/organised/organised_10x10_pattern.svg";
import Random7x7Pattern02 from "../assets/svgs/random/random_7x7_pattern_02.svg";
import Beach from "../assets/images/beach.jpg";
import Silhouette from "../assets/images/silhouette.jpg";
import Moma from "../assets/images/moma.jpg";
import CountrysidePainting from "../assets/images/countryside_painting.jpg";
import Sitting from "../assets/images/sitting.jpg";
import Whiteboard from "../assets/images/whiteboard.jpg";
import Wheat from "../assets/images/wheat.jpg";
import Code from "../assets/videos/code.mp4";
import React from "react";
import CallToAction from "../components/CallToAction";
import styled from "styled-components";
import ArticleCard from "../components/ArticleCard";
import { Body, ParentContainer, Subheading } from "../styles";
import { Helmet } from "react-helmet";

const ForSocialScientists = () => {
  const [secondaryHeroes] = useState([
    {
      heading: "Documentation designed to simplify usage and amplify impact",
      video: Code,
      videoAlt: "A close up a developer programming on a computer screen",
      id: 1,
    },
  ]);
  const [sentiumCards] = useState([
    {
      image: Random7x7Pattern01,
      bgColour: "#3C46FF",
      heading: "tag.pos",
      paragraph:
        "Parts-of-speech tagging to analyse input text’s grammatical and syntactic structure",
      id: 1,
    },
    {
      padding: "0px",
      image: Moma,
      heading: "parse.aspect",
      paragraph:
        "Extracts dependency relationships between aspects and their associated predicates",
      alt: "An aerial photograph of people sat on a bench in the MOMA.",
      id: 2,
    },
    {
      image: Organised15x15Pattern,
      bgColour: "#00002E",
      heading: "evaluate.senti",
      paragraph:
        "Refine sentiment score by applying predefined heuristics and sentiment dictionaries",
      id: 3,
    },
  ]);

  const [sentiBankCards] = useState([
    {
      image: Organised10x10Pattern,
      bgColour: "#51DA4C",
      heading: "ANEW",
      paragraph:
        "Emotional ratings across the dimensions of Pleasure, Arousal, and Dominance",
      id: 1,
    },
    {
      padding: "0px",
      image: Beach,
      heading: "General Inquirer",
      paragraph:
        "Lexicon categorising words across multiple psycholinguistic dimensions",
      alt: "An aerial shot of people on a beach and in the sea",
      link: "https://socius-org.github.io/sentibank/archive/General%20Inquirer.html",
      id: 2,
    },
    {
      image: Random7x7Pattern02,
      bgColour: "#193718",
      heading: "OpinionLexicon",
      paragraph:
        "A dictionary for product reviews, comprising words curated for informal language",
      link: "https://socius-org.github.io/sentibank/archive/OpinionLexicon.html",
      id: 3,
    },
    {
      padding: "0px",
      image: Sitting,
      heading: "SentiWordNet",
      paragraph:
        "A comprehensive dictionary that assigns graded sentiment scores to WordNet synsets",
      link: "https://socius-org.github.io/sentibank/archive/SentiWordNet.html",
      id: 4,
    },
    {
      padding: "0px",
      image: CountrysidePainting,
      heading: "Vader",
      paragraph:
        "A gold-standard lexicon optimised for social media sentiment analysis",
      link: "https://socius-org.github.io/sentibank/archive/VADER.html",
      id: 5,
    },
    {
      padding: "0px",
      image: Whiteboard,
      heading: "WordNet-Affect",
      paragraph:
        "Affective labels that are hierarchically organised based on WordNet synsets",
      link: "https://socius-org.github.io/sentibank/archive/WordNet-Affect.html",
      id: 6,
    },
  ]);

  const [redditHarborCards] = useState([
    {
      padding: "0px",
      image: Silhouette,
      heading: "Subreddit data collection",
      paragraph:
        "Collect data from specific subreddits, whether you’re interested in submissions, comments or user information",
      id: 1,
    },
    {
      image: Organised5x5Pattern,
      bgColour: "#D9FFD8",
      heading: "Keyword based data collection",
      paragraph:
        "Collect submissions based on specific keywords from your desired subreddits",
      id: 2,
    },
    {
      image: Wheat,
      padding: "0px",
      heading: "Database-driven data collection",
      paragraph:
        "Leverage your existing database to collect additional relevant data, such as comments from specific submissions",
      id: 3,
    },
  ]);

  const [callToActions] = useState([
    {
      heading:
        "Our mission is ensuring researchers have the resources to succeed. ",
      bgColour: "#00002E",
      id: 7,
      textColour: "#CBDCFF",
      button: "Request assistance",
    },
  ]);

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Resources designed simplify AI model integration | socius</title>
        <meta
          name="title"
          content="Resources designed simplify AI model integration | socius"
        />
        <meta
          name="description"
          content="Our mission is to ensure that researchers have the resources to succeed. Navigate our tools and data seamlessly with complete documentation."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://socius-ai.netlify.app/" /> */}
        <meta
          property="og:title"
          content="Resources designed simplify AI model integration | socius"
        />
        <meta
          property="og:description"
          content="Our mission is to ensure that researchers have the resources to succeed. Navigate our tools and data seamlessly with complete documentation."
        />
        <meta property="og:image" content={Moma} />
      </Helmet>

      <SecondaryHero secondaryHeroes={secondaryHeroes} />
      <HeadingContainer>
        <Subheading>Sentium</Subheading>
        <Body>Sentiment analysis designed for human interpretability</Body>
      </HeadingContainer>
      <ArticleCard articleCards={sentiumCards} />

      <HeadingContainer>
        <Subheading>sentibank</Subheading>
        <Body>Gold-standard sentiment dictionaries in one repository</Body>
      </HeadingContainer>
      <ArticleCard articleCards={sentiBankCards} />

      <HeadingContainer>
        <Subheading>RedditHarbor</Subheading>
        <Body>Ethical and legal ETL toolkit for Reddit data</Body>
      </HeadingContainer>

      <ArticleCard articleCards={redditHarborCards} />
      <CallToAction callToActions={callToActions} />
    </>
  );
};

export default ForSocialScientists;

export const HeadingContainer = styled(ParentContainer)`
  flex-direction: column;
  padding-left: 12px;

  @media (max-width: 1728px) {
    padding-left: 0px;
  }
`;

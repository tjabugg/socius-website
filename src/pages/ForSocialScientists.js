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
  const [compliSentCards] = useState([
    {
      image: Random7x7Pattern01,
      bgColour: "#3C46FF",
      heading: "tag_pos",
      paragraph: "Tags parts-of-speech to analyse grammar and syntax.",
      id: 1,
    },
    {
      padding: "0px",
      image: Moma,
      heading: "parse_aspect",
      paragraph:
        "Extracts dependency relationships between aspects and their predicates.",
      alt: "An aerial photograph of people sat on a bench in the MOMA.",
      id: 2,
    },
    {
      image: Organised15x15Pattern,
      bgColour: "#00002E",
      heading: "lex_dict",
      paragraph: "Compares predicates to sentiment lexicons for matches.",
      id: 3,
    },
    {
      padding: "0px",
      image: Silhouette,
      heading: "identify_ngram",
      paragraph:
        "Identifies matches between predicates and grammatical variations in n-gram lexicons.",
      id: 4,
    },
    {
      image: Organised5x5Pattern,
      bgColour: "#D9FFD8",
      heading: "fine_tune",
      paragraph: "Refines sentiment score using predefined logic.",
      id: 5,
    },
  ]);

  const [sentiBankCards] = useState([
    {
      image: Organised10x10Pattern,
      bgColour: "#51DA4C",
      heading: "AFINN",
      paragraph:
        "General purpose lexicon with sentiment ratings for common emotion words.",
      id: 1,
    },
    {
      padding: "0px",
      image: Beach,
      heading: "Aigents+",
      paragraph:
        "Lexicon optimised for social media posts related to cryptocurrencies.",
      alt: "An aerial shot of people on a beach and in the sea",
      id: 2,
    },
    {
      image: Random7x7Pattern02,
      bgColour: "#193718",
      heading: "General Inquirer",
      paragraph:
        "Lexicon capturing broad psycholinguistic dimensions across semantics, values and motivations.",
      id: 3,
    },
    {
      padding: "0px",
      image: Sitting,
      heading: "MASTER",
      paragraph:
        "Financial lexicons covering expressions common in business writing.",
      id: 4,
    },
    {
      padding: "0px",
      image: CountrysidePainting,
      heading: "Vader",
      paragraph:
        "General purpose lexicon optimised for social media and microblogs.",
      id: 5,
    },
    {
      padding: "0px",
      image: Whiteboard,
      heading: "WordNet-Affect",
      paragraph:
        "Financial lexicons covering expressions common in business writing.",
      id: 6,
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
        <Body>Sentiment analysis designed for human interpretability.</Body>
      </HeadingContainer>
      <ArticleCard articleCards={compliSentCards} />

      <HeadingContainer>
        <Subheading>SentiBank</Subheading>
        <Body>Gold-standard sentiment dictionaries in one repository.</Body>
      </HeadingContainer>

      <ArticleCard articleCards={sentiBankCards} />
      <CallToAction callToActions={callToActions} />
    </>
  );
};

export default ForSocialScientists;

export const HeadingContainer = styled(ParentContainer)`
  flex-direction: column;
  padding: 12px;

  @media (max-width: 1728px) {
    padding: 0px;
  }
`;

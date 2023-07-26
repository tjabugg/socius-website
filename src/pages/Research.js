import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import SecondaryHero from "../components/SecondaryHero";
import Farms from "../assets/images/farms.jpg";
import TableConversation from "../assets/images/table_conversation.jpg";
import AerialDesert from "../assets//images/aerial_desert.jpg";
import React from "react";
import PublicationCover from "../components/PublicationCover";
import PublicationCoverPattern from "../assets/svgs/random/publication_cover_pattern.svg";
import FooterCard from "../components/FooterCard";

const Research = () => {
  const [textBlocks] = useState([
    {
      heading: "Our publications",
      paragraph:
        "We create publicly available AI models and systems that are not only state-of-the-art in terms of technical capabilities, but also deeply rooted in the principles of social science. Our objective is to advance the frontiers of social science research through the development and application of AI technologies.\n \nWe aim to create AI tools that empower social scientists to make discoveries that were previously impossible, to uncover new insights into human behaviour and social systems, and to inform evidence-based decisions",
      id: 1,
    },
  ]);

  const [secondaryHeroes] = useState([
    {
      buttonDisplay: "none",
      heading:
        "Advancing the frontiers of social science through AI technology",
      image: TableConversation,
      id: 2,
    },
  ]);

  const [publicationCovers] = useState([
    {
      date: "May 2023",
      heading: "CompliSent: a first step to compliance-proof",
      paragraph:
        "Aspect-based sentiment analysis model that analyses text-based data ranging from media and social media.",
      id: 1,
      bgImage: Farms,
      graphic: PublicationCoverPattern,
      padding: "24px",
      link: "complisent",
    },
  ]);

  const [footerCards] = useState([
    {
      bgColour: "#3C46FF",
      image: AerialDesert,
      heading: "Streamline your research process",
      paragraph:
        "Explore our toolbox equipped with interpretable AI models to assist you with your research.",
      id: 7,
      button: "Find out more",
      link: "forsocialscientists",
      textColour: "white",
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
      <SecondaryHero secondaryHeroes={secondaryHeroes} />
      <TextBlocks textBlocks={textBlocks} />
      <PublicationCover publicationCovers={publicationCovers} />
      <FooterCard footerCards={footerCards} />
    </>
  );
};

export default Research;

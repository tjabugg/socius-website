import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import SecondaryHero from "../components/SecondaryHero";
import Farms from "../assets/images/farms.jpg";
import TableConversation from "../assets/images/table_conversation.jpg";
import AerialDesert from "../assets//images/aerial_desert.jpg";
import React from "react";
import PublicationCover from "../components/PublicationCover";
import PublicationCoverPattern from "../assets/svgs/random/publication_cover_pattern_01.svg";
// import Lecturer from "../assets/images/lecturer.jpg";
// import PostItNotes from "../assets/images/post_it_notes.jpg";
// import Organised5x5Pattern02 from "../assets/svgs/organised/organised_5x5_02.svg";
import { H2, ParentContainer } from "../styles";
import FooterCard from "../components/FooterCard";

const Research = () => {
  const [textBlocks] = useState([
    {
      heading: "",
      paragraph:
        "We create publicly available AI models and systems that are not only state-of-the-art in terms of technical capabilities, but also deeply rooted in the principles of social science.  Our objective is to advance the frontiers of social science research through the development and application of AI technologies. We aim to create AI tools that empower social scientists to make discoveries that were previously impossible, to uncover new insights into human behaviour and social systems, and to inform evidence-based decisions",
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
      heading: "alphaVADER: a first step to compliance-proof",
      paragraph:
        "Aspect-based sentiment analysis model that analyzes text-based data ranging from media (i.e news) and social media (i.e reddit).",
      id: 3,
      bgImage: Farms,
      graphic: PublicationCoverPattern,
      padding: "24px",
      link: "/alphavader",
    },
    // {
    //   date: "November 2022",
    //   heading: "socsciBERT: a small language model",
    //   paragraph:
    //     "A small language model that classifies potential domains of social science given a description of phenomena.",
    //   id: 4,
    //   graphic: Lecturer,
    //   link: "/soscibert",
    // },
    // {
    //   date: "January 2021",
    //   heading: "This (phenomenon) looks like that (phenomena)",
    //   paragraph:
    //     "An AI model that “reasons” in a way that is similar to how economists and others explain why a current phenomenon looks like a past phenomena",
    //   id: 5,
    //   bgColour: "#CBDCFF",
    //   graphic: Organised5x5Pattern02,
    //   padding: "24px",
    //   link: "/thisphenomenon",
    // },
    // {
    //   date: "August 2020",
    //   heading:
    //     "coNLP: a unified NLP framework of different open-source libraries",
    //   paragraph:
    //     "A unified NLP framework that “wraps” different open-source libraries",
    //   id: 6,
    //   graphic: PostItNotes,
    //   link: "/conlp",
    // },
  ]);

  const [footerCards] = useState([
    {
      bgColour: "#D9FFD8",
      image: AerialDesert,
      heading: "Open source knowledge",
      paragraph:
        "Could a computational intelligence help social scientists to consider every possible causative relationships between his or her theory-of-interest?",
      id: 7,
      button: "Learn more",
      link: "database",
    },
  ]);

  return (
    <>
      <SecondaryHero secondaryHeroes={secondaryHeroes} />
      <TextBlocks textBlocks={textBlocks} />
      <ParentContainer>
        <H2>Our Publications</H2>
      </ParentContainer>
      <PublicationCover publicationCovers={publicationCovers} />
      <FooterCard footerCards={footerCards} />
    </>
  );
};

export default Research;

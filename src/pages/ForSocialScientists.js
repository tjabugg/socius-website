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
import Code from "../assets/videos/code.mp4";
import React from "react";
import CallToAction from "../components/CallToAction";
import ArticleCard from "../components/ArticleCard";
import { Body, ParentContainer, Subheading } from "../styles";

const ForSocialScientists = () => {
  const [secondaryHeroes] = useState([
    {
      heading: "Documentation designed to simplify usage and amplify impact",
      imageDisplay: "none",
      video: Code,
      videoAlt: "A close up a developer programming on a computer screen",
      id: 1,
    },
  ]);
  const [compliSentCards] = useState([
    {
      image: Random7x7Pattern01,
      bgColour: "#0000FF",
      heading: "Heuristic Engine: ‘tag_pos’",
      paragraph:
        "Parts-of-Speech tagging to analyse grammar and identify word’s syntactic roles.",
      id: 1,
    },
    {
      padding: "0px",
      image: Moma,
      heading: "Heuristic Engine: ‘parse_aspect’",
      paragraph:
        "Extract dependency relationships between aspects and their predicate.",
      alt: "An aerial shot of people on a beach and in the sea",
      id: 2,
    },
    {
      image: Organised15x15Pattern,
      bgColour: "#00002E",
      heading: "Heuristic Engine: ‘evaluate_senti (lex_dict)’",
      paragraph:
        "Compare and check whether any predicates match with the unigram lexicons in the dictionary.",
      id: 3,
    },
    {
      padding: "0px",
      image: Silhouette,
      heading: "Heuristic Engine: ‘evaluate_senti (identify_ngram)’",
      paragraph:
        "Examine whether any ‘span’ of the predicates match with the n-gram lexicons in the dictionary.",
      id: 4,
    },
    {
      image: Organised5x5Pattern,
      bgColour: "#D9FFD8",
      heading: "Heuristic Engine: `evaluate_senti (fine_tune)`",
      paragraph:
        "Refine the sentiment score  based on the predefined fine-tuning rules.",
      id: 5,
    },
  ]);

  const [sentiBankCards] = useState([
    {
      image: Organised10x10Pattern,
      bgColour: "#51DA4C",
      heading: "VADER",
      paragraph:
        "VADER is a rule-based sentiment analysis algorithm, particularly aimed at social media texts, that uses a sentiment polarity and intensity (valence) sensitive lexicon dictionary.",
      id: 1,
    },
    {
      padding: "0px",
      image: Beach,
      heading: "MASTER",
      paragraph:
        "While a sentiment dictionary designed to be applied in the general domain may be useful, a finance-specific dictionary called MASTER  was created to address the constraints of generality. ",
      alt: "An aerial shot of people on a beach and in the sea",
      id: 2,
    },
    {
      image: Random7x7Pattern02,
      bgColour: "#193718",
      heading: "AFINN",
      paragraph: "",
      id: 3,
    },
    {
      padding: "0px",
      image: CountrysidePainting,
      heading: "Aigents+",
      paragraph: "",
      id: 4,
    },
  ]);

  const [callToActions] = useState([
    {
      bgColour: "#00002E",
      id: 7,
      textColour: "#CBDCFF",
    },
  ]);

  return (
    <>
      <meta
        name="description"
        content="Socius creates publicly available AI models and systems that are not only state-of-the-art in terms of technical capabilities, but also deeply rooted in the principles of social science. Our objective is to advance the frontiers of social science research through the development and application of AI technologies. The story of Socius starts from a simple question: could computational intelligence help social scientists to consider every possible causative relationships between their theory-of-interest?"
      />
      <title>Resources to simplify usage and amplify impact | socius</title>

      <SecondaryHero secondaryHeroes={secondaryHeroes} />
      <ParentContainer>
        <Subheading>CompliSent</Subheading>
      </ParentContainer>
      <ArticleCard articleCards={compliSentCards} />
      <ParentContainer
        style={{
          flexDirection: "column",
        }}
      >
        <Subheading>SentiBank</Subheading>
        <Body>
          Public repository of annotated sentiment lexicons and dictionaries
        </Body>
      </ParentContainer>
      <ArticleCard articleCards={sentiBankCards} />
      <CallToAction callToActions={callToActions} />
    </>
  );
};

export default ForSocialScientists;

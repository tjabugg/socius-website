import { useState } from "react";
import SecondaryHero from "../components/SecondaryHero";
import Random9x9Pattern01 from "../assets/svgs/random/random_9x9_02.svg";
import Organised17x17Pattern01 from "../assets/svgs/organised/organised_17x17_01.svg";
import Organised5x5Pattern01 from "../assets/svgs/organised/organised_5x5_02.svg";
import Beach from "../assets/images/beach.jpg";
import Silhouette from "../assets/images/silhouette.jpg";
import StrategicHands from "../assets/images/strategic_hands.jpg";
import Code from "../assets/videos/code.mp4";
import React from "react";
import CallToAction from "../components/CallToAction";
import ArticleCard from "../components/ArticleCard";
import TextAndImage from "../components/TextAndImage";

const ForSocialScientists = () => {
  const [secondaryHeroes] = useState([
    {
      heading: "Explore the methodologies underlying our AI toolkits",
      imageDisplay: "none",
      video: Code,
      id: 1,
    },
  ]);
  const [articleCards] = useState([
    {
      image: Random9x9Pattern01,
      bgColour: "#0000FF",
      heading: "Sentiment Analysis",
      paragraph:
        "Systematically identify and study affective states and subjective information.",
      id: 1,
    },
    {
      padding: "0px",
      image: Beach,
      heading: "Keyword Extraction",
      paragraph:
        "Identification of terms that best describe the subject of a document.",
        alt: "An aerial shot of people on a beach and in the sea",
      id: 2,
    },
    {
      image: Organised17x17Pattern01,
      bgColour: "#00002E",
      heading: "Emotion recognition",
      paragraph: "The process of identifying human emotion",
      id: 3,
    },
    {
      padding: "0px",
      image: Silhouette,
      heading: "socsciBERT: a small language model",
      paragraph:
        "An AI model that “reasons” in a way that is similar to how economists and others explain why a current phenomenon looks like a past phenomena.",
      id: 4,
    },
    {
      image: Organised5x5Pattern01,
      bgColour: "#51DA4C",
      heading: "Affective computing",
      paragraph:
        "Development of systems and devices that can recognise, interpret, process, and simulate human affects.",
      id: 5,
    },
  ]);

  const [callToActions] = useState([
    {
      bgColour: "#D9FFD8",
      id: 7,
      textColour: "#00002E",
    },
  ]);
  const [textAndImages] = useState([
    {
      heading: "Learn about our approach via our open source database",
      paragraph:
        "We advance the understanding of Social Science through the development and application of AI technologies. We know more than we used to, but we still know too little. Social scientists, like any other natural scientists, should also equip with state-of-the-art AI models, but models that are compatible with the principles of social science. ",
      id: 8,
      button: "Take me there",
      image: StrategicHands,
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
      <ArticleCard articleCards={articleCards} />
      <CallToAction callToActions={callToActions} />
      <TextAndImage textAndImages={textAndImages} />
    </>
  );
};

export default ForSocialScientists;

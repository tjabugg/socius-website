import { useState } from "react";
import SecondaryHero from "../components/SecondaryHero";
import Random9x9Pattern01 from "../assets/svgs/random/random_9x9_pattern_02.svg";
import Organised17x17Pattern01 from "../assets/svgs/organised/organised_17x17_pattern_01.svg";
import Organised5x5Pattern01 from "../assets/svgs/organised/organised_5x5_pattern_02.svg";
import OpenBook from "../assets/images/open_book.jpg";
import Festival from "../assets/images/uncompressed/festival.jpg";
import MicroscopicHairs from "../assets/images/uncompressed/microscopic_hairs.jpg";
import React from "react";
import CallToAction from "../components/CallToAction";
import ArticleCard from "../components/ArticleCard";
import TextAndImage from "../components/TextAndImage";

const ForSocialScientists = () => {
  const [secondaryHeroes] = useState([
    {
      heading: "An open source database to assist your collaboration with AI",
      image: OpenBook,
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
      image: Festival,
      heading: "Keyword Extraction",
      paragraph:
        "Identification of terms that best describe the subject of a document.",
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
      image: MicroscopicHairs,
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
      padding: "0px",
      bgColour: "#00002E",
      id: 1,
      textColour: "#D9FFD8",
    },
  ]);
  const [textAndImages] = useState([
    {
      heading: "Find out about our progress via our open source database",
      paragraph:
        "We know more than we used to, but we still know too little. Social Scientists, like other Natural Scientists, should also equip with state-of-the-art AI models, but models that are compatible with the principles of social science.",
      id: 1,
      button: "Learn more about our research",
      image: Organised5x5Pattern01,
    },
  ]);

  return (
    <>
      <SecondaryHero secondaryHeroes={secondaryHeroes} />
      <ArticleCard articleCards={articleCards} />
      <CallToAction callToActions={callToActions} />
      <TextAndImage textAndImages={textAndImages} />
    </>
  );
};

export default ForSocialScientists;

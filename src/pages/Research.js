import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import SecondaryHero from "../components/SecondaryHero";
import Dusk from "../assets/images/dusk.jpg";
import System from "../assets/images/system_1.5_graphic.jpg";
import Farmland from "../assets/images/farmland.jpg";
import BeforeYouThink from "../assets/images/beforeYouThink_graphic.jpg";
import Politicians from "../assets/images/politicians.jpg";
import { Helmet } from "react-helmet";
import ArticleCard from "../components/ArticleCard";
import { PaddedContainer } from "../styles";
import styled from "styled-components";
import CallToActions from "../components/CallToAction";

const Research = () => {
  const [textBlocks] = useState([
    {
      paragraph:
        "What defines us is a hypothesis: that human sciences contain solutions machines haven't discovered, and machine intelligence offers laboratories human sciences never imagined.No boundaries on which direction insights flow. No assumptions about what's useful. Just experimenting whether centuries of human thought can debug tomorrow's machines, and whether tomorrow's machines can test yesterday's theories.",
      id: 1,
    },
  ]);

  const [secondaryHeroes] = useState([
    {
      subtitle: "Research",
      heading: "AI Technology focused on insight, not just performance",
      image: Dusk,
      alt: "A 19th century painting of A Wooded Landscape in the Autumn Evening",
      id: 1,
    },
  ]);

  const [articleCards] = useState([
    {
      aspectRatio: "1/1",
      flexDirection: "column",
      image: System,
      padding: "0px",
      heading: "System 1.5",
      paragraph:
        "We gave machines the cognitive gear shift experts have — knowing when to think fast versus slow.",
      tagOneBgColour: "#3C46FF",
      tagOneColour: "#F1F0EF",
      captionOne: "Workshop",
      captionTwo: "NeurIPS 2024",
      tagTwoBgColour: "#D9FFD8",
      tagTwoColour: "#514E4B",
      alt: "A symmetrical light green socius pattern on a bright blue background",
      id: 1,
      link: "/System-1.5",
    },
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: Farmland,
      padding: "0px",
      heading: "Monitor-Generate-Verify",
      paragraph:
        "We translated metacognition into mathematics. AI now assesses strategy before attempting solutions.",
      tagOneBgColour: "#193718",
      tagOneColour: "#F1F0EF",
      captionOne: "Workshop",
      captionTwo: "NeurIPS 2024",
      tagTwoBgColour: "#AEF2AC",
      tagTwoColour: "#514E4B",
      alt: "A 19th century painting of a flock of sheep being herded, by Robert Hills",
      id: 2,
      link: "/Monitor-Generate-Verify",
    },
    {
      aspectRatio: "4/5",
      flexDirection: "column",
      image: BeforeYouThink,
      padding: "0px",
      heading: "Before You 〈think/〉, Monitor",
      paragraph:
        "We gave machines the cognitive gear shift experts have — knowing when to think fast versus slow.",
      tagOneBgColour: "#1C9418",
      tagOneColour: "#F1F0EF",
      captionOne: "Workshop",
      captionTwo: "COLM 2025",
      tagTwoBgColour: "#CBDCFF",
      tagTwoColour: "#514E4B",
      alt: "Cropped close up of a dark blue socius pattern on a lime green background",
      id: 3,
      link: "/Before-You-Think-Monitor",
    },
    {
      aspectRatio: "4/5",
      flexDirection: "column",
      image: Politicians,
      padding: "0px",
      heading: "In Defence of Post-hoc Explainability",
      paragraph:
        "Philosophy says imperfect AI explanations can still advance knowledge. We proved it.",
      tagOneBgColour: "#00002E",
      tagOneColour: "#F1F0EF",
      captionOne: "Workshop",
      captionTwo: "NeurIPS 2024",
      tagTwoBgColour: "#8FB2FF",
      tagTwoColour: "#514E4B",
      alt: "A 17th century painting of Officers and other civic guardsmen of the XIth District of Amsterdam",
      id: 4,
      link: "",
    },
  ]);

  const [callToActions] = useState([
    {
      heading:
        "Our mission is ensuring researchers have the resources to succeed. ",
      button: "Request assistance",
      bgColour: "#1c1c1e",
      id: 1,
      textColour: "#F1F0EF",
    },
  ]);

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>
          Where Yesterday's Theories Meet Tomorrow's Machines | socius labs
        </title>
        <meta
          name="title"
          content="Where Yesterday's Theories Meet Tomorrow's Machines | socius labs"
        />
        <meta
          name="description"
          content="Our research focuses on integrating AI models with social science principles - enhancing interpretability, transparency and accountability."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://socius-ai.netlify.app/" /> */}
        <meta
          property="og:title"
          content="Where Yesterday's Theories Meet Tomorrow's Machines | socius labs"
        />
        <meta
          property="og:description"
          content="Our research focuses on integrating AI models with social science principles - enhancing interpretability, transparency and accountability."
        />
        <meta property="og:image" content={Dusk} />
      </Helmet>
      <SecondaryHero secondaryHeroes={secondaryHeroes} />
      <PaddedContainer>
        <TextBlocks textBlocks={textBlocks} />
      </PaddedContainer>

      <CustomContainer>
        <ArticleCard articleCards={articleCards} grid="1fr 1fr 1fr" />
      </CustomContainer>
      <CallToActions callToActions={callToActions} />
    </>
  );
};

export default Research;

export const CustomContainer = styled(PaddedContainer)`
  padding: 60px 0px;

  @media (max-width: 1729px) {
    margin: 0px 24px;
  }

  @media (max-width: 414px) {
    padding: 36px 0px 40px 0px;
    margin: 0px 20px;
  }
`;

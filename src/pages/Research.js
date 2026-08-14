import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import SecondaryHero from "../components/SecondaryHero";
import Cliffs from "../assets/images/cliffs.jpg";
import System from "../assets/images/system_1.5_graphic_portrait.jpg";
import Farmland from "../assets/images/farmland.jpg";
import BeforeYouThink from "../assets/images/beforeYouThink_graphic.jpg";
import Politicians from "../assets/images/politicians.jpg";
import CentauriCover from "../assets/covers/centauri_cover.jpg";
import Seo from "../components/Seo";
import ArticleCard from "../components/ArticleCard";
import { PaddedContainer } from "../styles";
import styled from "styled-components";
import CallToActions from "../components/CallToAction";

const Research = () => {
  const [textBlocks] = useState([
    {
      paragraph:
        "What defines us is a hypothesis: that human sciences contain solutions machines haven't discovered, and machine intelligence offers laboratories human sciences never imagined. No boundaries on which direction insights flow. No assumptions about what's useful. Just experimenting whether centuries of human thought can debug tomorrow's machines, and whether tomorrow's machines can test yesterday's theories.",
      id: 1,
    },
  ]);

  const [secondaryHeroes] = useState([
    {
      subtitle: "Research",
      heading: "Where yesterday’s theories meet tomorrow’s machines",
      image: Cliffs,
      alt: "An oil painting of rugged sea cliffs, with fallen boulders scattered across a sandy shore",
      id: 1,
    },
  ]);

  const [articleCards] = useState([
    {
      aspectRatio: "4/5",
      flexDirection: "column",
      image: CentauriCover,
      padding: "0px",
      heading: "Small Foundation Models of Human Cognition and Behaviour",
      paragraph:
        "Foundation models of human behaviour, small enough for any psychology lab.",
      tagOneBgColour: "#00002E",
      tagOneColour: "#F1F0EF",
      captionOne: "Conference",
      captionTwo: "COLM 2026",
      tagTwoBgColour: "#CBDCFF",
      tagTwoColour: "#514E4B",
      alt: "Classical landscape painting of Mount Pelion — home of the centaur Chiron — with a ruined temple and two horses above the Aegean",
      id: 5,
      link: "/research/small-foundation-models-of-human-cognition",
    },
    {
      aspectRatio: "4/5",
      flexDirection: "column",
      image: System,
      padding: "0px",
      heading: "Monitor-Generate-Verify",
      paragraph:
        "We translated metacognition into mathematics. AI now assesses strategy before attempting solutions.",
      tagOneBgColour: "#193718",
      tagOneColour: "#F1F0EF",
      captionOne: "Workshop",
      captionTwo: "NeurIPS 2025",
      tagTwoBgColour: "#AEF2AC",
      tagTwoColour: "#514E4B",
      alt: "A symmetrical light green socius pattern on a bright blue background",
      id: 2,
      link: "/research/monitor-generate-verify",
    },
    {
      aspectRatio: "4/5",
      flexDirection: "column",
      image: Farmland,
      padding: "0px",
      heading: "Before You <think>, monitor",
      paragraph:
        "When AI pauses to assess difficulty first, it solves 7% more problems correctly.",
      tagOneBgColour: "#1C9418",
      tagOneColour: "#F1F0EF",
      captionOne: "Workshop",
      captionTwo: "COLM 2025",
      tagTwoBgColour: "#CBDCFF",
      tagTwoColour: "#514E4B",
      alt: "A 19th century painting of a flock of sheep being herded, by Robert Hills",
      id: 3,
      link: "/research/before-you-think-monitor",
    },
    {
      aspectRatio: "4/5",
      flexDirection: "column",
      image: BeforeYouThink,
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
      alt: "Cropped close up of a dark blue socius pattern on a lime green background",
      id: 1,
      link: "/research/system-1.5",
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
      link: "/research/in-defence-of-post-hoc-explainability",
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
      <Seo
        title="Where Yesterday's Theories Meet Tomorrow's Machines | socius labs"
        description="Our research integrates AI models with social science principles — advancing interpretability, transparency, and accountability in machine intelligence."
        image={Cliffs}
        path="/research"
      />
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

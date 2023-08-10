import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import SecondaryHero from "../components/SecondaryHero";
import PaleBlueDot from "../assets/images/pale_blue_dot.jpg";
import LandscapePainting from "../assets/images/landscape_painting.jpg";
import OpenBook from "../assets/images/open_book.jpg";
import Lecturer from "../assets/images/lecturer.jpg";
import React from "react";
import Glasses from "../assets/videos/glasses.mp4";
import Office from "../assets/videos/office.mp4";
import CallToAction from "../components/CallToAction";
import FooterCard from "../components/FooterCard";
import SplitImage from "../components/SplitImage";
import { Subheading, GridContainer } from "../styles";

const Database = () => {
  const [secondaryHeroes] = useState([
    {
      heading: "Accelerating social science research with accessible open data",
      videoAlt:
        "A close up of a woman's glasses with the reflection of her computer screen in her lenses",
      imageDisplay: "none",
      video: Glasses,
      id: 1,
    },
  ]);

  const [textBlocks] = useState([
    {
      heading: "SentiBank",
      paragraph:
        "SentiBank is the most comprehensive open database of expert-verified sentiment dictionaries and lexicons, all accessible through a simple API.\n\nResearchers can instantly discover a vast knowledge base of annotated corpora spanning diverse domains to elevate their sentiment modeling.\n\nBy combining gold-standard sentiment data in one platform, sentibank facilitates more holistic cross-domain analysis and unlocks hidden emotions within text. This unified access removes the need to navigate disparate sources, allowing you to focus on innovative applications.",
      id: 1,
      paddingBottom: "24px",
      button: "Read more",
      link: "complisent",
    },
    {
      heading: "Optimizing research through data discovery AI",
      paragraph:
        "Locating ideal datasets can be arduous, but remains critical to research success. By leveraging language modeI, our new dataset search assistant simplifies data discovery, instantly matching researchers' goals with relevant data.\n\nWe offer priority access to select researchers and partners to pilot this capability.\n\nCollaborating with social scientists across disciplines motivates everything we do. We invite you to connect with our team - we're excited to discover how we could partner to advance your research.",
      id: 2,
      paddingBottom: "24px",
      button: "Get aligned data to power insights and innovations",
      link: "complisent",
    },
  ]);

  const [splitImages] = useState([
    {
      imageOne: OpenBook,
      imageOneAlt:
        "An open notebook perched on the knees of a man sitting cross legged amongst rows of other people in chairs.",
      imageTwo: PaleBlueDot,
      imageTwoAlt:
        "A horizon of the moon's lunar landscape with the earth emerging in the distance of dark space.",
      aspectRatioOne: "7/5",
      aspectRatioTwo: "1/1",
      id: 1,
    },
    {
      imageOne: Lecturer,
      imageOneAlt:
        "A man conducting a lecture whilst stood behind lecturn and speaking into a microhpone.",
      imageDisplay: "none",
      videoTwo: Office,
      videoAlt:
        "People walking around and conversing to one another in an office",
      aspectRatioOne: "1/1",
      aspectRatioTwo: "7/5",
      id: 2,
    },
  ]);

  const [callToActions] = useState([
    {
      bgColour: "#51DA4C",
      id: 1,
      textColour: "#193718",
    },
  ]);

  const [footerCards] = useState([
    {
      bgColour: "#00002E",
      textColour: "white",
      image: LandscapePainting,
      heading: "Integrate sentibank with CompliSent",
      paragraph:
        "CompliSent combines the predictive power of AI with adjustable rule-based logic designed for human interpretability.",
      id: 1,
      button: "Explore CompliSent",
      link: "complisent",
    },
  ]);

  return (
    <>
      <meta
        name="description"
        content="Socius creates publicly available AI models and systems that are not only state-of-the-art in terms of technical capabilities, but also deeply rooted in the principles of social science. Our objective is to advance the frontiers of social science research through the development and application of AI technologies. The story of Socius starts from a simple question: could computational intelligence help social scientists to consider every possible causative relationships between their theory-of-interest?"
      />
      <title>Optimising research through data discovery AI | socius</title>
      <SecondaryHero secondaryHeroes={secondaryHeroes} />
      <TextBlocks
        textBlocks={textBlocks.filter((textBlock) => textBlock.id === 1)}
      />
      <SplitImage
        splitImages={splitImages.filter((splitImage) => splitImage.id === 1)}
      />
      <GridContainer>
        <Subheading>
          While we cannot fully prevent AI from being a black box, we aim to
          build transparent, accountable, and interpretable AI models.
        </Subheading>
      </GridContainer>
      <TextBlocks
        textBlocks={textBlocks.filter((textBlock) => textBlock.id === 2)}
      />
      <SplitImage
        splitImages={splitImages.filter((splitImage) => splitImage.id === 2)}
      />
      <FooterCard footerCards={footerCards} />
      <CallToAction callToActions={callToActions} />
    </>
  );
};

export default Database;

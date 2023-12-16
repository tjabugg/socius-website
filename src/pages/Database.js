import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import SecondaryHero from "../components/SecondaryHero";
import PaleBlueDot from "../assets/images/pale_blue_dot.jpg";
import LandscapePainting from "../assets/images/landscape_painting.jpg";
import OpenBook from "../assets/images/open_book.jpg";
import Code from "../assets/images/code.jpg";
import React from "react";
import Glasses from "../assets/videos/glasses.mp4";
import Office from "../assets/videos/office.mp4";
import FooterCard from "../components/FooterCard";
import SplitImage from "../components/SplitImage";
import { Helmet } from "react-helmet";

const Database = () => {
  const [secondaryHeroes] = useState([
    {
      heading: "Accelerating social science research with accessible open data",
      videoAlt:
        "A close up of a woman's glasses with the reflection of her computer screen in her lenses",
      video: Glasses,
      id: 1,
    },
  ]);

  const [textBlocks] = useState([
    {
      heading: "SentiBank",
      paragraph:
        "Open database of expert-verified sentiment dictionaries, all accessible through a simple API.\n\nCustomise sentiment dictionary tailored to your field of application. Instantly discover a vast knowledge base of annotated corpora spanning diverse domains.",
      id: 1,
      paddingBottom: "24px",
      button: "Read more",
      link: "sentibank",
    },
    {
      heading: "Optimising Research Through Private Data Archive",
      paragraph:
        "14M+ data rows delivered and counting. Researchers rank our dashboard as saving 87%+ of the time and months of work compared to alternatives.",
      id: 2,
      paddingBottom: "24px",
      button: "Get priority access",
      link: "mailto:nick.sh.oh@gmail.com",
      target: "_blank",
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
      imageOne: Code,
      imageOneAlt:
        "A close-up of the back of a developers head and a screen with programming code",
      imageDisplay: "none",
      videoTwo: Office,
      videoAlt:
        "People walking around and conversing to one another in an office",
      aspectRatioOne: "1/1",
      aspectRatioTwo: "7/5",
      id: 2,
    },
  ]);

  const [footerCards] = useState([
    {
      bgColour: "#00002E",
      textColour: "white",
      image: LandscapePainting,
      heading: "Leverage SentiBank with Sentium",
      paragraph:
        "Experience customisable sentiment analysis that unlocks deeper insights.",
      id: 1,
      button: "Learn more",
      link: "complisent",
    },
  ]);

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Optimising research through data discovery AI | socius</title>
        <meta
          name="title"
          content="Optimising research through data discovery AI | socius"
        />
        <meta
          name="description"
          content="By leveraging AI, our new dataset search assistant simplifies data discovery, instantly matching researchers' goals with relevant data."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://socius-ai.netlify.app/" /> */}
        <meta
          property="og:title"
          content="Optimising research through data discovery AI | socius"
        />
        <meta
          property="og:description"
          content="By leveraging AI, our new dataset search assistant simplifies data discovery, instantly matching researchers' goals with relevant data."
        />
        <meta property="og:image" content={OpenBook} />
      </Helmet>

      <SecondaryHero secondaryHeroes={secondaryHeroes} />
      <TextBlocks
        textBlocks={textBlocks.filter((textBlock) => textBlock.id === 1)}
      />
      <SplitImage
        splitImages={splitImages.filter((splitImage) => splitImage.id === 1)}
      />

      <TextBlocks
        textBlocks={textBlocks.filter((textBlock) => textBlock.id === 2)}
      />
      <SplitImage
        splitImages={splitImages.filter((splitImage) => splitImage.id === 2)}
      />
      <FooterCard footerCards={footerCards} />
    </>
  );
};

export default Database;

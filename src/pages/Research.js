import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import SecondaryHero from "../components/SecondaryHero";
import OverviewGarden from "../assets/images/overview_garden.jpg";
import AerialDesert from "../assets//images/aerial_desert.jpg";
import React from "react";
import PublicationCover from "../components/PublicationCover";
import PublicationCoverPattern from "../assets/svgs/organised/organised_sentium_pattern.svg";
import FooterCard from "../components/FooterCard";
import { Helmet } from "react-helmet";

const Research = () => {
  const [textBlocks] = useState([
    {
      heading: "Our publications",
      paragraph:
        "Social science deserves better AI tools - models designed on true understanding, not just prediction. For too long, computational social scientists struggled with black-box models prioritising opaque precision over interpretation. And we’re leading that change.\n\nOur goal is to create AI tools that embrace what makes social science so valuable, which is the pursuit of true understanding. That is why our research focuses on integrating AI models with core social science principles, enhancing interpretability, transparency, and accountability - areas where social science and modern AI diverge.",
      id: 1,
    },
  ]);

  const [secondaryHeroes] = useState([
    {
      heading: "AI Technology focused on insight, not just performance",
      image: OverviewGarden,
      id: 2,
    },
  ]);

  const [publicationCovers] = useState([
    {
      date: "August 2023",
      heading: "Sentium: Accuracy Engineered for Understanding",
      paragraph:
        "Fusing AI linguistics with configurable logic for interpretable sentiment analysis",
      id: 1,
      bgColour: "#193718",
      graphic: PublicationCoverPattern,
      link: "sentium",
    },
  ]);

  const [footerCards] = useState([
    {
      bgColour: "#3C46FF",
      image: AerialDesert,
      heading: "Take Sentium further with sentibank",
      paragraph:
        "Tailor sentiment analysis to your needs with SentiBank, the largest public repository of sentiment dictionaries.",
      id: 7,
      button: "Browse SentiBank",
      link: "sentibank",
      textColour: "white",
    },
  ]);

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Integrating AI with social science principles | socius</title>
        <meta
          name="title"
          content="Integrating AI with social science principles | socius"
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
          content="Integrating AI with social science principles | socius"
        />
        <meta
          property="og:description"
          content="Our research focuses on integrating AI models with social science principles - enhancing interpretability, transparency and accountability."
        />
        <meta property="og:image" content={OverviewGarden} />
      </Helmet>

      <SecondaryHero secondaryHeroes={secondaryHeroes} />
      <TextBlocks textBlocks={textBlocks} />
      <PublicationCover publicationCovers={publicationCovers} />
      <FooterCard footerCards={footerCards} />
    </>
  );
};

export default Research;

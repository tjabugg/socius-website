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
import { Helmet } from "react-helmet";

const Research = () => {
  const [textBlocks] = useState([
    {
      heading: "Our publications",
      paragraph:
        "Social science deserves better AI tools - models designed on true understanding, not just prediction. For too long, computational social scientists struggled with black-box models prioritising opaque precision over interpretation and we’re leading that change.\n\nOur goal is to create AI tools that embrace what makes social science so valuable in the pursuit of true understanding, that is why our research focuses on integrating AI models with core social science principles, enhancing interpretability, transparency, and accountability - areas where social science and modern AI diverge.",
      id: 1,
    },
  ]);

  const [secondaryHeroes] = useState([
    {
      buttonDisplay: "none",
      heading: "AI Technology focused on insight, not just performance",
      image: TableConversation,
      id: 2,
    },
  ]);

  const [publicationCovers] = useState([
    {
      date: "August 2023",
      heading: "CompliSent: Accuracy engineered for understanding",
      paragraph:
        "Fusing AI linguistics with configurable logic for interpretable sentiment scoring",
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
      heading: "Take CompliSent further with SentiBank integration",
      paragraph:
        "Tailor sentiment analysis to your needs. Sentibank, the largest public repository of sentiment lexica and dictionaries, lets you integrate lexica optimized for your particular domain or application.",
      id: 7,
      button: "Browse SentiBank",
      link: "forsocialscientists",
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
        <meta property="og:image" content={TableConversation} />
      </Helmet>
      ;
      <SecondaryHero secondaryHeroes={secondaryHeroes} />
      <TextBlocks textBlocks={textBlocks} />
      <PublicationCover publicationCovers={publicationCovers} />
      <FooterCard footerCards={footerCards} />
    </>
  );
};

export default Research;

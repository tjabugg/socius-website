import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import SecondaryHero from "../components/SecondaryHero";
import PaleBlueDot from "../assets/images/pale_blue_dot.jpg";
import FieldOfWheat from "../assets/images/wheat.jpg";
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
      heading: "An open source database to assist your collaboration with AI",
      videoAlt:
        "A close up of a woman's glasses with the reflection of her computer screen in her lenses",
      imageDisplay: "none",
      video: Glasses,
      id: 1,
    },
  ]);

  const [textBlocks] = useState([
    {
      heading: "Primary Research",
      paragraph:
        "All open-source models will be compliance-safe and fully transparent, provided with documentations (i.e academic papers or papers with code). This enables researchers to fully understand how our AI system is developed, trained, operates and deployed in the application domain.\n \nWhile the business has been endorsed by LSE, we are currently reaching LSE professors to join the advisory board, which we believe would build another layer of trust.\n \nHowever, above all, we need to be recognised in the field. Which we do not yet. And this is precisely why we need a brand.",
      id: 1,
      paddingBottom: "0px",
    },
    {
      heading: "Secondary Research",
      paragraph:
        "We build AI-powered toolkits with the principles of social science in mind: While we cannot fully reduce AI being a black box models, we aim to build Transparent, Accountable, and Interpretable AI models (socscikit)\n \nWe build unified NLP framework to increase social science research collaborations: Not only this will increase collaborative opportunities, it will prevent social researchers to back a horse with their framework selections – Researchers can hire best performing NLP modules, without the need to learn new frameworks (coNLP)\n \nLimited to academic researchers, we provide FREE 24/5 support in terms of methodologies, models, algorithms and many more.",
      id: 2,
      paddingBottom: "0px",
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
      bgColour: "#00002E",
      id: 1,
      textColour: "#51DA4C",
    },
  ]);

  const [footerCards] = useState([
    {
      bgColour: "#193718",
      textColour: "#ffffff",
      image: FieldOfWheat,
      heading:
        "Explore about our first publication on building interpretable AI",
      paragraph:
        "Aspect-based sentiment analysis model that analyses text-based data ranging from media and social media.",
      id: 1,
      button: "Read more",
      link: "complisent",
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
      <TextBlocks
        textBlocks={textBlocks.filter((textBlock) => textBlock.id === 1)}
      />
      <SplitImage
        splitImages={splitImages.filter((splitImage) => splitImage.id === 1)}
      />
      <GridContainer>
        <Subheading>
          While we cannot fully reduce AI being a black box models, we aim to
          build Transparent, Accountable, and Interpretable AI models.
        </Subheading>
      </GridContainer>
      <TextBlocks
        textBlocks={textBlocks.filter((textBlock) => textBlock.id === 2)}
      />
      <SplitImage
        splitImages={splitImages.filter((splitImage) => splitImage.id === 2)}
      />
      <CallToAction callToActions={callToActions} />
      <FooterCard footerCards={footerCards} />
    </>
  );
};

export default Database;

// export const QuoteContainer = styled(ParentContainer)`
//   margin: 40px 33vw 40px 16px;

//   @media (max-width: 768px) {
//     margin: 40px 16px 40px 16px;
//   }
// `;

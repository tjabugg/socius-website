import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import SecondaryHero from "../components/SecondaryHero";
import Diplomats from "../assets/images/diplomat.jpg";
import LSE from "../assets/images/lse.jpg";
import AIES from "../assets/images/AIES.jpg";
import NeurIPS2024 from "../assets/videos/Nick_NeurIPS2024.mp4";
import Seo from "../components/Seo";
import {
  CentreContainer,
  GridContainer,
  H4,
  ImageContainer,
  MyImage,
  PaddedContainer,
} from "../styles";
import styled from "styled-components";
import CallToAction from "../components/CallToAction";
import GraphicCard from "../components/GraphicCard";

const About = () => {
  const [secondaryHeroes] = useState([
    {
      subtitle: "About",
      heading: "Some call us interdisciplinary.\nWe prefer experimental.",
      image: Diplomats,
      imageAlt:
        "19th Century Painting of The Reception of Lord Byron at Missolonghi",
      id: 1,
    },
  ]);
  const [textBlocks] = useState([
    {
      justify: "flex-end",
      subheading:
        "At socius labs, we create experimental collisions between machine intelligence and human sciences.\n \nBy human sciences, we mean the fuzzy constellation of fields that studied how humans think, behave, and function — psychology, cognitive science, social sciences, and relevant parts of philosophy and neuroscience.",
      id: 1,
    },
    {
      captionOne: "How we started?",
      tagOneColour: "#ffffff",
      textColour: "#ffffff",
      subheading:
        "The story of socius begins at the London School of Economics.",
      id: 2,
    },
    {
      justify: "flex-end",
      textColour: "#ffffff",
      altParagraph:
        "socius labs began as 'socialscience.ai', exploring how artificial intelligence could advance social science research. The initial vision was straightforward. To bring AI tools to social scientists, help them analyse data, accelerate their research.\n \nBut the work revealed something unexpected. The most interesting discoveries came from reversing the question. Instead of AI serving social science, what if the disciplines that studied us (human) could advance machine intelligence?\n \nToday, socius labs exists to explore this convergence. As an independent research lab supported by the LSE and LSE Generate, we run experiments between every field that studied thinking and every machine trying to think.",
      id: 3,
    },
    {
      subheading: "Our Experimental Layers",
      id: 4,
    },
    {
      // justify: "flex-end",
      altParagraph: "Yesterday’s Theories, Tomorrow’s Upgrades",
      id: 5,
    },
    {
      // justify: "flex-end",
      altParagraph:
        "We don't research humans to decode machines. We experiment whether the sciences that explained humans can improve machines — both how they think and how they work with us.",
      textColour: "#706A65",
      id: 6,
    },
    {
      // justify: "flex-end",
      altParagraph: "Tomorrow’s Laboratories, Yesterday’s Questions",
      id: 7,
    },
    {
      // justify: "flex-end",
      altParagraph:
        "We don't just implement human theories. We test them. Machines become the test subjects human sciences never had — sometimes revealing entirely new questions we hadn't thought to ask.",
      textColour: "#706A65",
      id: 8,
    },
    {
      // justify: "space-between",
      subheading: "Latest News",
      // subheadingButton: "View all",
      link: "/research",
      id: 9,
    },
  ]);
  const [callToActions] = useState([
    {
      heading: "We're ready to combine our capabilities with your expertise. ",
      button: "Get in touch",
      bgColour: "#E6E4E2",
      id: 1,
      textColour: "#1C1C1E",
    },
  ]);
  const [graphicCards] = useState([
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      video: NeurIPS2024,
      bgColour: "#51DA4C",
      textColour: "#FFFFFF",
      heading:
        "The Thirty-Eighth Annual Conference on Neural Information Processing Systems (NeurIPS 2024)",
      paragraph: "Lightning Talk: System-2 Reasoning at Scale Workshop",
      alt: "A 17th century painting of Chickens and Ducks by Melchior d' Hondecoeter",
      id: 1,
      link: "https://www.youtube.com/watch?v=BedeAoplLVk",
      target: "blank",
    },
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: AIES,
      bgColour: "#00002E",
      textColour: "#FFFFFF",
      heading:
        "Proceedings of the Eighth AAAI/ACM Conference on AI, Ethics, and Society (AIES 2025)",
      paragraph:
        "A Privacy-by-Design Pipeline for Social Media Data in AI Research",
      alt: "Cropped close up of dark green diagonal line on a pale green background",
      id: 2,
      link: "https://ojs.aaai.org/index.php/AIES/article/view/36685",
      target: "blank",
    },
  ]);

  return (
    <>
      <Seo
        title="Between Every Field That Studied Thinking | socius labs"
        description="socius labs works in the space between every field that has studied thinking — uniting the social sciences with modern AI. Learn about our mission and people."
        image={LSE}
        path="/about"
      />

      <SecondaryHero secondaryHeroes={secondaryHeroes} />
      <PaddedContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 1)}
        />
      </PaddedContainer>

      <CustomContainer
        style={{
          backgroundColor: "#3c46ff",
        }}
      >
        <CustomGrid>
          <TextBlocks
            textBlocks={textBlocks.filter((textBlock) => textBlock.id === 2)}
          />

          <TextBlocks
            textBlocks={textBlocks.filter((textBlock) => textBlock.id === 3)}
          />
        </CustomGrid>

        <CustomImageContainer
          style={{
            aspectRatio: "#E6E4E2",
            gap: "40px",
          }}
        >
          <MyImage src={LSE} alt="The London School of Economics" />
        </CustomImageContainer>
      </CustomContainer>

      <CustomGrid>
        <Container>
          <TextBlocks
            textBlocks={textBlocks.filter((textBlock) => textBlock.id === 4)}
          />
        </Container>

        <Container>
          <ColourContainer
            style={{
              backgroundColor: "#CBDCFF",
            }}
          >
            <TextBlocks
              textBlocks={textBlocks.filter((textBlock) => textBlock.id === 5)}
            />
            <TextBlocks
              textBlocks={textBlocks.filter((textBlock) => textBlock.id === 6)}
            />
          </ColourContainer>
          <ColourContainer
            style={{
              backgroundColor: "#D9FFD8",
            }}
          >
            <TextBlocks
              textBlocks={textBlocks.filter((textBlock) => textBlock.id === 7)}
            />
            <TextBlocks
              textBlocks={textBlocks.filter((textBlock) => textBlock.id === 8)}
            />
          </ColourContainer>
        </Container>
      </CustomGrid>

      <PaddedContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 9)}
        />
        <GraphicCard graphicCards={graphicCards} grid="2fr 1fr" />
      </PaddedContainer>

      <QuoteContainer>
        <H4>
          Every AI lab builds forward. We build backward too. Maybe the solution
          to tomorrow's problem was solved in 1979. Or 1781.
        </H4>
      </QuoteContainer>
      <CallToAction callToActions={callToActions} />
    </>
  );
};

export default About;

export const ColourContainer = styled(PaddedContainer)`
  padding: 24px;
  border-radius: 20px;
  margin: 0px;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 0px;
  }
`;

export const Container = styled(PaddedContainer)`
  margin: 0px 0px 120px 0px;
  @media (max-width: 414px) {
    margin: 20px 20px 40px 20px;
  }
`;

export const CustomGrid = styled(GridContainer)`
  margin: 0px auto;
  /* padding: 60px 0px; */
  grid-template-columns: 60fr 40fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 414px) {
    padding: 0px;
    margin: 0px;
  }
`;

export const CustomContainer = styled(PaddedContainer)`
  padding: 60px 24px;
  margin: 60px auto;
  width: 100%;
  max-width: none;
  overflow: hidden; /* Ensures animation doesn’t spill out */
  display: flex;
  justify-content: center;

  @media (max-width: 1681px) {
    margin: 60px 0px;
  }

  @media (max-width: 414px) {
    padding: 40px 20px;
    margin: 40px 0px;
  }
`;

export const QuoteContainer = styled(CentreContainer)`
  margin: 0px auto;
  padding: 20vh 10vw;
  max-width: 1729px;

  @media (max-width: 414px) {
    padding: 10vh 10vw;
  }
`;

export const CustomImageContainer = styled(ImageContainer)`
  max-width: 1681px;
  justify-content: center;
  margin: 0px auto;
`;

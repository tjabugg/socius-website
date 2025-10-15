import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import SecondaryHero from "../components/SecondaryHero";
import PELTP from "../assets/images/PELTP_Data_Image.png";
import DataHero from "../assets/images/database_hero_graphic.jpg";
import { Helmet } from "react-helmet";
import {
  CustomGridContainer,
  CustomPaddedContainer,
  ImageContainer,
  MyImage,
  PaddedContainer,
} from "../styles";
import styled from "styled-components";

const Data = () => {
  const [secondaryHeroes] = useState([
    {
      subtitle: "Data",
      heading:
        "Datasets, scrapers, pipelines: the boring infrastructure that matters",
      image: DataHero,
      imageAlt:
        "Cropped close up of a pale blue socius pattern on a bright blue background",
      id: 1,
    },
  ]);

  const [textBlocks] = useState([
    {
      captionOne: "Published",
      captionTwo: "ICWSM 2024",
      tagOneColour: "#E6E4E2",
      tagTwoColour: "#87807B",
      heading: "sentibank",
      textColour: "#FFFFFF",
      subheading: "How Software 1.0 understood feelings",
      paragraph:
        "Sixty years of human emotion research, rescued from digital archaeology. Fifteen dictionaries. One toolkit. How Software 1.0 understood feelings before neural networks took over.",
      id: 1,
      secondaryButton: "Read the archaeology",
      tertiaryButton: "Install toolkit",
      tertiaryLink: "https://github.com/socius-org/sentibank",
      tertiaryTarget: "blank",
      target: "_blank",
    },
    {
      captionOne: "Published",
      captionTwo: "AIES 2025",
      tagOneColour: "#514E4B",
      tagTwoColour: "#87807B",
      textColour: "#1C1C1E",
      subheading: "PETLP Framework",
      altParagraph:
        "Sixty years of human emotion research, rescued from digital archaeology. Fifteen dictionaries. One toolkit. How Software 1.0 understood feelings before neural networks took over.",
      id: 2,
      primaryButton: "Read the paper",
      primaryLink: "https://www.arxiv.org/abs/2508.09232",
      primaryTarget: "blank",
      tertiaryButton: "Learn the framework",
      target: "_blank",
    },
    {
      captionOne: "In Development",
      tagOneColour: "#514E4B",
      tagTwoColour: "#87807B",
      textColour: "#1C1C1E",
      subheading: "RedditHarbor",
      altParagraph:
        "Sixty years of human emotion research, rescued from digital archaeology. Fifteen dictionaries. One toolkit. How Software 1.0 understood feelings before neural networks took over.",
      id: 3,
      primaryButton: "Explore the project",
      primaryLink: "https://github.com/socius-org/RedditHarbor",
      primaryTarget: "blank",
      tertiaryButton: "Access the beta",
      target: "_blank",
    },
    {
      heading: "Responsible Data Pipeline",
      subheading: "Making compliance automatic",
      id: 4,
    },
  ]);

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Datasets, Scrapers, Pipelines | socius labs</title>
        <meta
          name="title"
          content="Datasets, Scrapers, Pipelines | socius labs"
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
          content="Datasets, Scrapers, Pipelines | socius labs"
        />
        <meta
          property="og:description"
          content="By leveraging AI, our new dataset search assistant simplifies data discovery, instantly matching researchers' goals with relevant data."
        />
        <meta property="og:image" content={DataHero} />
      </Helmet>

      <SecondaryHero secondaryHeroes={secondaryHeroes} />

      <CustomPaddedContainer
        style={{
          backgroundColor: "#292726",
        }}
      >
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 1)}
        />

        <Container>
          <WebContainer
            src="/sentibankApp.html"
            alt="An interactive Demonstration of the socius sentibank application"
            title="Interactive Mockup"
          />{" "}
        </Container>
      </CustomPaddedContainer>

      <HeadingContainer
        style={{
          backgroundColor: "#E6E4E2",
        }}
      >
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 4)}
        />
      </HeadingContainer>

      <GreyContainer
        style={{
          backgroundColor: "#E6E4E2",
        }}
      >
        <PaddedContainer>
          <ImageContainer
            style={{
              aspectRatio: "16/9",
            }}
          >
            <MyImage
              src={PELTP}
              alt="Cropped close up of a green socius pattern on a dark green background"
            />
          </ImageContainer>
          <TextBlocks
            textBlocks={textBlocks.filter((textBlock) => textBlock.id === 2)}
          />
        </PaddedContainer>

        <PaddedContainer>
          <Container>
            <WebContainer
              src="/redditharborApp.html"
              alt="An interactive Demonstration of the socius RedditHarbor application"
              title="Interactive Mockup"
            />{" "}
          </Container>

          <TextBlocks
            textBlocks={textBlocks.filter((textBlock) => textBlock.id === 3)}
          />
        </PaddedContainer>
      </GreyContainer>
    </>
  );
};

export default Data;

export const WebContainer = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 800px;
  /* optional: ensures some initial height */
  border: 0;
  display: block;
  border-radius: 20px;
`;

export const HeadingContainer = styled(PaddedContainer)`
  padding: 60px 24px 0px 24px;
  max-width: 1681px;

  @media (max-width: 1681px) {
    margin: 0px;
  }
`;

export const GreyContainer = styled(CustomGridContainer)`
  padding: 40px 24px 60px 24px;

  @media (max-width: 1681px) {
    padding: 40px 0px;
  }

  @media (max-width: 768px) {
    /* padding: 24px 20px 60px 20px; */
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  /* aspect-ratio: 16/9; */
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 1681px) {
    /* aspect-ratio: 16/9; */
  }

  @media (max-width: 768px) {
    max-height: 640px;
  }

  @media (max-width: 414px) {
    /* aspect-ratio: 9/16; */
  }
`;

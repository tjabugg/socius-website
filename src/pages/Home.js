import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import { useState } from "react";
import CentreCards from "../components/CentreCard";
import Animals from "../assets/images/animals.jpg";
import MonitorGenerate from "../assets/images/monitorGenerate_graphic.jpg";
import BeforeYouThink from "../assets/images/beforeYouThink_home_graphic.jpg";
import CountryPath from "../assets/images/country_path.jpg";
import RedditHarbor from "../assets/images/redditHarbor_graphic.jpg";
import MountainPath from "../assets/images/mountain_path.jpg";
import lseLogo from "../assets/images/lse_logo.jpg";
import lseGenerate from "../assets/images/lse_generate_logo.jpg";
import Wheat from "../assets/images/wheat.jpg";
import PELTP from "../assets/images/PELTP.svg";
import styled from "styled-components";
import Seo from "../components/Seo";
import {
  PaddedContainer,
  CentreContainer,
  MyImage,
  ImageContainer,
  H4,
  PrimaryButton,
  TextContainer,
} from "../styles";
import TextBlocks from "../components/TextBlocks";

const Home = () => {
  // An array and function

  const [articleCards] = useState([
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: Animals,
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
      alt: "A 17th century painting of Chickens and Ducks by Melchior d' Hondecoeter",
      id: 1,
      link: "/research/system-1.5",
    },
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: MonitorGenerate,
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
      alt: "Cropped close up of dark green diagonal line on a pale green background",
      id: 2,
      link: "/research/monitor-generate-verify",
    },
    {
      aspectRatio: "16/9",
      flexDirection: "row",
      image: BeforeYouThink,
      padding: "0px",
      heading: "Before You 〈think〉, monitor",
      paragraph:
        "When AI pauses to assess difficulty first, it solves 7% more problems correctly.",
      tagOneBgColour: "#1C9418",
      tagOneColour: "#F1F0EF",
      captionOne: "Workshop",
      captionTwo: "COLM 2025",
      tagTwoBgColour: "#CBDCFF",
      tagTwoColour: "#514E4B",
      alt: "Cropped close up of bright blue arc on a blue background",
      id: 3,
      link: "/research/before-you-think-monitor",
    },
    {
      aspectRatio: "16/9",
      flexDirection: "row",
      image: CountryPath,
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
      alt: "A 17th century painting of a Wooded Landscape",
      id: 4,
      link: "/research/in-defence-of-post-hoc-explainability",
    },
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: RedditHarbor,
      padding: "0px",
      heading: "RedditHarbor",
      paragraph: "Reddit scraping with compliance built-in, not bolted on.",
      alt: "Cropped close up of light blue diagonal line on a bright green background",
      id: 5,
      link: "/documentation#RedditHarbor",
    },

    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: MountainPath,
      padding: "0px",
      heading: "sentibank",
      paragraph: "Sixty years of emotion dictionaries. One import statement.",
      alt: "The 19th century painting, The Path By The Lake/ Ben Voirlich, by David Cox Junior",
      id: 6,
      link: "/documentation#sentibank",
    },
  ]);

  const [centreCards] = useState([
    {
      bgImage: Wheat,
      captionOne: "Published",
      tagOneColour: "#514E4B",
      captionTwo: "ICWSM 2024",
      tagTwoColour: "#87807B",
      heading: "sentibank: Sixty years of human emotion dictionaries, unified",
      paragraph: "How we coded feelings before neural networks.",
      id: 1,
      link: "/data/sentibank",
    },
    {
      image: PELTP,
      captionOne: "Published",
      tagOneColour: "#CAC6C3",
      captionTwo: "AIES 2025",
      tagTwoColour: "#87807B",
      heading: "PETLP: The legal stack for social media AI research, decoded",
      paragraph: " From extraction to model release.",
      id: 2,
      link: "/data/peltp",
    },
  ]);

  const [textBlocks] = useState([
    {
      subheading: "Supported by",
      id: 1,
    },
    {
      justify: "space-between",
      subheading: "Research",
      subheadingButton: "View all",
      link: "/research",
      id: 2,
    },
    {
      justify: "space-between",
      subheading: "Data",
      subheadingButton: "View all",
      link: "/data",
      id: 3,
    },
    {
      justify: "space-between",
      subheading: "Documentation",
      subheadingButton: "View all",
      link: "/documentation",
      id: 4,
    },
  ]);

  return (
    <>
      <Seo
        title="Experimental Intelligence Lab | socius labs"
        image={MonitorGenerate}
        path="/"
      />
      <Hero />

      <CustomContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 1)}
        />{" "}
        <SupportContainer>
          <ImageContainer
            style={{
              borderRadius: "0px",
            }}
          >
            <MyImage
              alt={`London School of Economics and Political Science Logo`}
              src={lseLogo}
            />
          </ImageContainer>
          <ImageContainer
            style={{
              borderRadius: "0px",
            }}
          >
            <MyImage
              alt={`Generate Entrepeneurship at LSE Logo`}
              src={lseGenerate}
            />
          </ImageContainer>
        </SupportContainer>
      </CustomContainer>

      <PaddedContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 2)}
        />
        <ArticleCard
          articleCards={articleCards.filter((card) => [1, 2].includes(card.id))}
          grid="2fr 1fr"
        />
        <ArticleCard
          articleCards={articleCards.filter((card) => [3, 4].includes(card.id))}
          grid="1fr 1fr"
        />
      </PaddedContainer>

      <CustomContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 3)}
        />{" "}
        <CentreCards centreCards={centreCards} />
      </CustomContainer>

      <TeamContainer>
        <TeamTextContainer>
          <H4>
            Every AI lab builds forward. We build backward too. Maybe the
            solution to tomorrow's problem was solved in 1979. Or 1781.
          </H4>
          <PrimaryButton href={"/about"}>Meet the lab</PrimaryButton>
        </TeamTextContainer>
      </TeamContainer>

      <CustomContainer>
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 4)}
        />{" "}
        <ArticleCard
          articleCards={articleCards.filter((card) => [5, 6].includes(card.id))}
          grid="1fr 1fr"
        />
      </CustomContainer>

      {/* <CallToAction callToActions={callToActions} /> */}
    </>
  );
};

export default Home;

export const ButtonContainer = styled(CentreContainer)`
  margin: 24px;
`;
export const TeamTextContainer = styled(TextContainer)`
  width: 50%;
  /* margin-left: auto; */

  @media (max-width: 1280px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const CustomContainer = styled(PaddedContainer)`
  margin: 60px auto;
  max-width: 1681px;

  @media (max-width: 1681px) {
    margin: 60px 24px;
  }
  @media (max-width: 1024px) {
    padding: 40px 0px;
  }
`;

export const CustomResearchContainer = styled(CustomContainer)`
  gap: 40px;
`;

export const TeamContainer = styled(CustomContainer)`
  justify-content: flex-end;
  padding: 10vh 0px;
  max-width: 1681px;
  gap: 24px;

  @media (max-width: 1681px) {
    padding: 10vh 0px;
  }

  @media (max-width: 1280px) {
    padding: 5vh 0px;
  }
`;

export const SupportContainer = styled(CentreContainer)`
  padding: 10vh 15vw 10vh 15vw;
  flex-direction: row;
  gap: 180px;
  max-width: 1681px;

  @media (max-width: 2000px) {
    padding: 10vh 25vw 10vh 25vw;
  }

  @media (max-width: 1280px) {
    padding: 5vh 20vw 5vh 20vw;
  }

  @media (max-width: 414px) {
    padding: 5vh 10vw 5vh 10vw;
    gap: 60px;
  }
`;

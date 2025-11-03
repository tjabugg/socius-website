import { useState } from "react";
import TextBlocks from "../components/TextBlocks";
import SecondaryHero from "../components/SecondaryHero";
import Philosopher from "../assets/images/philosopher.jpg";
import Anew from "../assets/images/anew_graphic.jpg";
import Mountain from "../assets/images/mountain.jpg";
import VictorianTown from "../assets/images/victorian_town.jpg";
import Tudors from "../assets/images/tudors.jpg";
import Lake from "../assets/images/lake.jpg";
import SentiWordNet from "../assets/images/sentiWordNet_graphic.jpg";
import DatabaseDriven from "../assets/images/databaseDriven_graphic.jpg";
import MountainValley from "../assets/images/mountain_valley.jpg";
import Aristocrats from "../assets/images/aristocrats.jpg";
import { Helmet } from "react-helmet";
import ArticleCard from "../components/ArticleCard";
import { PaddedContainer } from "../styles";
import styled from "styled-components";

const Documentation = () => {
  const [secondaryHeroes] = useState([
    {
      subtitle: "Documentation",
      heading: "Inheriting our digital artifacts without the exhaustion",
      image: Philosopher,
      imageAlt:
        "A 17th century painting of Jeremiah Lamenting the Destruction of Jerusalem, by Rembrandt.",
      id: 1,
    },
  ]);

  const [articleCards] = useState([
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: Anew,
      padding: "0px",
      heading: "ANEW",
      paragraph:
        "Emotional ratings across the dimensions of Pleasure, Arousal, and Dominance",
      tagOneBgColour: "#3C46FF",
      tagOneColour: "#F1F0EF",
      captionOne: "Dataset",
      captionTwo: "Psychology",
      tagTwoBgColour: "#D9FFD8",
      tagTwoColour: "#514E4B",
      alt: "Cropped close up of a dark green socius pattern on a pale green background",
      id: 1,
      link: "https://socius-org.github.io/sentibank/archive/ANEW.html",
      target: "blank",
    },
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: Mountain,
      padding: "0px",
      heading: "General Inquirer",
      paragraph:
        "Lexicon categorising words across multiple psycholinguistic dimensions",
      tagOneBgColour: "#193718",
      tagOneColour: "#F1F0EF",
      captionOne: "Dataset",
      captionTwo: "Behavioural Science",
      tagTwoBgColour: "#AEF2AC",
      tagTwoColour: "#514E4B",
      alt: "A 19th century painting of Dumbarton Castle by John Ruskin",
      id: 2,
      link: "https://socius-org.github.io/sentibank/archive/General%20Inquirer.html",
      target: "blank",
    },
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: VictorianTown,
      padding: "0px",
      heading: "OpinionLexicon",
      paragraph:
        "A dictionary for product reviews, comprising words curated for informal language",
      tagOneBgColour: "#00002E",
      tagOneColour: "#F1F0EF",
      captionOne: "Dataset",
      captionTwo: "Product Review",
      tagTwoBgColour: "#CBDCFF",
      tagTwoColour: "#514E4B",
      alt: "A 19th century painting of Paradise Street Towards Christ Church By Charles Rudd",
      id: 3,
      link: "https://socius-org.github.io/sentibank/archive/OpinionLexicon.html",
      target: "blank",
    },
    {
      aspectRatio: "4/5",
      flexDirection: "column",
      image: Tudors,
      padding: "0px",
      heading: "VADER",
      paragraph:
        "A gold-standard lexicon optimised for social media sentiment analysis",
      tagOneBgColour: "#1C9418",
      tagOneColour: "#F1F0EF",
      captionOne: "Dataset",
      captionTwo: "Social Media",
      tagTwoBgColour: "#8FB2FF",
      tagTwoColour: "#292726",
      alt: "A 17th century painting of Officers and other civic guardsmen of the XIth District of Amsterdam",
      id: 4,
      link: "https://socius-org.github.io/sentibank/archive/VADER.html",
      target: "blank",
    },
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: Lake,
      padding: "0px",
      heading: "WordNet-Affect",
      paragraph:
        "Affective labels that are hierarchically organised based on WordNet synsets",
      tagOneBgColour: "#191F8C",
      tagOneColour: "#F1F0EF",
      captionOne: "Dataset",
      captionTwo: "Psychology",
      tagTwoBgColour: "#AEF2AC",
      tagTwoColour: "#514E4B",
      alt: "An illustration of English Lake Scenery by A. F. Lydon",
      id: 5,
      link: "https://socius-org.github.io/sentibank/archive/WordNet-Affect.html",
      target: "blank",
    },
    {
      aspectRatio: "1/1",
      flexDirection: "column",
      image: SentiWordNet,
      padding: "0px",
      heading: "SentiWordNet",
      paragraph:
        "A comprehensive dictionary that assigns graded sentiment scores to WordNet synsets",
      tagOneBgColour: "#193718",
      tagOneColour: "#F1F0EF",
      captionOne: "Dataset",
      captionTwo: "General",
      tagTwoBgColour: "#D9FFD8",
      tagTwoColour: "#514E4B",
      alt: "A symmetrical light green socius pattern on a navy background",
      id: 6,
      link: "https://socius-org.github.io/sentibank/archive/SentiWordNet.html",
      target: "blank",
    },
    {
      aspectRatio: "4/5",
      flexDirection: "column",
      image: MountainValley,
      padding: "0px",
      heading: "Subreddit data collection",
      paragraph:
        "Collect data from specific subreddits, whether you’re interested in submissions, comments or user information",
      tagOneBgColour: "#191F8C",
      tagOneColour: "#F1F0EF",
      captionOne: "Scraper",
      captionTwo: "Subreddit",
      tagTwoBgColour: "#D9FFD8",
      tagTwoColour: "#514E4B",
      alt: "A painting of an Alpine Valley, with the Matterhorn in the Distance, by John Ruskin",
      id: 7,
      link: "https://socius-org.github.io/RedditHarbor/hands_on/subreddit_based.html",
      target: "blank",
    },
    {
      aspectRatio: "16/9",
      flexDirection: "column",
      image: Aristocrats,
      padding: "0px",
      heading: "Keyword based data collection",
      paragraph:
        "Collect submissions based on specific keywords from your desired subreddits",
      tagOneBgColour: "#193718",
      tagOneColour: "#F1F0EF",
      captionOne: "Scraper",
      captionTwo: "Keyword",
      tagTwoBgColour: "#CBDCFF",
      tagTwoColour: "#514E4B",
      alt: "A 19th century painting of Regents and Regentesses of the Lepers' Asylum",
      id: 8,
      link: "https://socius-org.github.io/RedditHarbor/hands_on/keyword_based.html",
      target: "blank",
    },
    {
      aspectRatio: "1/1",
      flexDirection: "column",
      image: DatabaseDriven,
      padding: "0px",
      heading: "Database-driven data collection",
      paragraph:
        "Leverage your existing database to collect additional relevant data, such as comments from specific submissions",
      tagOneBgColour: "#3C46FF",
      tagOneColour: "#F1F0EF",
      captionOne: "Scraper",
      captionTwo: "Database",
      tagTwoBgColour: "#8FB2FF",
      tagTwoColour: "#292726",
      alt: "Cropped close up of green arc on a pale blue background",
      id: 9,
      link: "https://socius-org.github.io/RedditHarbor/hands_on/database_driven.html",
      target: "blank",
    },
  ]);

  const [textBlocks] = useState([
    {
      justify: "space-between",
      heading: "sentibank",
      paragraph: "Sixty years of emotion dictionaries. One import statement.",
      paragraphButton: "View all",
      link: "https://socius-org.github.io/sentibank/about.html",
      target: "blank",
      id: 1,
    },
    {
      justify: "space-between",
      heading: "RedditHarbor",
      paragraph: "Reddit scraping with compliance built-in, not bolted on.",
      paragraphButton: "View all",
      link: "https://socius-org.github.io/RedditHarbor/about.html",
      target: "blank",
      id: 2,
    },
  ]);
  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Guides & Resources | socius labs</title>
        <meta name="title" content="Guides & Resources | socius labs" />
        <meta
          name="description"
          content="Our research focuses on integrating AI models with social science principles - enhancing interpretability, transparency and accountability."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://socius-ai.netlify.app/" /> */}
        <meta property="og:title" content="Guides & Resources | socius labs" />
        <meta
          property="og:description"
          content="Our research focuses on integrating AI models with social science principles - enhancing interpretability, transparency and accountability."
        />
        <meta property="og:image" content={Philosopher} />
      </Helmet>
      <SecondaryHero secondaryHeroes={secondaryHeroes} />

      <CustomContainer id="sentibank">
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 1)}
        />
        <ArticleCard
          articleCards={articleCards.filter((card) => [1, 2].includes(card.id))}
          grid="2fr 1fr"
        />
        <ArticleCard
          articleCards={articleCards.filter((card) =>
            [3, 4, 5, 6].includes(card.id)
          )}
          grid="1fr 1fr 1fr 1fr"
        />
      </CustomContainer>

      <CustomContainer id="RedditHarbor">
        <TextBlocks
          textBlocks={textBlocks.filter((textBlock) => textBlock.id === 2)}
        />
        <ArticleCard
          articleCards={articleCards.filter((card) =>
            [7, 8, 9].includes(card.id)
          )}
          grid="1fr 1fr 1fr 1fr"
        />
      </CustomContainer>
    </>
  );
};

export default Documentation;

export const CustomContainer = styled(PaddedContainer)`
  @media (max-width: 1729px) {
    margin: 0px 24px;
    padding: 60px 0px;
  }

  @media (max-width: 414px) {
    padding: 40px 0px;
  }
`;

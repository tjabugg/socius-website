import { useState } from "react";
import React from "react";
import PublicationCover from "../../components/PublicationCover";
import Farms from "../../assets/images/farms.jpg";
import PublicationCoverPattern from "../../assets/svgs/organised/organised_sentibank_pattern.svg";
import PublicationDetails from "../../components/PublicationDetails";
import ArticleCard from "../../components/ArticleCard";
import Organised10x10Pattern from "../../assets/svgs/organised/organised_10x10_pattern.svg";
import Random7x7Pattern02 from "../../assets/svgs/random/random_7x7_pattern_02.svg";
import Beach from "../../assets/images/beach.jpg";
import StandingConversation from "../../assets/images/standing_conversation.jpg";
import MonotoneCrowd from "../../assets/images/monotone_crowd.jpg";
import CountrysidePainting from "../../assets/images/countryside_painting.jpg";
import Sitting from "../../assets/images/sitting.jpg";
import Whiteboard from "../../assets/images/whiteboard.jpg";
import GitHub from "../../assets/images/github.svg";
import CopyBlock from "../../components/CopyBlock";

import { Helmet } from "react-helmet";

import styled from "styled-components";
import {
  // CentreContainer,
  Title,
  ImageContainer,
  MyImage,
  ParentContainer,
  Link,
} from "../../styles";

const SentiBank = () => {
  const [publicationCovers] = useState([
    {
      date: "August 2023",
      heading: "SentiBank: Unleashing the emotions of textual data",
      paragraph:
        "Providing a trusted foundation for sentiment analysis via verified dictionaries",
      id: 1,
      bgColour: "#D9FFD8",
      graphic: PublicationCoverPattern,
    },
  ]);

  const [showLineNumbers] = useState([
    {
      code: `# 1. Installation 

      pip install sentibank 
      
      
      # 2. Import modules 
      
      from sentibank import archive 
      
      
      # 3. Access dictionaries 
      
      load = archive.load( ) 
      vader = load.dict(“VADER_v2014”) 
      `,
    },
  ]);

  const [publicationDetails] = useState([
    {
      icon: GitHub,
      date: "May 31, 2023",
      id: 1,
      synopsis:
        "SentiBank is an open database project that embraces emotions as the heart of textual data. The journey began with a realisation of the profound impact emotions have on every aspect of human life.",
    },
    {
      paragraph:
        "Sentiments are at the core of human decision-making and understanding – Influencing social dynamics, transforming the political landscape and even driving economic fluctuations. And thus naturally, sentiment analysis has become an increasingly critical technique across social science domains, ranging from policy-making to business analytics.\n\nWhile deep learning models have excelled in achieving high accuracy, often surpassing simpler lexicon models in sentiment analysis tasks, their inherently opaque nature poses challenges for applications in high-stakes domains like government policymaking or mental health diagnosis, where transparent and interpretable decision-making is crucial.\n\nRecognising the continued importance of dictionary-based sentiment analysis, particularly in computational social science fields where interpretability is paramount, improving dictionary-based sentiment analysis remains vital. Dictionary-based sentiment analysis relies on expert-curated lexicons, yet effectively applying these lexicons in rule-based systems faces several challenges.",
      id: 2,
    },
    {
      paragraph:
        "Scattered Landscape\n\nVarious lexicons are scattered across various sources, such as GitHub repositories, appendices of publications, supplementary materials, and author/institutional websites. This fragmented distribution poses a significant challenge for researchers who seek to leverage sentiment analysis effectively. Furthermore, they are distributed in diverse file formats, necessitating the tedious process of exporting and importing data into a format compatible with the researcher’s workflow.",
      id: 3,
    },
    {
      paragraph:
        "Championing Quality\n\nNumerous lexicons, including those that undergo peer review, frequently encounter challenges such as the presence of duplicates accompanied by conflicting labels. A substantial portion of existing dictionaries in sentibank (60%) required removal of duplicates, function words, and lexicons lacking substantive sentiment content.",
      id: 4,
    },
    {
      paragraph:
        "An encyclopaedic hub of sentiment dictionaries\n\nWith sentibank, researchers can access a vast array of sentiment lexicons from diverse domains and genres. This streamlined approach not only reduces the hassle of locating and validating individual lexicons but also expands the use cases of these invaluable legacy resources. sentibank's centralised hub empowers users to combine and compare lexicons, facilitating more comprehensive sentiment analysis. Moreover, it opens up opportunities for data integration across domains and genres, enriching the depth and accuracy of research findings.",
      id: 5,
    },
    {
      synopsis: "Utilise sentibank in your research",
      paragraph:
        "Import and access to our curated collection of sentiment dictionaries in 3 frictionless steps. ",
      id: 6,
    },
    {
      paragraph: [
        <p>
          For further information, such as loading dictionaries based on the
          predefined lexicon identifiers, visit our&nbsp;
          <InlineLink href="https://aiindex.stanford.edu/report/">
            documentation
          </InlineLink>
          .
        </p>,
      ],
      id: 7,
    },
    {
      synopsis: "Author",
      paragraph: "Nick Oh",
      id: 8,
    },
  ]);

  const [sentiBankCards] = useState([
    {
      image: Organised10x10Pattern,
      bgColour: "#51DA4C",
      heading: "ANEW",
      paragraph:
        "Emotional ratings across the dimensions of Pleasure, Arousal, and Dominance",
      id: 1,
    },
    {
      padding: "0px",
      image: Beach,
      heading: "General Inquirer",
      paragraph:
        "Lexicon categorising words across multiple psycholinguistic dimensions",
      alt: "An aerial shot of people on a beach and in the sea",
      link: "https://socius-org.github.io/sentibank/archive/General%20Inquirer.html",
      id: 2,
    },
    {
      image: Random7x7Pattern02,
      bgColour: "#193718",
      heading: "OpinionLexicon",
      paragraph:
        "A dictionary for product reviews, comprising words curated for informal language",
      link: "https://socius-org.github.io/sentibank/archive/OpinionLexicon.html",
      id: 3,
    },
    {
      padding: "0px",
      image: Sitting,
      heading: "SentiWordNet",
      paragraph:
        "A comprehensive dictionary that assigns graded sentiment scores to WordNet synsets",
      link: "https://socius-org.github.io/sentibank/archive/SentiWordNet.html",
      id: 4,
    },
    {
      padding: "0px",
      image: CountrysidePainting,
      heading: "Vader",
      paragraph:
        "A gold-standard lexicon optimised for social media sentiment analysis",
      link: "https://socius-org.github.io/sentibank/archive/VADER.html",
      id: 5,
    },
    {
      padding: "0px",
      image: Whiteboard,
      heading: "WordNet-Affect",
      paragraph:
        "Affective labels that are hierarchically organised based on WordNet synsets",
      link: "https://socius-org.github.io/sentibank/archive/WordNet-Affect.html",
      id: 6,
    },
  ]);

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>
          SentiBank: Unleashing the emotions of textual data | socius
        </title>
        <meta
          name="title"
          content="SentiBank: Unleashing the emotions of textual data | socius"
        />
        <meta
          name="description"
          content="An open database of sentiment lexicons and dictionaries that lets you integrate your chosen domain or application through a simple API."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://socius-ai.netlify.app/" /> */}
        <meta
          property="og:title"
          content="SentiBank: Unleashing the emotions of textual data | socius"
        />
        <meta
          property="og:description"
          content="An open database of sentiment lexicons and dictionaries that lets you integrate your chosen domain or application through a simple API."
        />
        <meta property="og:image" content={Farms} />
      </Helmet>

      <CoverContainer>
        <PublicationCover publicationCovers={publicationCovers} />
      </CoverContainer>

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 1
        )}
      />
      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 2
        )}
      />

      <Container>
        <MediumContainer>
          <MyImage
            src={StandingConversation}
            alt="People standing in an office having a convesation"
          ></MyImage>
        </MediumContainer>
      </Container>

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 3
        )}
      />

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 4
        )}
      />
      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 5
        )}
      />

      <Container>
        <LargeContainer>
          <MyImage
            src={MonotoneCrowd}
            alt="A crowd of people stood facing the same direction, in black and white"
          ></MyImage>
        </LargeContainer>
      </Container>

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 6
        )}
      />

      <CopyBlock showLineNumbers={showLineNumbers} />

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 7
        )}
      />

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 8
        )}
      />

      <TitleContainer>
        <Title>Explore our documentation for SentiBank</Title>
      </TitleContainer>
      <ArticleCard articleCards={sentiBankCards} />
    </>
  );
};

export default SentiBank;

export const CoverContainer = styled.div`
  padding-top: 43px;

  @media (max-width: 768px) {
    padding-top: 55px;
  }
`;

export const InlineLink = styled(Link)`
  font-size: 19px;
  color: #1b1b1b;
  text-decoration: underline;

  @media (max-width: 1728px) {
    font-size: 18px;
  }

  &:hover {
    opacity: 100%;
    text-decoration: none;
  }
`;

export const Container = styled(ParentContainer)`
  justify-content: center;
  margin: 24px auto 24px auto;

  @media (max-width: 1728px) {
    margin: 24px;
  }
`;

export const SmallContainer = styled(ImageContainer)`
  aspect-ratio: 1/1;
  width: 50%;
  /* justify-content: center; */
  /* align-content: center; */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MediumContainer = styled(ImageContainer)`
  aspect-ratio: 16/9;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LargeContainer = styled(MediumContainer)`
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleContainer = styled(ParentContainer)`
  margin-top: 80px;
  padding-left: 12px;

  @media (max-width: 1728px) {
    padding-left: 0px;
  }

  @media (max-width: 768px) {
    margin-top: 64px;
  }

  @media (max-width: 414px) {
    margin-top: 40px;
  }
`;

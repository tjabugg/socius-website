import { useState } from "react";
import React from "react";
import PublicationCover from "../../components/PublicationCover";
import Farms from "../../assets/images/farms.jpg";
import PublicationCoverPattern from "../../assets/svgs/organised/organised_cover_pattern.svg";
import PublicationDetails from "../../components/PublicationDetails";
import ArticleCard from "../../components/ArticleCard";
import Organised10x10Pattern from "../../assets/svgs/organised/organised_10x10_pattern.svg";
import Random7x7Pattern02 from "../../assets/svgs/random/random_7x7_pattern_02.svg";
import Beach from "../../assets/images/beach.jpg";
import StandingConversation from "../../assets/images/standing_conversation.jpg";
import MonotoneCrowd from "../../assets/images/monotone_crowd.jpg";
import PostItNotes from "../../assets/images/post_it_notes.jpg";

import { Helmet } from "react-helmet";

import styled from "styled-components";
import {
  CentreContainer,
  Title,
  ImageContainer,
  MyImage,
  ParentContainer,
} from "../../styles";

const CompliSent = () => {
  const [publicationCovers] = useState([
    {
      date: "August 2023",
      heading: "SentiBank: Unleashing the emotions of textual data",
      paragraph:
        "Providing a trusted foundation for sentiment analysis via verified dictionaries",
      id: 1,
      bgColour: "#CBDCFF",
      graphic: PublicationCoverPattern,
    },
  ]);

  const [publicationDetails] = useState([
    {
      date: "May 31, 2023",
      synopsis:
        "sentibank is an open database project that embraces emotions as the heart of textual data. The journey began with a realisation of the profound impact emotions have on every aspect of human life. Sentiments are at the core of human decision-making and understanding: Influence social dynamics, transform political landscape and even drive economic fluctuations.",
      id: 1,
    },
    {
      paragraph:
        "Yet, the vast potential of sentiment lexicons remained largely untapped in the realm of data science. This realisation fueled the creation of sentibank - to become the ultimate repository of sentiment lexicon dictionaries, meticulously curated and verified by experts, unlocking the hidden emotions within textual data like never before.",
      id: 2,
    },
    {
      heading: "Why did we start this project? ",
      paragraph:
        "1. Scattered Landscape\n\nVarious lexicons exist independently across multiple sources and platforms. This fragmented distribution poses a significant challenge for researchers, data scientists, and professionals who seek to leverage sentiment analysis effectively. By establishing sentibank as a central hub for (potentially all) existing sentiment lexicon dictionaries, we enhance the accessibility and usability of these legacy resources.",
      id: 3,
      caption: "Reference",
    },
    {
      paragraph:
        "2. Championing Quality\n\nIn the vast sea of data, the team recognised the need for trusted and verified sentiment lexicons. SentiBank is a comprehensive collection of sentiment lexicons, carefully curated and quality-checked by our team of experts. This dedication to quality would empower researchers, data scientists, and professionals to draw meaningful insights from their textual data.",
      id: 4,
    },
    {
      paragraph:
        "3. Empowering Research\n\nThe interdisciplinary team understood the profound implications of emotions on society, inspiring a new era of social research. Social scientists could now analyse sentiments across domains, enabling them to comprehend social phenomena at a deeper level and inspire positive transformations.",
      id: 5,
    },
    {
      paragraph:
        "4. Simplicity and Accessibility\n\nRecognising the importance of democratising knowledge, the team developed a Python package that simplified access to processed and clean sentiment dictionaries. With just a single line of code, `sentibank.load_dict`, users of all backgrounds could tap into the invaluable resources of SentiBank, fostering a community of knowledge-sharing and discovery.",
      id: 6,
    },
    {
      heading:
        "Unifying global sentiment knowledge into an accessible open data hub, how can SentiBank potentially help you? ",
      paragraph:
        "1. Elevate Your Analysis\n\nWhether you are a data scientist, psychologist, or economist,  sentibank equips you with a powerful arsenal of sentiment lexicons. Unravel the emotional core of your data and elevate your research to unparalleled heights.",
      id: 7,
    },
    {
      paragraph:
        "2. Informed Decision-making\n\nFor policymakers, politicians, and economists, sentibank offers unique insights into public sentiments, allowing them to shape policies that resonate with the masses and promote social well-being.",
      id: 8,
    },
    {
      paragraph:
        "3. Redesigning AI Applications\n\nFor AI developers and engineers, sentibank marks a pivotal turning point. Seamlessly integrate sentiment analysis into your applications to create AI systems that empathise with users and forge deeper connections.",
      id: 9,
    },
    {
      paragraph:
        "4. Strengthen Customer Bonds\n\nFor businesses and marketers, sentibank unravels the emotions behind customer preferences. Tailor products and campaigns to evoke powerful emotional connections, fostering lasting connections.",
      id: 10,
    },
    {
      paragraph:
        "With SentiBank's unified platform, researchers can access a vast array of sentiment lexicons from diverse domains, allowing for cross-disciplinary analysis and novel research opportunities. Data scientists will no longer have to navigate disparate sources, streamlining their workflows and accelerating sentiment-based AI model development. Policymakers and economists can tap into a wealth of sentiment data, gaining deeper insights into public perceptions and sentiment-driven trends.\n\nThis streamlined approach not only reduces the hassle of locating and validating individual lexicons but also expands the use cases of these invaluable legacy resources. sentibank's centralised hub empowers users to combine and compare lexicons, facilitating more comprehensive sentiment analysis. Moreover, it opens up opportunities for data integration and correlation across domains, enriching the depth and accuracy of research findings.\n\nBy building sentibank as the ultimate destination for sentiment lexicon dictionaries, we foster collaboration, accelerate innovation, and elevate the standards of sentiment analysis. Our mission is to empower every user, whether an academic researcher, a data-driven entrepreneur, or a social change advocate, to harness the power of emotions and unlock the full potential of their data. With sentibank, we pave the way for a new era of sentiment analysis and usher in a future where emotions and data unite seamlessly, transforming the way we perceive and interact with the world.",
      id: 11,
    },
    {
      synopsis: "Author",
      paragraph: "Nick Oh",
      id: 12,
    },
    {
      synopsis: "References",
      paragraph: "Nick Oh",
      id: 13,
    },
  ]);

  const [articleCards] = useState([
    {
      image: Organised10x10Pattern,
      bgColour: "#51DA4C",
      heading: "VADER",
      paragraph:
        "VADER is a rule-based sentiment analysis algorithm, particularly aimed at social media texts, that uses a sentiment polarity and intensity (valence) sensitive lexicon dictionary.",
      id: 1,
    },
    {
      padding: "0px",
      image: Beach,
      heading: "MASTER",
      paragraph:
        "While a sentiment dictionary designed to be applied in the general domain may be useful, a finance-specific dictionary called MASTER  was created to address the constraints of generality. ",
      alt: "An aerial shot of people on a beach and in the sea",
      id: 2,
    },
    {
      image: Random7x7Pattern02,
      bgColour: "#193718",
      heading: "AFINN",
      paragraph: "",
      id: 3,
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
      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 6
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
          (publicationDetail) => publicationDetail.id === 7
        )}
      />
      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 8
        )}
      />
      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 9
        )}
      />
      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 10
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
          (publicationDetail) => publicationDetail.id === 11
        )}
      />

      <Container>
        <SmallContainer>
          <MyImage
            src={PostItNotes}
            alt="A person's hand pointing towards Post-it notes stuck to a whiteboard"
          ></MyImage>
        </SmallContainer>
      </Container>

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 12
        )}
      />

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 13
        )}
      />

      <ParentContainer>
        <Title>Explore our resources for social scientists</Title>
      </ParentContainer>
      <ArticleCard articleCards={articleCards} />
    </>
  );
};

export default CompliSent;

export const CoverContainer = styled.div`
  padding-top: 36px;

  @media (max-width: 768px) {
    padding-top: 48px;
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

export const SmallContainer = styled(ImageContainer)`
  aspect-ratio: 1/1;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled(CentreContainer)`
  margin: 0px 20px 0px 20px;
`;

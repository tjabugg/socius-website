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
import Lecturer from "../../assets/images/lecturer.jpg";
import Smiling from "../../assets/images/smiling.jpg";

import { Helmet } from "react-helmet";

import styled from "styled-components";
import {
  CentreContainer,
  Title,
  ImageContainer,
  MyImage,
  ParentContainer,
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

  const [publicationDetails] = useState([
    {
      link: "GitHub",
      date: "May 31, 2023",
      id: 1,
    },
    {
      synopsis:
        "SentiBank is an open database project that embraces emotions as the heart of textual data. The journey began with a realisation of the profound impact emotions have on every aspect of human life.",
      id: 2,
    },
    {
      paragraph:
        "Sentiments are at the core of human decision-making and understanding: Influence social dynamics, transform political landscape and even drive economic fluctuations.\n\nYet, the vast potential of sentiment lexicons remained largely untapped in the realm of data science. This realisation fuelled the creation of SentiBank - to become the ultimate repository of sentiment lexicon dictionaries, meticulously curated and verified by experts, unlocking the hidden emotions within textual data like never before.",
      id: 3,
    },
    {
      heading: "Why did we start this project? ",
      paragraph:
        "Scattered Landscape\n\nVarious lexicons exist independently across multiple sources and platforms. This fragmented distribution poses a significant challenge for researchers, data scientists, and professionals who seek to leverage sentiment analysis effectively. By establishing SentiBank as a central hub for (potentially all) existing sentiment lexicon dictionaries, we enhance the accessibility and usability of these legacy resources.",
      id: 4,
    },
    {
      paragraph:
        "Championing Quality\n\nIn the vast sea of data, the team recognised the need for trusted and verified sentiment lexicons. SentiBank is a comprehensive collection of sentiment lexicons, carefully curated and quality-checked by our team of experts. This dedication to quality would empower researchers, data scientists, and professionals to draw meaningful insights from their textual data.",
      id: 5,
    },
    {
      paragraph:
        "Empowering Research\n\nThe interdisciplinary team understood the profound implications of emotions on society, inspiring a new era of social research. Social scientists could now analyse sentiments across domains, enabling them to comprehend social phenomena at a deeper level and inspire positive transformations.",
      id: 6,
    },
    {
      paragraph:
        "Simplicity and Accessibility\n\nRecognising the importance of democratising knowledge, the team developed a Python package that simplified access to processed and clean sentiment dictionaries. With just a single line of code, `sentibank.load_dict`, users of all backgrounds could tap into the invaluable resources of SentiBank, fostering a community of knowledge-sharing and discovery.",
      id: 7,
    },
    {
      heading: "Frictionless import statements ",
      paragraph:
        "SentiBank can be installed directly from [PyPI](https://pypi.org/) using the pip command.",
      id: 8,
    },
    {
      code: "```\n\npip install sentibank \n\n```",
      id: 9,
    },
    {
      paragraph:
        "Once downloaded, the sentibank.archive module provides access to our curated collection of sentiment dictionaries. For example, if you would like to import a VADER dictionary, you can load as below.",
      id: 10,
    },
    {
      code: "```\n\nfrom sentibank import archive \n\nload = archive.load( ) \nvader = load.dict(“VADER_v2014”) \n\n```",
      id: 11,
    },
    {
      heading: "How can SentiBank potentially help you?",
      paragraph:
        "Elevate Your Analysis\n\nWhether you are a data scientist, psychologist, or economist,  SentiBank equips you with a powerful arsenal of sentiment lexicons. Unravel the emotional core of your data and elevate your research to unparalleled heights.",
      id: 12,
    },
    {
      paragraph:
        "Informed Decision-making\n\nFor policymakers, politicians, and economists, SentiBank offers unique insights into public sentiments, allowing them to shape policies that resonate with the masses and promote social well-being.",
      id: 13,
    },
    {
      paragraph:
        "Redesigning AI Applications\n\nFor AI developers and engineers, SentiBank marks a pivotal turning point. Seamlessly integrate sentiment analysis into your applications to create AI systems that empathise with users and forge deeper connections.",
      id: 14,
    },
    {
      paragraph:
        "Strengthen Customer Bonds\n\nFor businesses and marketers, SentiBank unravels the emotions behind customer preferences. Tailor products and campaigns to evoke powerful emotional connections, fostering lasting connections.",
      id: 15,
    },
    {
      paragraph:
        "With SentiBank's unified platform, researchers can access a vast array of sentiment lexicons from diverse domains, allowing for cross-disciplinary analysis and novel research opportunities. Data scientists will no longer have to navigate disparate sources, streamlining their workflows and accelerating sentiment-based research. Policymakers and economists can tap into a wealth of sentiment data, gaining deeper insights into public perceptions and sentiment-driven trends.\n\nThis streamlined approach not only reduces the hassle of locating and validating individual lexicons but also expands the use cases of these invaluable legacy resources. SentiBank's centralised hub empowers users to combine and compare lexicons, facilitating more comprehensive sentiment analysis. Moreover, it opens up opportunities for data integration and correlation across domains, enriching the depth and accuracy of research findings.\n\nBy building SentiBank as the ultimate destination for sentiment lexicon dictionaries, we foster collaboration, accelerate innovation, and elevate the standards of sentiment analysis. Our mission is to empower every user, whether an academic researcher, a data-driven entrepreneur, or a social change advocate, to harness the power of emotions and unlock the full potential of their data.",
      id: 16,
    },
    {
      heading: "Leverage SentiBank with Sentium ",
      paragraph:
        "Open collaboration with the community is at the core of our vision. We firmly believe that the power of collective intelligence can drive transformative progress in sentiment analysis. We value the insights and expertise of the wider community, and we actively encourage contributions from researchers, scholars, and practitioners alike.\n\nWe invite users to actively participate in shaping the future of SentiBank by suggesting additions and requesting new sentiment lexicons. Your input is invaluable in ensuring that SentiBank remains comprehensive and up-to-date, reflecting the ever-evolving landscape of sentiments across diverse domains.\n\nMoreover, we welcome the opportunity to collaborate with passionate individuals and teams to create entirely new sets of sentiment dictionaries. Whether you're an expert in a specific field, a data enthusiast, or simply someone with a passion for emotions and data, there's a place for you at SentiBank.\n\nTogether, we can co-create a hub that transcends disciplinary boundaries, and enriches sentiment analysis. With a shared commitment to advancing knowledge and understanding emotions, we aim to foster an inclusive and vibrant ecosystem where emotions and intelligence converge seamlessly.",
      id: 17,
    },
    {
      synopsis: "Author",
      paragraph: "Nick Oh",
      id: 18,
    },
  ]);

  const [articleCards] = useState([
    {
      image: Organised10x10Pattern,
      bgColour: "#51DA4C",
      heading: "AFINN",
      paragraph:
        "General purpose lexicon with sentiment ratings for common emotion words.",
      id: 1,
    },
    {
      padding: "0px",
      image: Beach,
      heading: "Aigents+",
      paragraph:
        "Lexicon optimised for social media posts related to cryptocurrencies.",
      alt: "An aerial shot of people on a beach and in the sea",
      id: 2,
    },
    {
      image: Random7x7Pattern02,
      bgColour: "#193718",
      heading: "General Inquirer",
      paragraph:
        "Lexicon capturing broad psycholinguistic dimensions across semantics, values and motivations.",
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
          (publicationDetail) => publicationDetail.id === 7
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
      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 11
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
          (publicationDetail) => publicationDetail.id === 12
        )}
      />

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 13
        )}
      />
      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 14
        )}
      />

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 15
        )}
      />

      <Container>
        <SmallContainer>
          <MyImage
            src={Smiling}
            alt="A person's hand pointing towards Post-it notes stuck to a whiteboard"
          ></MyImage>
        </SmallContainer>
      </Container>

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 16
        )}
      />

      <Container>
        <MediumContainer>
          <MyImage
            src={Lecturer}
            alt="A university lectuer stood with a laptop presenting"
          ></MyImage>
        </MediumContainer>
      </Container>

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 17
        )}
      />

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 18
        )}
      />

      <TitleContainer>
        <Title>Explore our documentation for SentiBank</Title>
      </TitleContainer>
      <ArticleCard articleCards={articleCards} />
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
  margin: 20px;
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

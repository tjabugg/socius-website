import { useState } from "react";
import React from "react";
import PublicationCover from "../../components/PublicationCover";
import Desert from "../../assets/images/desert.jpg";
import Quest from "../../assets/images/quest.jpg";
import PublicationCoverPattern from "../../assets/svgs/organised/organised_sentium_pattern.svg";
import PublicationDetails from "../../components/PublicationDetails";
import ArticleCard from "../../components/ArticleCard";
import Random7x7Pattern01 from "../../assets/svgs/random/random_7x7_pattern_01.svg";
import Organised15x15Pattern from "../../assets/svgs/organised/organised_15x15_pattern.svg";
import Moma from "../../assets/images/moma.jpg";
import Aristocrats from "../../assets/images/aristocrats.jpg";
import Carousel from "../../components/Carousel";
import CopyBlock from "../../components/CopyBlock";
import DiagramOne from "../../assets/videos/Diagram_1.mp4";
import DiagramTwo from "../../assets/videos/Diagram_2.mp4";
import DiagramThree from "../../assets/videos/Diagram_3.mp4";
import DiagramFour from "../../assets/videos/Diagram_4.mp4";
import DiagramFive from "../../assets/videos/Diagram_5.mp4";
import { Helmet } from "react-helmet";
import GitHub from "../../assets/images/github.svg";
import FooterCard from "../../components/FooterCard";

import styled from "styled-components";
import {
  // CentreContainer,
  Title,
  ImageContainer,
  MyImage,
  ParentContainer,
  Link,
} from "../../styles";

const CompliSent = () => {
  const [publicationCovers] = useState([
    {
      date: "August 2023",
      heading: "Sentium: Accuracy Engineered for Understanding",
      paragraph:
        "Fusing AI linguistics with configurable logic for interpretable sentiment analysis",
      id: 1,
      bgColour: "#193718",
      graphic: PublicationCoverPattern,
    },
  ]);

  const [showLineNumbers] = useState([
    {
      code: `# 1. Installation

      pip install sentium
      
      # 2. Import modules
      
      from sentium.heuristic.modules import tag, parse, evaluate
      from sentium.engine import Pipeline
      
      # 3. Set configurations
      
      module_config = {
          "tag": {
              "neural": "spaCy"
              },
          "parse": {
              "neural": "roBERTa_OntoNotes_v5",
              "logic": "PoriaEtAl_2000",
              "entity": None,
              },
          "evaluate": {
              "dictionary": "VADER_v2014",
              "logic": "HuttoGilbert_2014"
              }
      }
      
      # 4. Initialise model
      
      model = Pipeline(genre="formal", domain="finance")
      
      tag, parse, evaluate = tag(module_config["tag"]), parse(module_config["parse"]), evaluate(module_config["evaluate"])
      
      model = model.add(tag.pos)
      model = model.add(parse.aspect)
      model = model.add(evaluate.sentiment)
      
      # 5. Analyse data
      
      sentences = [...] # list of strings  
      result = model.analyze(sentences)
      `,
    },
  ]);

  const [publicationDetails] = useState([
    {
      icon: GitHub,
      date: "May 31, 2023",
      synopsis:
        "So far, it is very much a case where researchers are encouraged to back a horse with their selection between accuracy and interpretability when analysing a sentiment. But could we harness both accuracy and interpretability?",
      id: 1,
    },
    {
      paragraph:
        "Here are two factories.\n\nOne automated end-to-end for near flawless output. But when rare failures did occur, diagnosing causes was impossible. Engineer queries met opaque complexity, with machines communicating in lingo only they understood. The best they could do was identify the faulty component, not underlying reasons.\n\nThe other leveraged accumulated human craftsmanship. Even with more frequent imperfections, transparent communication and structured knowledge enabled easy diagnosis of root causes when failures occurred. Each failure became an opportunity for continuous improvement.",
      id: 2,
    },
    {
      paragraph: [
        <p>
          So far, the industry slavishly worshipped the first factory. Chasing
          every .01% accuracy gain while blinded by metrics without
          purpose,&nbsp;
          <InlineLink href="https://aiindex.stanford.edu/report/">
            the year-on-year improvement on many benchmarks continued to be
            marginal.{" "}
          </InlineLink>
          This tale repeats itself everywhere AI promises *magic*. From
          predicting customer churn to personalising healthcare, and from
          targeted advertising to autonomous vehicles. AI seduces with accuracy,
          then disappoints us when it fails without telling us *why*.
        </p>,
      ],
      id: 3,
    },
    {
      synopsis: "How it works",
      paragraph:
        "Sentium opens the black box, ensuring accountable and informed deployment for sentiment analysis applications. Models with transparent rules and domain-specific lexicons are more likely to gain trust from users and stakeholders, enhancing their credibility and acceptance in various domains. Its customised modular components blend generalisability with domain-tuning and lexicon expansion for unmatched behavioural insights.",
      id: 4,
    },
    {
      synopsis: "Accuracy you can trust",
      paragraph: [
        <p>
          Over and above accuracy, the model addresses many of the challengess{" "}
          <sup>1</sup> . that hindered application of opaque neural models for
          social science research. Whether analysing financial reports, social
          media, or patient feedback, Sentium delivers nuanced actionable
          insights beyond surface-level polarity.
        </p>,
      ],
      caption:
        "1. Trust and Accountability Deficits: Over-reliance on opaque model outputs without human validation creates trust, accountability, and responsible use concerns. In policy research requiring evidence-based explanations, opaque models cannot provide rigorous reasoning behind results, raising ethical, legal, and societal challenges around potential harms.",
      id: 5,
    },
    {
      synopsis: "Bring Sentium in your research",
      paragraph:
        "Implementing Sentium is intuitive enough for anyone to apply. You can download and run the model in 5 simple steps:",
      id: 6,
    },
    {
      paragraph: [
        <p>
          Delve into our comprehensive&nbsp;
          <InlineLink href="https://aiindex.stanford.edu/report/">
            documentation
          </InlineLink>{" "}
          to understand the modular rules, language syntax, and domain semantics
          that power Sentium.
        </p>,
      ],
      id: 7,
    },
    {
      synopsis: "Author",
      paragraph: "Nick Oh",
      id: 8,
    },
    {
      synopsis: "References",
      paragraph:
        "1. Trust and Accountability Deficits: Over-reliance on opaque model outputs without human validation creates trust, accountability, and responsible use concerns. In policy research requiring evidence-based explanations, opaque models cannot provide rigorous reasoning behind results, raising ethical, legal, and societal challenges around potential harms.",
      id: 9,
    },
  ]);

  const [footerCards] = useState([
    {
      bgColour: "#00002E",
      image: Quest,
      heading: "Take Sentium further with sentibank",
      paragraph:
        "Tailor sentiment analysis to your needs with SentiBank, the largest public repository of sentiment dictionaries.",
      id: 7,
      button: "Browse SentiBank",
      link: "sentibank",
      textColour: "white",
    },
  ]);

  const [sentiumCards] = useState([
    {
      image: Random7x7Pattern01,
      bgColour: "#3C46FF",
      heading: "tag.pos",
      paragraph:
        "Parts-of-speech tagging to analyse input text’s grammatical and syntactic structure",
      id: 1,
    },
    {
      padding: "0px",
      image: Moma,
      heading: "parse.aspect",
      paragraph:
        "Extracts dependency relationships between aspects and their associated predicates",
      alt: "An aerial photograph of people sat on a bench in the MOMA.",
      id: 2,
    },
    {
      image: Organised15x15Pattern,
      bgColour: "#00002E",
      heading: "evaluate.senti",
      paragraph:
        "Refine sentiment score by applying predefined heuristics and sentiment dictionaries",
      id: 3,
    },
  ]);

  // Should probably loop through all the objects in the array
  const images = [
    {
      src: DiagramOne,
    },
    {
      src: DiagramTwo,
    },
    {
      src: DiagramThree,
    },
    {
      src: DiagramFour,
    },
    {
      src: DiagramFive,
    },
  ];

  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>
          CompliSent: Accuracy engineered for understanding | socius
        </title>
        <meta
          name="title"
          content="CompliSent: Accuracy engineered for understanding | socius"
        />
        <meta
          name="description"
          content="A fusion of AI prediction and human interpretability for sentiment analysis by blending computational linguistics with adjustable rules."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://socius-ai.netlify.app/" /> */}
        <meta
          property="og:title"
          content="CompliSent: Accuracy engineered for understanding | socius"
        />
        <meta
          property="og:description"
          content="A fusion of AI prediction and human interpretability for sentiment analysis by blending computational linguistics with adjustable rules."
        />
        <meta property="og:image" content={Desert} />
      </Helmet>

      <CoverContainer>
        <PublicationCover publicationCovers={publicationCovers} />
      </CoverContainer>

      {/* <Container> */}
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
        <LargeContainer>
          <MyImage
            src={Aristocrats}
            alt="A painting of aristorratic figures during a period century."
          ></MyImage>
        </LargeContainer>
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

      <Carousel images={images}></Carousel>

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

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 9
        )}
      />

      <TitleContainer>
        <Title>Explore our documentation for Sentium</Title>
      </TitleContainer>
      <ArticleCard articleCards={sentiumCards} />

      <FooterCard footerCards={footerCards} />
    </>
  );
};

export default CompliSent;

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
  margin: auto auto;

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

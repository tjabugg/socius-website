import { useState } from "react";
import React from "react";
import PublicationCover from "../../components/PublicationCover";
import Farms from "../../assets/images/farms.jpg";
import PublicationCoverPattern from "../../assets/svgs/random/random_cover_pattern.svg";
import PublicationDetails from "../../components/PublicationDetails";
import ArticleCard from "../../components/ArticleCard";
import Random7x7Pattern01 from "../../assets/svgs/random/random_7x7_pattern_01.svg";
import Organised15x15Pattern from "../../assets/svgs/organised/organised_15x15_pattern.svg";
import Moma from "../../assets/images/moma.jpg";
import NewYork from "../../assets/images/new_york.jpg";
import Desert from "../../assets/images/desert.jpg";
import Laughing from "../../assets/images/laughing.jpg";
import Aristocrats from "../../assets/images/aristocrats.jpg";
import Carousel from "../../components/Carousel";
import DiagramOne from "../../assets/videos/Diagram_1.mp4";
import DiagramTwo from "../../assets/videos/Diagram_2.mp4";
import DiagramThree from "../../assets/videos/Diagram_3.mp4";
import DiagramFour from "../../assets/videos/Diagram_4.mp4";
import DiagramFive from "../../assets/videos/Diagram_5.mp4";
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
      heading: "Sentium: Accuracy Engineered for Understanding",
      paragraph:
        "Fusing AI linguistics with configurable logic for interpretable sentiment analysis",
      id: 1,
      bgImage: Farms,
      graphic: PublicationCoverPattern,
    },
  ]);

  const [publicationDetails] = useState([
    {
      date: "May 31, 2023",
      synopsis:
        "So far, it is very much a case where researchers are encouraged to back a horse with their selection between accuracy and interpretability when analysing a sentiment. But could we harness both accuracy and interpretability?",
      id: 1,
    },
    {
      paragraph:
        "Think of two automobile factories: Given a set of components, one factory (recently founded, equipped with advanced features) is able to deliver with 99% success rate. However, by a 1% chance, we may end up receiving a faulty car. You approach the human supervisor of that company and ask for an after service, trying to figure out what caused such a fault. But there’s a big problem. Not only that the system is so complex, the manufacturers are machines. Between manufacturing machines, they communicate in their own language, and the human supervisor cannot simply comprehend. At best, the human supervisor can identify the specific component responsible for the error, but the underlying reasons remain a black box. All the supervisor can only observe is the inputs (components) and the output (a faulty car.\n\nIn contrast, the second factory (with legacy and history) delivers you with a 90% success rate. While the fault rate is slightly higher, the ability to trace and understand the source of faults is enhanced. In this factory, the manufacturers are highly-skilled individuals (the “Meisters”) who follow a structured manual (historical accumulation of knowledge from the past “Meisters”), contributing to a transparent and interpretable assembly line. The human supervisor possesses a clear understanding of the manufacturing process, enabling them to easily identify the causes of faults. The communication between workers is accessible to the supervisor, empowering them to pinpoint the specific component or step that led to the error. While the overall success rate is lower, the system's interpretability facilitates troubleshooting and continuous improvement.\n\nThe black-box nature makes it challenging to diagnose and address model limitations (internal validity), adapt models to new data (external validity), avoid biassed results, and build appropriate trust in predictions -  Which is often critical considerations for social science research.",
      id: 2,
    },
    {
      synopsis: "Diagram",
      id: 3,
    },

    {
      synopsis: "Real World Applications",
      paragraph:
        "Sentiments play a pivotal role in shaping the social sciences, influencing various aspects of human society and behaviour.\n\nSentiments are at the heart of human interactions and behaviours, driving changes in society, politics, and the economy. However, unlocking their potential through sentiment analysis in the social sciences has only recently begun to reveal the profound impact sentiments have on these diverse fields.",
      id: 4,
    },
    {
      synopsis: [
        <p>
          Sentiment analysis is unlocking new behavioural insights across social
          science disciplines - the applications are vast across domains{" "}
          <sup> 1 2 3 4 </sup> . By mining emotions in text, researchers gain
          unprecedented understanding of attitudes, opinions, and human
          behaviour.{" "}
        </p>,
      ],
      id: 5,
    },
    {
      synopsis: "Problems",
      paragraph:
        "Interpretability and Understanding:\n\nLack of Interpretability: Lack of model interpretability makes it difficult to understand failures or know if the model is using meaningful emotional reasoning rather than exploiting spurious cues.\n\nChallenges in Model Improvement: Difficult to improve or adapt models when they underperform or face domain shift issues from training data, since inner workings are opaque.\n\nBiases and Uncertainties:\n\nBiases and Data Representation: Models may introduce or exacerbate biases if trained on non-representative data, with no transparency to detect issues.\n\nUncertainty and Confidence: Hard to ascertain whether subtle sentiment shifts reflect actual changes in population attitudes or are erroneous model artefacts. Difficult to qualify level of confidence or uncertainty when using model predictions for forecasting or decision-making.\n\nDeployment and Acceptance:\n\nRegulatory and Ethical Challenges: Regulatory requirements for interpretability and auditability may preclude deployment in some sensitive applications. Lack of perceived integrity if models are not intuitive and results conflict with human judgement.\n\nValidation and Human Involvement:\n\nOver-reliance on Models: Can lead to overreliance on model outputs without enough human validation of results.",
      id: 6,
    },
    {
      synopsis: "Solution",
      paragraph:
        "Transparency and Error Analysis:\n\nTransparency through Rules and Lexicons: The compositional rules and lexicon integrations provide transparency into how predictions are made, supporting error analysis. Sentiment analysis models with interpretable rules and domain-specific lexicons allow researchers to understand the rationale behind predictions, making it easier to identify and rectify errors.\n\nValidation and Adaptability: Researchers can refine compositional heuristics, expand lexicons, and tailor rules as needed for new domains to adapt the model. Sentiment shifts can be better validated by examining which terms and rules are triggering changes, enabling continuous improvement and adaptation.\n\nBias Prevention and Balanced Data: Dictionaries crafted to avoid biases and balanced corpora prevent skewed results. Interpretable rule-based models can incorporate bias-mitigation strategies more effectively, as researchers can explicitly define rules to address potential biases.\n\nConfidence Calibration and Validation: Model confidence can be calibrated based on factors like term coverage and matched heuristic types. Explicit logic rules make it easier for humans to scrutinise and validate predictions, ensuring that the model's confidence aligns with the accuracy of its assessments.\n\nSelective Deployment and Credibility:\n\nSelective Deployment and Adoption: Interpretability enables selective deployment only where inferences are sufficiently explainable. Researchers and practitioners can choose to use rule-based models in applications where transparency and interpretability are crucial, ensuring responsible and informed deployment.\n\nEnhanced Credibility and Trust: Intuitive rules and dictionaries lend credibility over black boxes, increasing adoption. Models with transparent rules and domain-specific lexicons are more likely to gain trust from users and stakeholders, enhancing their credibility and acceptance in various domains.",
      id: 7,
    },
    {
      synopsis:
        "Sentium transforms sentiment analysis with transparent rules and tailored lexicons. Modular components enable domain customisation and evolution. Intuitive compositional heuristics deliver unprecedented explanatory power. With Sentium, social researchers finally gain a sophisticated yet accessible solution for unlocking text's emotional essence.",
      id: 8,
    },
    {
      paragraph:
        "By addressing the challenges posed by black-box sentiment models with interpretable, rule-based approaches and domain-specific lexicons, researchers can enhance transparency, adaptability, bias mitigation, and overall confidence in sentiment analysis applications within the social sciences.\n\nOverall, the model transparency, adaptability, bias mitigation, calibrated uncertainties, and trustworthiness may address many of the challenges that could hinder application of opaque neural models for social science research. While rule-based models have trade-offs like development effort, their strengths warrant greater exploration for domains valuing interpretability.\n\nSentium - Linguistic Rules and Tailored Lexicons United:\n\nSentium fuses expert knowledge into intuitive heuristics. It composes sentiment with modular rules leveraging syntax and domain semantics. inspect the triggered terms, modifiers, and principles behind each prediction. Powerful, yet simple to understand.\n\nTransparent and Trustworthy When It Matters Most:\n\nSentium opens the black box, engendering trust. Easily validated, avoiding opaque model pitfalls. Confidence calibration guides appropriate usage for high-stakes applications.\n\nCustomised Insights into Attitudes, Opinions, and Emotions:\n\nModular components allow painless domain-tuning and lexicon expansion, blending generalisability with custom-fit analysis. Sentium empowers unprecedented behavioural insights.\n\nReliable Sentiment Analysis You Can Depend On:\n\nWhether analysing financial reports, social media, or patient feedback, Sentium delivers actionable nuance beyond surface-level polarity. Intuitive enough for anyone to apply. Accurate enough to trust. Let Sentium unlock sentiment's potential for you today.",
      id: 9,
    },
    {
      heading: "Author",
      paragraph: "Nick Oh",
      id: 10,
    },
    {
      synopsis: "References",
      paragraph:
        "1. Economics: Sentiment analysis in economics allows us to delve into the world of consumer confidence, investor sentiment, and market trends. By mining sentiments from surveys, social media, and news articles, we gain insights into consumer attitudes, predict financial market movements, and gauge public demand for new products.\n\n2. Politics: In the realm of politics, sentiment analysis helps monitor public opinions on political candidates and policy issues through social media sentiments and news media analysis. It also unveils persuasive framing techniques through sentiment comparisons in political speeches.\n\n4. Sociology: In sociology, sentiment analysis aids in evaluating evolving social attitudes on topics like inequality and diversity. It deepens our understanding of activism and social movements by tracking emotions and engagement on relevant issues. Further, it sheds light on societal polarisation by comparing sentiments between different groups on social media\n\n4. Psychology: In psychology, sentiment analysis plays a crucial role in assessing mental health conditions by detecting emotion patterns and severity in texts. It facilitates the analysis of emotional intelligence and supports therapy by modelling sentiments in patient conversations.",
      id: 11,
    },
  ]);

  const [articleCards] = useState([
    {
      image: Random7x7Pattern01,
      bgColour: "#3C46FF",
      heading: "tag_pos",
      paragraph: "Tags parts-of-speech to analyse grammar and syntax.",
      id: 1,
    },
    {
      padding: "0px",
      image: Moma,
      heading: "parse_aspect",
      paragraph:
        "Extracts dependency relationships between aspects and their predicates. ",
      alt: "An aerial photograph of people sat on a bench in the MOMA.",
      id: 2,
    },
    {
      image: Organised15x15Pattern,
      bgColour: "#00002E",
      heading: "lex_dict",
      paragraph: "Compares predicates to sentiment lexicons for matches. ",
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
        <meta property="og:image" content={Farms} />
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

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 3
        )}
      />

      <Carousel images={images}></Carousel>

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
            src={Aristocrats}
            alt="A painting of aristorratic figures during a period century."
          ></MyImage>
        </LargeContainer>
      </Container>

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 6
        )}
      />

      <Container>
        <SmallContainer>
          <MyImage
            src={NewYork}
            alt="An array of skyscrapers in New York's midtown manhattan overlooking the greenery of Central Park"
          ></MyImage>
        </SmallContainer>
      </Container>

      <PublicationDetails
        publicationDetails={publicationDetails.filter(
          (publicationDetail) => publicationDetail.id === 7
        )}
      />

      <Container>
        <LargeContainer>
          <MyImage
            src={Laughing}
            alt="3 employees sat around a laptop on a desk laughing"
          ></MyImage>
        </LargeContainer>
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

      <Container>
        <SmallContainer>
          <MyImage
            src={Desert}
            alt="An aerial photograph of a desert"
          ></MyImage>
        </SmallContainer>
      </Container>

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

      <TitleContainer>
        <Title>Explore our documentation for Sentium</Title>
      </TitleContainer>
      <ArticleCard articleCards={articleCards} />
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
  justify-content: center;
  align-content: center;

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
`;

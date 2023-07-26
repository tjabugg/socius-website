import { useState } from "react";
import React from "react";
import PublicationCover from "../../components/PublicationCover";
import Farms from "../../assets/images/farms.jpg";
import PublicationCoverPattern from "../../assets/svgs/random/publication_cover_pattern.svg";
import PublicationDetails from "../../components/PublicationDetails";
import ArticleCard from "../../components/ArticleCard";
import Random7x7Pattern01 from "../../assets/svgs/random/random_7x7_pattern.svg";
import Organised15x15Pattern01 from "../../assets/svgs/organised/organised_15x15_pattern.svg";
import Beach from "../../assets/images/beach.jpg";
import Crowd from "../../assets/images/crowd.jpg";
import FrozenIce from "../../assets/images/frozen_ice.jpg";
import NewYork from "../../assets/images/new_york.jpg";

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
      heading: "CompliSent: a first step to compliance-proof",
      paragraph:
        "Aspect-based sentiment analysis model that analyses text-based data ranging from media and social media.",
      id: 1,
      bgImage: Farms,
      graphic: PublicationCoverPattern,
      padding: "24px",
      display: "none",
    },
  ]);

  const [publicationDetails] = useState([
    {
      date: "May 31, 2023",
      synopsis:
        "A concise, logical description of how CompliSent works. Focusing on the ‘Heuristic Engine’. Use the ‘lenses’ and ‘conveyor belt’ analogy. ",
      headingDisplay: "none",
      creditsDisplay: "none",
      id: 1,
    },
    {
      dateDisplay: "none",
      synopsisDispay: "none",
      headingDisplay: "none",
      paragraph:
        "So far, it is very much a case where researchers are encouraged to back a horse with their selection between accuracy and interpretability when analysing a sentiment. While sentiment analysis based on deep learning (i.e BERT/Bi-LSTM-CRF) is a black-box, the typical average accuracy is significantly greater than the rule based methods.\n \nThink of two automobile factories: Given a set of components, one factory (recently founded, equipped with advanced features) is able to deliver with 99% success rate. However, by a 1% chance, we may end up receiving a faulty car. You approach the human supervisor of that company and ask for an after service, trying to figure out what caused such a fault. But there’s a big problem. Not only that the system is so complex, the manufacturers are machines. Between manufacturing machines, they communicate in their own language, and the human supervisor cannot simply comprehend. At best, the human supervisor can identify the specific component responsible for the error, but the underlying reasons remain a black box. All the supervisor can only observe is the inputs (components) and the output (a faulty car). ",
      creditsDisplay: "none",
      id: 2,
    },
    {
      dateDisplay: "none",
      synopsisDispay: "none",
      headingDisplay: "none",
      paragraph:
        "In contrast, the second factory (with legacy and history) delivers you with a 90% success rate. While the fault rate is slightly higher, the ability to trace and understand the source of faults is enhanced. In this factory, the manufacturers are highly-skilled individuals (the “Meisters”) who follow a structured manual (historical accumulation of knowledge from the past “Meisters”), contributing to a transparent and interpretable assembly line. The human supervisor possesses a clear understanding of the manufacturing process, enabling them to easily identify the causes of faults. The communication between workers is accessible to the supervisor, empowering them to pinpoint the specific component or step that led to the error. While the overall success rate is lower, the system's interpretability facilitates troubleshooting and continuous improvement.",
      creditsDisplay: "none",
      id: 3,
    },
    {
      dateDisplay: "none",
      synopsisDispay: "none",
      headingDisplay: "none",
      paragraph:
        "The industry has been focusing on the first factory, devoting their attention to increasing the success rate (‘model accuracy’) by another 0.01%. The second factory has been partially overlooked, despite its solid foundation and its potential for continuous improvement.\n \nThe idea behind CompliSent started from a question, “What if the second factory can deliver a product with 99% success rate, by simply adding one machine in their assembly line?”. Especially if that machine is able to solve the major cause of the fault rate, which is the inability to handle a complex set of components. All that machine (AI) will do is “labelling” the components by breaking down the complex components into smaller parts, so that the human manufacturer is able to handle them with ease. While we are still unable to fully understand the mechanism behind that machine, at the same time, is it possible to build a logical system that can consider all existing grammatical rules of a language? Even if we come up with a complex logic that is capable of such, it will be unable to adapt, accommodate and generalise new linguistic patterns.\n \nThe motto of socius is to ‘bridge (artificial) intelligence to (human) knowledge’. And I believe CompliSent reflects that idea in a persuasive way.",
      creditsDisplay: "none",
      id: 4,
    },
    {
      dateDisplay: "none",
      synopsisDisplay: "none",
      headingDisplay: "none",
      paragraph: "Nick Oh",
      credits: "Authors",
      id: 5,
    },
    {
      dateDisplay: "none",
      synopsisDisplay: "none",
      headingDisplay: "none",
      paragraph:
        "Karl Cobbe \nHunter Lightman\nVineet Kosaraju\nYura Burda\nHarri Edwards\nJan Leike\nIlya Sutskever",
      credits: "References",
      id: 5,
    },
  ]);

  const [articleCards] = useState([
    {
      image: Random7x7Pattern01,
      bgColour: "#0000FF",
      heading: "Sentiment Analysis",
      paragraph:
        "Systematically identify and study affective states and subjective information.",
      id: 1,
    },
    {
      padding: "0px",
      image: Beach,
      heading: "Keyword Extraction",
      paragraph:
        "Identification of terms that best describe the subject of a document.",
      id: 2,
    },
    {
      image: Organised15x15Pattern01,
      bgColour: "#00002E",
      heading: "Emotion recognition",
      paragraph: "The process of identifying human emotion",
      id: 3,
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
      <CoverContainer>
        <PublicationCover publicationCovers={publicationCovers} />
      </CoverContainer>
      <Container>
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
        <MediumContainer>
          <MyImage
            src={Crowd}
            alt="A crowd of pedestrians walking the streets in China"
          ></MyImage>
        </MediumContainer>
        <PublicationDetails
          publicationDetails={publicationDetails.filter(
            (publicationDetail) => publicationDetail.id === 3
          )}
        />

        <LargeContainer>
          <MyImage
            src={FrozenIce}
            alt="A close up photograph of frozen ice melting on soil"
          ></MyImage>
        </LargeContainer>
        <PublicationDetails
          publicationDetails={publicationDetails.filter(
            (publicationDetail) => publicationDetail.id === 4
          )}
        />

        <SmallContainer>
          <MyImage
            src={NewYork}
            alt="An array of skyscrapers in New York's midtown manhattan overlooking the greenery of Central Park"
          ></MyImage>
        </SmallContainer>
      </Container>

      <ParentContainer>
        <PublicationDetails
          publicationDetails={publicationDetails.filter(
            (publicationDetail) => publicationDetail.id === 5
          )}
        />
      </ParentContainer>
      <ParentContainer>
        <Title>Explore our resources for social scientists</Title>
      </ParentContainer>
      <ArticleCard articleCards={articleCards} />
    </>
  );
};

export default CompliSent;

export const CoverContainer = styled.div`
  padding-top: 40px;
`;

export const MediumContainer = styled(ImageContainer)`
  aspect-ratio: 16/9;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    margin: 16px;
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
  margin: 16px;
  text-align: left;
`;

import { useState } from "react";
import React from "react";
import PublicationCover from "../../components/PublicationCover";
import Lecturer from "../../assets/images/lecturer.jpg";
import OrganisedPattern03 from "../../assets/patterns/organised_pattern_03.svg";
import ManHoldingWires from "../../assets/images/man_holding_wires.jpg";
import BWCrowd from "../../assets/images/b_w_crowd.jpg";
import MountainSideRoad from "../../assets/images/mountainside_road.jpg";
import CrowdInChina from "../../assets/images/crowd_in_china.jpg";
import StandingConversation from "../../assets/images/standing_conversation.jpg";
import PublicationDetails from "../../components/PublicationDetails";
import ArticleCard from "../../components/ArticleCard";

import styled from "styled-components";
import { CentreContainer, H3, MyImage, ParentContainer } from "../../styles";

const AlphaVader = () => {
  const [publicationCovers] = useState([
    {
      date: "November 2022",
      heading: "socsciBERT: a small language model",
      paragraph:
        "A small language model that classifies potential domains of social science given a description of phenomena.",
      id: 1,
      graphic: Lecturer,
      link: "/alphavader",
    },
  ]);

  const [publicationDetails] = useState([
    {
      date: "May 31, 2023",
      synopsis:
        "Aspect-based sentiment analysis model that analyzes text-based data ranging from media (i.e news) and social media (i.e reddit).",
      headingDisplay: "none",
      creditsDisplay: "none",
      id: 1,
    },
    {
      dateDisplay: "none",
      synopsisDispay: "none",
      heading: "Introduction",
      paragraph:
        "In recent years, large language models have greatly improved in their ability to perform complex multi-step reasoning. However, even state-of-the-art models still produce logical mistakes, often called hallucinations. Mitigating hallucinations is a critical step towards building aligned AGI. \n \nWe can train reward models to detect hallucinations using either outcome supervision, which provides feedback based on a final result, or process supervision, which provides feedback for each individual step in a chain-of-thought. Building on previous work1, we conduct a detailed comparison of these two methods using the MATH dataset2 as our testbed. We find that process supervision leads to significantly better performance, even when judged by outcomes. To encourage related research, we release our full dataset of process supervision.",
      creditsDisplay: "none",
      id: 1,
    },
    {
      dateDisplay: "none",
      synopsisDispay: "none",
      heading: "Alignment impact",
      paragraph:
        "Process supervision has several alignment advantages over outcome supervision. It directly rewards the model for following an aligned chain-of-thought, since each step in the process receives precise supervision. Process supervision is also more likely to produce interpretable reasoning, since it encourages the model to follow a human-approved process. In contrast, outcome supervision may reward an unaligned process, and it is generally harder to scrutinize. \n \nIn some cases, safer methods for AI systems can lead to reduced performance3, a cost which is known as an alignment tax. In general, any alignment tax may hinder the adoption of alignment methods, due to pressure to deploy the most capable model. Our results below show that process supervision in fact incurs a negative alignment tax, at least in the math domain. This could increase the adoption of process supervision, which we believe would have positive alignment side-effects.",
      creditsDisplay: "none",
      id: 1,
    },
    {
      dateDisplay: "none",
      synopsisDispay: "none",
      heading: "Solving Maths Problems",
      paragraph:
        "We evaluate our process-supervised and outcome-supervised reward models using problems from the MATH test set. We generate many solutions for each problem and then pick the solution ranked the highest by each reward model. The graph shows the percentage of chosen solutions that reach the correct final answer, as a function of the number of solutions considered. Not only does the process-supervised reward model perform better across the board, but the performance gap widens as we consider more solutions per problem. This shows us that the process-supervised reward model is much more reliable. \n \nWe showcase 10 problems and solutions below, along with commentary about the reward model’s strengths and weaknesses.",
      creditsDisplay: "none",
      id: 2,
    },
    {
      dateDisplay: "none",
      synopsisDispay: "none",
      headingDisplay: "none",
      paragraph:
        "It is unknown how broadly these results will generalize beyond the domain of math, and we consider it important for future work to explore the impact of process supervision in other domains. If these results generalize, we may find that process supervision gives us the best of both worlds – a method that is both more performant and more aligned than outcome supervision.",
      creditsDisplay: "none",
      id: 3,
    },
    {
      dateDisplay: "none",
      synopsisDisplay: "none",
      headingDisplay: "none",
      paragraph:
        "Karl Cobbe \nHunter Lightman\nVineet Kosaraju\nYura Burda\nHarri Edwards\nJan Leike\nIlya Sutskever",
      credits: "Authors",
      id: 4,
    },
    {
      dateDisplay: "none",
      synopsisDisplay: "none",
      headingDisplay: "none",
      paragraph:
        "Karl Cobbe \nHunter Lightman\nVineet Kosaraju\nYura Burda\nHarri Edwards\nJan Leike\nIlya Sutskever",
      credits: "References",
      id: 4,
    },
  ]);

  const [articleCards] = useState([
    {
      image: StandingConversation,
      padding: "0px",
      heading:
        "coNLP: a unified NLP framework of different open-source libraries",
      paragraph:
        "A small language model that classifies potential domains of socialscience given a description of phenomena.",
      id: 1,
      button: "Read more",
    },
    {
      bgColour: "#00002E",
      image: OrganisedPattern03,
      heading: "socsciBERT: a small language model",
      paragraph:
        "An AI model that “reasons” in a way that is similar to how economists and others explain why a current phenomenon looks like a past phenomena.",
      id: 2,
      button: "Read more",

    },
    {
      padding: "0px",
      image: CrowdInChina,
      heading: "This (phenomenon) looks like that (phenomena):",
      paragraph:
        "A unified NLP framework that “wraps” different open-source libraries",
      id: 2,
      button: "Read more",
    },
  ]);

  return (
    <>
      <CoverContainer>
        <PublicationCover publicationCovers={publicationCovers} />
      </CoverContainer>
      <Container>
        <PublicationDetails
          publicationDetails={publicationDetails.filter(
            (publicationDetail) => publicationDetail.id === 1
          )}
        />
        <MediumContainer>
          <MyImage src={ManHoldingWires}></MyImage>
        </MediumContainer>

        <PublicationDetails
          publicationDetails={publicationDetails.filter(
            (publicationDetail) => publicationDetail.id === 2
          )}
        />
        <LargeContainer>
          <MyImage src={BWCrowd}></MyImage>
        </LargeContainer>

        <PublicationDetails
          publicationDetails={publicationDetails.filter(
            (publicationDetail) => publicationDetail.id === 3
          )}
        />

        <SmallContainer>
          <MyImage src={MountainSideRoad}></MyImage>
        </SmallContainer>
      </Container>

      <ParentContainer>
        <PublicationDetails
          publicationDetails={publicationDetails.filter(
            (publicationDetail) => publicationDetail.id === 4
          )}
        />
      </ParentContainer>
      <ParentContainer>
        <H3>Related publications</H3>
      </ParentContainer>
      <ArticleCard articleCards={articleCards} />
    </>
  );
};

export default AlphaVader;

export const CoverContainer = styled.div`
  padding-top: 40px;

  @media (max-width: 768px) {
    /* padding-top: 0px; */
  }
`;

export const MediumContainer = styled.div`
  aspect-ratio: 16/9;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    margin: 16px;
  }
`;

export const LargeContainer = styled.div`
  aspect-ratio: 16/9;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SmallContainer = styled.div`
  aspect-ratio: 1/1;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled(CentreContainer)`
  margin: 16px;
`;

import React from "react";
import {
  CentreContainer,
  H1,
  Body,
  SecondaryButton,
  CentreText,
} from "../styles";
import styled from "styled-components";

const NotFound = () => (
  <Container>
    <meta
      name="description"
      content="Socius creates publicly available AI models and systems that are not only state-of-the-art in terms of technical capabilities, but also deeply rooted in the principles of social science. Our objective is to advance the frontiers of social science research through the development and application of AI technologies. The story of Socius starts from a simple question: could computational intelligence help social scientists to consider every possible causative relationships between their theory-of-interest?"
    />
    <title>Bridging Artificial Intelligence to Human Knowledge | socius</title>
    <TextContainer>
      <Title>404</Title>
      <Caption>This page could not be found</Caption>
      <SecondaryButton href="/">Country roads, take me home!</SecondaryButton>
    </TextContainer>
  </Container>
);

export default NotFound;

export const Container = styled(CentreContainer)`
  /* margin-top: 64px; */
  position: relative;
  background-color: #d9ffd8;
`;

export const TextContainer = styled(CentreText)`
  /* margin-top: 64px; */
  height: 90vh;
`;

export const Title = styled(H1)`
  margin: 0px;
  padding: 0px;
`;

export const Caption = styled(Body)`
  margin-bottom: 16px;
`;

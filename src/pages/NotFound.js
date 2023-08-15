import React from "react";
import {
  CentreContainer,
  Heading,
  Body,
  SecondaryButton,
  CentreText,
} from "../styles";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const NotFound = () => (
  <Container>
    <Helmet>
      <title>Open-source AI models for social scientists | socius</title>
      <meta
        name="description"
        content="We create open-source AI models for social scientists seeking to integrate the power of AI with the interpretability of traditional methods."
      />
    </Helmet>
    ;
    <TextContainer>
      <Title>404</Title>
      <Caption>This page could not be found</Caption>
      <SecondaryButton href="/">Country roads, take me home!</SecondaryButton>
    </TextContainer>
  </Container>
);

export default NotFound;

export const Container = styled(CentreContainer)`
  position: relative;
  background-color: #cbdcff;
`;

export const TextContainer = styled(CentreText)`
  gap: 0px;
  height: 90vh;
`;

export const Title = styled(Heading)`
  margin: 0px 0px 8px 0px;
  padding: 0px;
`;

export const Caption = styled(Body)`
  margin-bottom: 16px;
`;

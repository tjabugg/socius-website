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
  //   <ParentContainer>
  <Container>
    <TextContainer>
      <Title>404</Title>
      <Caption>This page could not be found</Caption>
      <SecondaryButton href="/">Country roads, take me home!</SecondaryButton>
    </TextContainer>
  </Container>
  //   </ParentContainer>
);

export default NotFound;

export const Container = styled(CentreContainer)`
  /* margin-top: 64px; */
  position: relative;
  background-color: #D9FFD8;
`;

export const TextContainer = styled(CentreText)`
  /* margin-top: 64px; */
  height: 100vh;
`;

export const Title = styled(H1)`
  margin: 0px;
  padding: 0px;
`;

export const Caption = styled(Body)`
  margin-bottom: 16px;
`;

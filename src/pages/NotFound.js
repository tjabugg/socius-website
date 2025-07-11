import React from "react";
import {
  CentreContainer,
  Heading,
  Body,
  CentreText,
} from "../styles";
import styled from "styled-components";
import StockExchange from "../assets/images/stock_exchange.jpg";
import { Helmet } from "react-helmet";

const NotFound = () => (
  <Container>
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>Open-source AI models for social scientists | socius</title>
      <meta
        name="title"
        content="Open-source AI models for social scientists | socius"
      />
      <meta
        name="description"
        content="We create open-source AI models for social scientists seeking to integrate the power of AI with the interpretability of traditional methods."
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="https://socius-ai.netlify.app/" /> */}
      <meta
        property="og:title"
        content="Open-source AI models for social scientists | socius"
      />
      <meta
        property="og:description"
        content="We create open-source AI models for social scientists seeking to integrate the power of AI with the interpretability of traditional methods."
      />
      <meta property="og:image" content={StockExchange} />
    </Helmet>
    ;
    <TextContainer>
      {/* <Title
        style={{
          color: "#cbdcff",
        }}
      >
        404
      </Title> */}
      <Caption
        style={{
          color: "#cbdcff",
        }}
      >
        We're currently renovating our website - check back in September!
      </Caption>
      {/* <SecondaryButton href="/">Country roads, take me home!</SecondaryButton> */}
    </TextContainer>
  </Container>
);

export default NotFound;

export const Container = styled(CentreContainer)`
  position: relative;
  background-color: #3c46ff;
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

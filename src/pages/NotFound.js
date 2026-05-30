import {
  CentreContainer,
  H1,
  Body,
  CentreText,
  SecondaryButton,
} from "../styles";
import styled from "styled-components";
import DataHero from "../assets/images/database_hero_graphic.jpg";
import Seo from "../components/Seo";

const NotFound = () => (
  <Container>
    <Seo
      title="Page not found | socius labs"
      description="The page you are looking for doesn't exist. Explore open-source AI models, datasets, and research for social scientists at socius labs."
      image={DataHero}
      path="/404"
      noindex
    />
    <TextContainer>
      <Title
        style={{
          color: "#cbdcff",
        }}
      >
        404
      </Title>
      <SecondaryButton href="/">Country roads, take me home!</SecondaryButton>
    </TextContainer>
  </Container>
);

export default NotFound;

export const Container = styled(CentreContainer)`
  position: relative;
  background-color: #3c46ff;
`;

export const TextContainer = styled(CentreText)`
  gap: 16px;
  height: 90vh;
`;

export const Title = styled(H1)`
  margin: 0px 0px 8px 0px;
  padding: 0px;
`;

export const Caption = styled(Body)`
  margin-bottom: 16px;
`;

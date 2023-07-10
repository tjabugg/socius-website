import React from "react";
import styled from "styled-components";
import {
  Logo,
  Link,
  Word,
  MyImage,
  GridContainer,
  Body,
  LogoContainer,
} from "../styles";
import FooterPattern from "../assets/svgs/random/random_footer_pattern.svg";

const Footer = () => (
  <ParentContainer>
    <Grid>
      <LogoContainer>
        <Logo title={`Socius logo`} />
        <Word title={`Socius word`} />
      </LogoContainer>

      <TextContainer>
        <LinkContainer>
          <Title>Socials</Title>
          <FooterLink href="/#">Instagram</FooterLink>
          <FooterLink href="/#">LinkedIn</FooterLink>
        </LinkContainer>

        <LinkContainer>
          <Title>Information</Title>
          <FooterLink href="/research">Research</FooterLink>
          <FooterLink href="/database">Database</FooterLink>
          <FooterLink href="/forsocialscientists">
            For Social Scientists
          </FooterLink>
        </LinkContainer>

        <LinkContainer>
          <Title href="/#">Design and Development</Title>
          <FooterLink
            href="https://www.instagram.com/appliedlogic.studio/"
            target="_blank"
          >
            Applied Logic
          </FooterLink>
          <FooterLink
            href="https://www.instagram.com/anthonyodu_/"
            target="_blank"
          >
            Anthony Odu
          </FooterLink>
        </LinkContainer>
      </TextContainer>
    </Grid>
    <PatternContainer>
      <MyImage alt={`Full bleed pattern`} src={FooterPattern} />
    </PatternContainer>{" "}
  </ParentContainer>
);

export default Footer;

export const PatternContainer = styled.div`
  bottom: 0vh;
  box-sizing: border-box;
  padding: 16px;
`;

export const Grid = styled(GridContainer)`
  margin: 16px 16px 80px 16px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const ParentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #cbdcff;
  flex-direction: column;
  border-radius: 20px 20px 0px 0px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 3;
  gap: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FooterLink = styled(Link)`
  color: black;
`;

export const Title = styled(Body)`
  font-weight: 600;
  font-size: 14px;
`;

export const SociusLogo = styled(Word)`
  @media (max-width: 768px) {
    display: block;
  }
`;

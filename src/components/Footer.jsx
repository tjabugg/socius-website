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
import DesktopFooter from "../assets/svgs/random/random_desktop_footer.svg";
import TabletFooter from "../assets/svgs/random/random_tablet_footer.svg";
import MobileFooter from "../assets/svgs/random/random_mobile_footer.svg";

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
          <FooterLink href="/#">GitHub</FooterLink>
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
          <FooterLink href="https://thomasbugg.com/" target="_blank">
            Thomas Bugg
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
      <DesktopPattern alt={`Full bleed pattern`} src={DesktopFooter} />
      <TabletPattern alt={`Full bleed pattern`} src={TabletFooter} />
      <MobilePattern alt={`Full bleed pattern`} src={MobileFooter} />{" "}
    </PatternContainer>{" "}
  </ParentContainer>
);

export default Footer;

export const PatternContainer = styled.div`
  bottom: 0vh;
  box-sizing: border-box;
  padding: 20px;
`;

export const Grid = styled(GridContainer)`
  margin: 20px 20px 80px 20px;

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

export const DesktopPattern = styled(MyImage)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TabletPattern = styled(MyImage)`
  display: none;

  @media (max-width: 768px) and (min-width: 376px) {
    display: block;
  }
`;

export const MobilePattern = styled(MyImage)`
  display: none;

  @media (max-width: 375px) {
    display: block;
  }
`;

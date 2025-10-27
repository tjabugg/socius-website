import React from "react";
import styled from "styled-components";
import {
  Logo,
  Link,
  Word,
  GridContainer,
  LogoContainer,
  ParentContainer,
  Small,
  MyImage,
  FullWidthSection,
} from "../styles";
import DesktopFooter from "../assets/images/desktop_footer.png";
import TabletFooter from "../assets/images/tablet_footer.png";
import MobileFooter from "../assets/images/mobile_footer.png";

const Footer = () => (
  <FullWidthSection bg="#1c1c1e">
    <Container>
      <Grid>
        <LogoContainer>
          <Logo title={`Socius logo`} />
          <Word title={`Socius word`} />
        </LogoContainer>

        {/* <TextContainer> */}
        <LinkContainer>
          <Title
            style={{
              color: "#706A65",
            }}
          >
            Socials
          </Title>
          <FooterLink href="/https://github.com/socius-org" target="_blank">
            GitHub
          </FooterLink>
          <FooterLink
            href="https://www.instagram.com/socius.labs/"
            target="_blank"
          >
            LinkedIn
          </FooterLink>
          <FooterLink
            href="https://www.linkedin.com/company/socius-labs/posts/?feedView=all"
            target="_blank"
          >
            Instagram
          </FooterLink>
        </LinkContainer>

        <LinkContainer>
          <Title
            style={{
              color: "#706A65",
            }}
          >
            Information
          </Title>
          <FooterLink href="/home">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/research">Research</FooterLink>
          <FooterLink href="/data">Data</FooterLink>
          <FooterLink href="/documentation">Documentation</FooterLink>
        </LinkContainer>

        <LinkContainer>
          <Title
            style={{
              color: "#706A65",
            }}
            href="/#"
          >
            Website by
          </Title>
          <FooterLink href="https://thomasbugg.com/" target="_blank">
            Thomas Bugg
          </FooterLink>
          <FooterLink href="https://anthonyodu.com/" target="_blank">
            Anthony Odu
          </FooterLink>
        </LinkContainer>
        {/* </TextContainer> */}
      </Grid>
      <PatternContainer>
        <DesktopPattern alt={`Full bleed pattern`} src={DesktopFooter} />
        <TabletPattern alt={`Full bleed pattern`} src={TabletFooter} />
        <MobilePattern alt={`Full bleed pattern`} src={MobileFooter} />{" "}
      </PatternContainer>{" "}
    </Container>
  </FullWidthSection>
);

export default Footer;

export const PatternContainer = styled.div`
  bottom: 0vh;
  box-sizing: border-box;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Grid = styled(GridContainer)`
  margin: 24px;
  grid-template-columns: 6fr 1fr 1fr 1fr;
  padding-right: 120px;

  @media (max-width: 768px) {
    margin: 20px;
    gap: 40px;
    grid-template-columns: 1fr;
  }
`;

export const Container = styled(ParentContainer)`
  justify-content: space-between;
  align-items: stretch;
  background-color: #1c1c1e;
  flex-direction: column;
  border-radius: 20px;
  /* padding-bottom: 10vh; */
  margin: 80px auto 0px auto;
  gap: 80px;

  /* max-width: 1681px; */

  @media (max-width: 1681px) {
    margin: 80px 24px 24px 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 40px 20px 20px 20px;
  }
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
  gap: 8px;
`;

export const FooterLink = styled(Link)`
  color: white;

  &:hover {
  }
`;

export const Title = styled(Small)`
  color: #f1f0ef;
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

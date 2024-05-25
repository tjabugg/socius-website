import React from "react";
import styled from "styled-components";
import {
  Logo,
  Link,
  Word,
  // MyImage,
  GridContainer,
  Body,
  LogoContainer,
  ParentContainer,
} from "../styles";
// import DesktopFooter from "../assets/svgs/random/desktop_footer_pattern.svg";
// import TabletFooter from "../assets/svgs/random/tablet_footer_pattern.svg";
// import MobileFooter from "../assets/svgs/random/mobile_footer_pattern.svg";

const Footer = () => (
  <Container>
    <Grid>
      <LogoContainer>
        <Logo title={`Socius logo`} />
        <Word title={`Socius word`} />
      </LogoContainer>

      <TextContainer>
        <LinkContainer>
          <Title>Socials</Title>
          <FooterLink href="/https://github.com/socius-org" target="_blank">
            GitHub
          </FooterLink>
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
          <FooterLink href="https://anthonyodu.com/" target="_blank">
            Anthony Odu
          </FooterLink>
        </LinkContainer>
      </TextContainer>
    </Grid>
    {/* <PatternContainer>
      <DesktopPattern alt={`Full bleed pattern`} src={DesktopFooter} />
      <TabletPattern alt={`Full bleed pattern`} src={TabletFooter} />
      <MobilePattern alt={`Full bleed pattern`} src={MobileFooter} />{" "}
    </PatternContainer>{" "} */}
  </Container>
);

export default Footer;

// export const PatternContainer = styled.div`
//   bottom: 0vh;
//   box-sizing: border-box;
//   padding: 24px;
// `;

export const Grid = styled(GridContainer)`
  margin: 24px;

  @media (max-width: 768px) {
    margin: 20px;
    gap: 16px;
  }
`;

export const Container = styled(ParentContainer)`
  justify-content: space-between;
  align-items: stretch;
  background-color: #1b1b1b;
  flex-direction: column;
  border-radius: 20px;
  padding-bottom: 10vh;
  margin: 24px auto 24px auto;

  @media (max-width: 1728px) {
    margin: 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px;
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
  gap: 6px;
`;

export const FooterLink = styled(Link)`
  color: white;
`;

export const Title = styled(Body)`
  font-weight: 600;
  font-size: 14px;
  color: white;
`;

export const SociusLogo = styled(Word)`
  @media (max-width: 768px) {
    display: block;
  }
`;

// export const DesktopPattern = styled(MyImage)`
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// export const TabletPattern = styled(MyImage)`
//   display: none;

//   @media (max-width: 768px) and (min-width: 376px) {
//     display: block;
//   }
// `;

// export const MobilePattern = styled(MyImage)`
//   display: none;

//   @media (max-width: 375px) {
//     display: block;
//   }
// `;

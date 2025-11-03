import styled, { createGlobalStyle } from "styled-components";
import { ReactComponent as SociusLogo } from "./assets/meta/socius_logo.svg";
import { ReactComponent as SociusWord } from "./assets/meta/socius_logotype.svg";
import GeneralSansRegular from "../src/assets/fonts/GeneralSans-Regular.otf";
import GeneralSansMedium from "../src/assets/fonts/GeneralSans-Medium.otf";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'General Sans Regular';
  src: url(${GeneralSansRegular});
}
@font-face {
  font-family: 'General Sans Medium';
  src: url(${GeneralSansMedium});
}


*{
  font-weight: 400;
  margin: 0;
    padding: 0;
      text-decoration: none;
        scroll-behavior: smooth;


    
    
}
body {
    font-family: 'General Sans Regular';
    font-style: normal;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background-color: white;
    color: #1b1b1b;
}
`;

export const Link = styled.a`
  font-family: "General Sans Medium";
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  opacity: 100%;

  @media (max-width: 1681px) {
    font-size: 12px;
  }

  &:hover {
    color: #b9b4b0;
  }
`;

export const PrimaryButton = styled(Link)`
  padding: 8px;
  color: white;
  background-color: #1c1c1e;
  border: none;
  border-radius: 40px;
  justify-self: start;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #cac6c3;
    color: white;
    opacity: 100%;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: #f1f0ef;
  color: #1b1b1b;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 33%;
  }
`;

export const TertiaryButton = styled(PrimaryButton)`
  /* border-bottom: 1px solid #1b1b1b; */
  color: #1c1c1e;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 0px;
  padding: 0px;
  white-space: nowrap; /* Keeps text on one line */
  /* width: 100%; */
  transition: opacity 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0);
    color: #b9b4b0;
    opacity: 33%;
    /* border-bottom: solid 1px rgba(255, 255, 255, 0); */
  }
`;

export const H1 = styled.h1`
  font-size: 75px;
  font-family: "Montagu Slab", serif;
  color: #1c1c1e;
  line-height: 1.1;
  white-space: pre-wrap;

  @media (max-width: 1681px) {
    font-size: 60px;
  }

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 414px) {
    font-size: 38px;
  }
`;

export const H2 = styled.h2`
  font-size: 55px;
  font-family: "Montagu Slab", serif;
  line-height: 1.1;
  color: #1c1c1e;
  white-space: pre-wrap;

  @media (max-width: 1681px) {
    font-size: 44px;
  }

  @media (max-width: 1024px) {
    font-size: 35px;
  }

  @media (max-width: 414px) {
    font-size: 28px;
  }
`;

export const H3 = styled.h3`
  font-size: 35px;
  font-family: "Montagu Slab", serif;
  line-height: 1.1;
  color: #1c1c1e;
  max-width: 1681px;
  white-space: pre-wrap;

  @media (max-width: 1681px) {
    font-size: 28px;
  }

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 414px) {
    font-size: 18px;
  }
`;

export const H4 = styled.h4`
  font-size: 34px;
  font-family: "General Sans Medium";
  line-height: 1.1;
  color: #1c1c1e;

  @media (max-width: 1681px) {
    font-size: 28px;
  }

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 414px) {
    font-size: 18px;
  }
`;

export const H5 = styled.h5`
  font-size: 25px;
  font-family: "General Sans Medium";
  line-height: 1.1;
  color: #1c1c1e;
  white-space: pre-wrap;

  @media (max-width: 1681px) {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 414px) {
    /* font-size: 13px; */
  }
`;

export const H6 = styled.h6`
  font-size: 25px;
  font-family: "General Sans Medium";
  line-height: 1.1;
  color: #1c1c1e;
  white-space: pre-wrap;

  @media (max-width: 1681px) {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 414px) {
    /* font-size: 13px; */
  }
`;

export const Body = styled.p`
  font-family: "General Sans Regular";
  font-size: 18px;
  color: #1c1c1e;
  line-height: 1.3;
  white-space: pre-wrap;

  @media (max-width: 1681px) {
    font-size: 16px;
  }

  @media (max-width: 414px) {
    font-size: 14px;
  }
`;

export const Small = styled.p`
  font-family: "General Sans Medium";
  font-size: 14px;
  color: #1c1c1e;
  /* line-height: 1.1; */
  white-space: pre-wrap;

  @media (max-width: 1681px) {
    font-size: 12px;
  }
`;

export const CentreContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
`;

export const CentreText = styled(CentreContainer)`
  padding: 0px 10vw 24px 10vw;
  gap: 8px;
  max-width: 1681px;

  @media (max-width: 768px) {
    padding: 0vw 0vw 24px 0vw;
  }
`;

export const ParentContainer = styled.div`
  margin: 24px auto 24px auto;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  flex-direction: column;
  gap: 8px;
  max-width: 1681px;

  @media (max-width: 1681px) {
    margin: 24px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 20px;
  }

  @media (max-width: 414px) {
    /* font-size: 9px; */
  }
`;

export const PaddedContainer = styled.div`
  margin: 0px auto;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  gap: 40px 24px;
  max-width: 1681px;

  @media (max-width: 1681px) {
    padding: 0px;
    margin: 0px 24px;
  }

  @media (max-width: 1024px) {
    margin: 20px;
    gap: 40px 24px;
  }

  @media (max-width: 414px) {
    gap: 24px;
  }
`;

export const CustomPaddedContainer = styled(PaddedContainer)`
  padding: 60px 24px;

  @media (max-width: 1681px) {
    /* padding: 60px 24px; */
    margin: 0px;
  }

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 24px;
  max-width: 1681px;

  @media (max-width: 1681px) {
    margin: 0px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CustomGridContainer = styled(GridContainer)`
  margin: 0px auto;
  padding: 60px 24px;
  max-width: 1633px;

  @media (max-width: 1633px) {
    padding: 60px 0px;
  }

  @media (max-width: 768px) {
    padding: 40px 0px;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 20px;
`;

export const MyImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 24px;
  /* align-items: center; */

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const LogoContainer = styled(NavContainer)`
  gap: 4px;
  display: flex;
  /* align-items: center; */
  color: black;
`;

export const Logo = styled(SociusLogo)`
  height: 18px;
  margin-top: 2px;
  width: 18px;
  mix-blend-mode: difference;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Word = styled(SociusWord)`
  height: 18px;
  width: 71px;
  display: block;
  mix-blend-mode: difference;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PauseButton = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  bottom: 0;
  right: 0;
  margin: 24px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    opacity: 60%;
  }

  @media (max-width: 768px) {
    margin: 20px;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
  gap: 8px;
`;

export const ButtonContainer = styled(TagContainer)`
  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const Tag = styled.div`
  padding: 4px;
  border-radius: 4px;
  justify-self: start;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 16px;
  }
`;

export const FullWidthSection = styled.section`
  width: 100vw;
  background-color: ${(props) => props.bg || "transparent"};
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

export const CustomTextContainer = styled(PaddedContainer)`
  /* padding: 0px; */
  /* justify-content: flex-end; */
  margin: 0px auto;
  gap: 40px;
  justify-content: flex-end;

  @media (max-width: 1729px) {
    margin: 24px;
  }
`;

export const Custom = styled(PaddedContainer)`
  margin: 0px;
`;

export const CustomGrid = styled(GridContainer)`
  margin: 60px auto;
  padding: 60px 0px;

  @media (max-width: 1729px) {
    margin: 24px;
  }

  @media (max-width: 1024px) {
    /* margin: 20px;
    gap: 40px 24px; */
  }

  @media (max-width: 414px) {
    padding: 40px 0px;
    margin: 0px 20px;
  }
`;

export const CustomContainer = styled(PaddedContainer)`
  padding: 60px 0px;
  @media (max-width: 1729px) {
    margin: 0px 24px;
  }

  @media (max-width: 414px) {
    padding: 40px 0px;
  }
`;

export const QuoteContainer = styled(CentreContainer)`
  margin: 0px auto;
  padding: 15vh 10vw;
  max-width: 1729px;

  @media (max-width: 414px) {
    padding: 10vh 10vw;
  }
`;

export const List = styled.ul`
  margin-top: 16px;
  padding-left: 40px;
  line-height: 1.5;
`;
export const NumList = styled.ol`
  margin-top: 16px;
  padding-left: 40px;
  line-height: 1.5;
`;

export const CustomLink = styled(Link)`
  font-size: 18px;
  color: #1c1c1e;
  line-height: 1.3;
  text-decoration: underline;

  @media (max-width: 1729px) {
    font-size: 16px;
  }

  @media (max-width: 414px) {
    font-size: 14px;
  }

  &:hover {
    text-decoration: none;
  }
`;
export const CustomHeadingLink = styled(Link)`
  font-size: 25px;
  font-family: "General Sans Medium";
  line-height: 1.1;
  color: #1c1c1e;
  text-decoration: underline;
  white-space: pre-wrap;

  @media (max-width: 1681px) {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const CustomCode = styled.code`
  background: #e6e4e2;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 16px;
  color: #1c1c1e;

  @media (max-width: 1729px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    padding: 1px;
  }
`;

import styled, { createGlobalStyle } from "styled-components";
import { ReactComponent as SociusLogo } from "./assets/meta/socius_logo.svg";
import { ReactComponent as SociusWord } from "./assets/meta/socius_word.svg";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background-color: white;
}
`;

export const Link = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: white;
  cursor: pointer;

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

export const PrimaryButton = styled(Link)`
  padding: 8px;
  background-color: black;
  border: none;
  border-radius: 12px;
  color: white;

  &:hover {
    background-color: #cbdcff;
    color: black;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: #e5e5e5;
  color: black;

  &:hover {
    background-color: #d9ffd8;
    color: black;
  }
`;

export const Heading = styled.h1`
  font-family: "Montagu Slab", serif;
  margin: 0;
  padding: 0;
  font-weight: 400;
  line-height: 1.1;
  /* letter-spacing: -1px; */
`;

export const H1 = styled(Heading)`
  font-size: 60px;

  @media (max-width: 375px) {
    font-size: 40px;
  }
`;

export const H2 = styled(Heading)`
  font-size: 40px;

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

export const H3 = styled(Heading)`
  font-size: 24px;
`;

export const H4 = styled(Heading)`
  font-size: 20px;
`;

export const Body = styled.p`
  font-size: 16px;
  color: black;
  margin: 0;
  padding: 0;
  line-height: 1.3;
  white-space: pre-wrap;
`;

export const MyImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  /* position: relative; */
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
  gap: 8px;
  margin: 0vw 25vw;

  @media (max-width: 768px) {
    margin: 16px;
  }
`;

export const ParentContainer = styled.div`
  margin: 16px;
  text-align: left;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  flex-direction: row;
  gap: 16px;
  /* width: 100%; */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled(ParentContainer)`
  gap: 0px;
  margin: 24px 30vw;
  padding: 0px;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 24px 0px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 24px 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const LetterContainer = styled.div`
  height: 80vh;
  box-sizing: border-box;
  border-radius: 20px;

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

export const ImageContainer = styled.div`
  /* width: 100%; */
  overflow: hidden;
  border-radius: 20px;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const LogoContainer = styled(NavContainer)`
  gap: 4px;
  align-items: flex-start;
`;

export const Logo = styled(SociusLogo)`
  height: 18px;
  margin-top: 2px;
  width: 18px;
  display: block;
  mix-blend-mode: difference;
`;

export const Word = styled(SociusWord)`
  height: 20px;
  width: 80px;
  display: block;
  mix-blend-mode: difference;

  @media (max-width: 768px) {
    display: none;
  }
`;

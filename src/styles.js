import styled, { createGlobalStyle } from "styled-components";
import { ReactComponent as SociusLogo } from "./assets/meta/socius_logo.svg";
import { ReactComponent as SociusWord } from "./assets/meta/socius_logotype.svg";
import PorporaRegular from "../src/assets/fonts/Porpora-Regular.ttf";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Porpora Regular';
  src: url(${PorporaRegular});
}


*{
  font-weight: 400;
  margin: 0;
    padding: 0;
    
    
}
body {
    font-family: 'Porpora Regular';
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
  font-family: "Porpora Regular";
  font-size: 16px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  opacity: 100%;

  @media (max-width: 1729px) {
    font-size: 14px;
  }

  &:hover {
    opacity: 30%;
  }
`;

export const PrimaryButton = styled(Link)`
  padding: 8px;
  background-color: #1b1b1b;
  border: none;
  border-radius: 40px;
  justify-self: start;

  &:hover {
    background-color: #cbdcff;
    color: #1b1b1b;
    opacity: 100%;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: #e5e5e5;
  color: #1b1b1b;

  &:hover {
    background-color: #d9ffd8;
    color: #1b1b1b;
  }
`;
export const TertiaryButton = styled(PrimaryButton)`
  border-bottom: 1px solid #1b1b1b;
  color: #1b1b1b;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 0px;
  padding: 0px;

  &:hover {
    background-color: rgba(255, 255, 255, 0);
    border-bottom: solid 1px rgba(255, 255, 255, 0);
  }
`;

export const Heading = styled.h1`
  font-size: 64px;
  font-family: "Montagu Slab", serif;
  color: #1b1b1b;
  line-height: 1.1;

  @media (max-width: 1729px) {
    font-size: 54px;
  }

  @media (max-width: 414px) {
    font-size: 32px;
  }
`;

export const Subheading = styled.h2`
  font-size: 48px;
  font-family: "Montagu Slab", serif;
  line-height: 1.1;
  color: #1b1b1b;

  @media (max-width: 1729px) {
    font-size: 44px;
  }

  @media (max-width: 414px) {
    font-size: 28px;
  }
`;

export const Title = styled.h3`
  font-size: 40px;
  font-family: "Montagu Slab", serif;
  line-height: 1.1;
  color: #1b1b1b;
  max-width: 1729px;

  @media (max-width: 1729px) {
    font-size: 28px;
  }
`;

export const Synopsis = styled.h4`
  font-size: 32px;
  font-family: "Porpora Regular";
  line-height: 1.1;
  color: #1b1b1b;

  @media (max-width: 414px) {
    font-size: 22px;
  }
`;
export const Subtitle = styled.h5`
  font-size: 24px;
  font-family: "Montagu Slab", serif;
  line-height: 1.1;
  color: #1b1b1b;
`;

export const Body = styled.p`
  font-family: "Porpora Regular";
  font-size: 19px;
  color: #1b1b1b;
  line-height: 1.3;
  white-space: pre-wrap;

  @media (max-width: 1728px) {
    font-size: 18px;
  }
`;

export const Caption = styled(Body)`
  font-size: 14px;
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
  gap: 16px;
  margin: 64px 25vw 40px 25vw;

  @media (max-width: 768px) {
    gap: 20px;
    margin: 48px 20px 20px 20px;
  }
`;

export const ParentContainer = styled.div`
  margin: 24px auto 24px auto;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  flex-direction: row;
  gap: 8px;
  max-width: 1729px;

  @media (max-width: 1729px) {
    margin: 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 24px;
  max-width: 1729px;
  margin: 24px auto;

  @media (max-width: 1729px) {
    margin: 24px;
  }

  @media (max-width: 768px) {
    margin: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const LetterContainer = styled.div`
  height: 80vh;
  width: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  max-width: 1729px;
  margin: 0px auto;

  @media (max-width: 1729px) {
    margin: 0px;
  }

  @media (max-width: 768px) {
    height: 60vh;
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
  align-items: center;
`;

export const LogoContainer = styled(NavContainer)`
  gap: 4px;
  align-items: flex-start;
`;

export const Logo = styled(SociusLogo)`
  height: 20px;
  margin-top: 2px;
  width: 20px;
  display: none;
  mix-blend-mode: difference;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Word = styled(SociusWord)`
  height: 22px;
  width: 103px;
  display: block;
  mix-blend-mode: difference;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MyVideo = styled.video`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
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

import React from "react";
import {
  PrimaryButton,
  Link,
  LogoContainer,
  NavContainer,
  Logo,
  Word,
} from "../styles";
import styled from "styled-components";

const Navigation = () => (
  <HeaderContainer>
    <Link href="/">
      <LogoContainer>
        <Logo title={`Socius logo`} />
        <Word title={`Socius word`} />
      </LogoContainer>
    </Link>

    <NavContainer>
      <Link href="/research">Research</Link>
      <Link href="/database">Database</Link>
      <NavButton href="/forsocialscientists">For Social Scientists</NavButton>
    </NavContainer>
  </HeaderContainer>
);

export default Navigation;

export const HeaderContainer = styled.header`
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1000;
  /* background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.25) 75%,
    rgba(255, 255, 255, 0) 100%
  ); */
  mix-blend-mode: difference;
`;

export const NavButton = styled(PrimaryButton)`
  background-color: white;
  color: black;
`;

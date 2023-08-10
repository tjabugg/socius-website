import React, { useEffect, useRef } from "react";
import {
  PrimaryButton,
  Link,
  LogoContainer,
  NavContainer,
  Logo,
  Word,
} from "../styles";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Navigation() {
  // Only apply effect to home page
  const navRef = useRef(null);
  useEffect(() => {
    const el = navRef.current;
    gsap.fromTo(
      el,
      { backgroundColor: "rgba(255, 255, 255, 0)", mixBlendMode: "difference" },
      {
        mixBlendMode: "normal",
        backgroundColor: "rgba(255, 255, 255, 1)",
        scrollTrigger: { start: "0px", end: "1px", scrub: 1},
      }
    );
  }, []);

  return (
    <HeaderContainer ref={navRef}>
      <NavLink href="/">
        <LogoContainer>
          <Logo title={`Socius logo`} />
          <Word title={`Socius word`} />
        </LogoContainer>
      </NavLink>

      <NavContainer>
        <NavLink href="/research">Research</NavLink>
        <NavLink href="/database">Database</NavLink>
        <NavButton href="/forsocialscientists">For Social Scientists</NavButton>
      </NavContainer>
    </HeaderContainer>
  );
}

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
  mix-blend-mode: difference;
`;

export const NavButton = styled(PrimaryButton)`
  background-color: white;
  color: black;
  mix-blend-mode: difference;

  &:hover {
    background-color: #1b1b1b;
    color: #cbdcff;
    opacity: 100%;
  }
`;

export const NavLink = styled(Link)`
  mix-blend-mode: difference;
`;

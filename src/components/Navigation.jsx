import React from "react";
// import React, { useEffect, useRef } from "react";
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
  // const navRef = useRef(null);
  // useEffect(() => {
  //   const el = navRef.current;

  //   gsap.fromTo(
  //     el,
  //     { backgroundColor: "rgba(255, 255, 255, 0)", mixBlendMode: "difference" },
  //     {
  //       mixBlendMode: "normal",
  //       backgroundColor: "rgba(255, 255, 255, 1)",
  //       scrollTrigger: { start: "0px", end: "1px", scrub: 1 },
  //     }
  //   );
  // }, []);

  return (
    // ref={navRef}
    <HeaderContainer>
      <NavLink href="/">
        <LogoContainer>
          <Logo title={`Socius logo`} />
          <Word title={`Socius word`} />
        </LogoContainer>
      </NavLink>

      <NavContainer>
        <NavLink href="/research">Research</NavLink>
        <NavLink href="/database">Database</NavLink>
        <PrimaryButton href="/forsocialscientists">
          For Social Scientists
        </PrimaryButton>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Navigation;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1000;
  max-width: 1729px;
  background-color: white;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const NavLink = styled(Link)`
  color: black;
`;

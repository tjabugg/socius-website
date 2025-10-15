import { useState, useEffect } from "react";
import { Link, LogoContainer, NavContainer, Logo, Word } from "../styles";
import styled from "styled-components";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide/show nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNav(false); // hide when scrolling down
      } else {
        setShowNav(true); // show when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <HeaderContainer showNav={showNav}>
      {/* Left logo */}
      <NavLink href="/">
        <LogoContainer>
          <Logo title="Socius logo" />
          <Word title="Socius word" />
        </LogoContainer>
      </NavLink>

      {/* Desktop links */}
      <DesktopNav>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/research">Research</NavLink>
        <NavLink href="/data">Data</NavLink>
        <NavLink href="/documentation">Documentation</NavLink>
      </DesktopNav>

      {/* Hamburger icon */}
      <Hamburger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        {/* <span /> */}
        <span />
      </Hamburger>

      {/* Mobile dropdown */}
      <MobileMenu open={menuOpen}>
        <NavLink href="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink href="/about" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
        <NavLink href="/research" onClick={() => setMenuOpen(false)}>
          Research
        </NavLink>
        <NavLink href="/data" onClick={() => setMenuOpen(false)}>
          Data
        </NavLink>
        <NavLink href="/documentation" onClick={() => setMenuOpen(false)}>
          Documentation
        </NavLink>
      </MobileMenu>
    </HeaderContainer>
  );
}

export default Navigation;

//
// STYLED COMPONENTS
//

export const HeaderContainer = styled.div`
  position: fixed;
  top: ${({ showNav }) => (showNav ? "0" : "-100px")};
  left: 0;
  right: 0;
  margin: auto;
  padding: 24px 24px;
  /* More balanced horizontal padding */
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  z-index: 1000;
  max-width: 1729px;
  background-color: white;
  /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); */
  transition: top 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 20px; /* Tight padding on mobile */
  }
`;

export const NavLink = styled(Link)`
  color: #1C1C1E;
  text-decoration: none;
  font-weight: 500;
  /* margin-left: 24px; */
  transition: color 0.2s ease;

  &:hover {
    color: #b9b4b0;
  }

  @media (max-width: 768px) {
    margin: 0px;
  }
`;

const DesktopNav = styled(NavContainer)`
  @media (max-width: 768px) {
    display: none;
  }
`;

// Animated hamburger button
// Perfectly centered 2-line hamburger → X
const Hamburger = styled.div`
  display: none;
  position: relative; /* required for absolute children */
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 1100;

  /* common bar styles */
  span {
    position: absolute; /* absolute lets us set exact top for each bar */
    left: 0;
    height: 2px;
    width: 100%;
    background: black;
    border-radius: 4px;
    transition: top 0.5s cubic-bezier(0.2, 0.9, 0.2, 1),
      transform 0.5s cubic-bezier(0.2, 0.9, 0.2, 1), opacity 0.5s;
    transform-origin: center;
  }

  /* initial positions: top bar above center, bottom bar below center */
  span:first-child {
    top: calc(50% - 6px); /* adjust spacing between bars */
  }
  span:last-child {
    top: calc(50% + 6px);
  }

  /* when open: move both to exact center and rotate into an X */
  ${({ open }) =>
    open &&
    `
    span:first-child {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
    span:last-child {
      top: 50%;
      transform: translateY(-50%) rotate(-45deg);
    }
  `}

  @media (max-width: 768px) {
    display: block;
  }
`;

// Mobile dropdown
const MobileMenu = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin: auto;
  background: white;
  padding: 20px;
  gap: 12px;
  /* border-radius: 20px; */
  /* box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1); */
  animation: fadeIn 0.2s ease;
  z-index: 1000;
  width: 100%;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

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

  // Close mobile menu on scroll
  useEffect(() => {
    if (!menuOpen) return;

    const handleScrollClose = () => setMenuOpen(false);

    window.addEventListener("scroll", handleScrollClose);
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [menuOpen]);

  return (
    <HeaderContainer $showNav={showNav}>
      <NavTopBar>
        <LogoNav>
          <NavLink href="/">
            <LogoContainer>
              <Logo />
              <SpanDesktop>
                <Word />
              </SpanDesktop>
            </LogoContainer>
          </NavLink>
        </LogoNav>

        <DesktopNav>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/research">Research</NavLink>
          <NavLink href="/data">Data</NavLink>
          <NavLink href="/documentation">Documentation</NavLink>
        </DesktopNav>

        <MobileToggle onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close" : "Menu"}
        </MobileToggle>
      </NavTopBar>

      <MobileMenuWrapper open={menuOpen}>
        <MobileMenuInner>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/research">Research</NavLink>
          <NavLink href="/data">Data</NavLink>
          <NavLink href="/documentation">Documentation</NavLink>
        </MobileMenuInner>
      </MobileMenuWrapper>
    </HeaderContainer>
  );
}

export default Navigation;

//
// STYLED COMPONENTS
//

export const HeaderContainer = styled.div`
  position: fixed;
  top: ${({ $showNav }) => ($showNav ? "0" : "-100px")};
  left: 0;
  right: 0;
  margin: 24px auto;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  /* width: 100%; */
  z-index: 1000;
  max-width: 1729px;
  /* background-color: white; */
  transition: top 0.3s ease-in-out;
  margin: 0px auto;
  /* border-radius: 20px; */

  @media (max-width: 768px) {
    background-color: white;
    margin: 20px;
    padding: 16px;
    border-radius: 20px; /* stays round */
    flex-direction: column;
  }
`;

export const NavLink = styled(Link)`
  color: #1c1c1e;
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
  background: rgba(255, 255, 255, 1);
  /* backdrop-filter: blur(10px); */
  /* -webkit-backdrop-filter: blur(10px); */
  padding: 16px;
  border-radius: 1000px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoNav = styled(DesktopNav)`
  @media (max-width: 768px) {
    padding: 0px;
    display: block;
  }
`;

const MobileMenuWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: ${({ open }) => (open ? "300px" : "0")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  /* border-radius: 20px; */
  background: white;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenuInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px 0px 0px 0px; /* ✅ NO padding */
`;

const SpanDesktop = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavTopBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const MobileToggle = styled(NavLink)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

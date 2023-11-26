import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileNav>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  align-items: baseline;
  border-bottom: 1px solid var(--color-gray-300);
  display: flex;
  overflow: auto;
  padding: 18px 32px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    border-top: 8px solid var(--color-gray-900);
    gap: 32px;
    justify-content: space-between;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileNav = styled.nav`
  display: none;
  gap: 32px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: flex;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    gap: 24px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

export default Header;

/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Overlay = styled(DialogOverlay)`
  bottom: 0;
  background: var(--color-modal-overlay);
  display: flex;
  justify-content: flex-end;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const Content = styled(DialogContent)`
  background: white;
  flex-direction: column;
  display: flex;
  height: 100%;
  padding: 32px;
  width: 300px;
`;

const CloseButton = styled(UnstyledButton)`
  right: 0;
  padding: 16px;
  position: absolute;
  top: 10px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  font-size: 1.125rem;
  text-decoration: none;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
`;

const FooterLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.8rem;
  text-decoration: none;
`;

const MobileMenu = ({ isOpen, onDismiss }) => {
  return isOpen ? (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  ) : null;
};

export default MobileMenu;

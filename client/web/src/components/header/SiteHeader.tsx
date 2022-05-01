import React from 'react';
import { StyledSiteHeader } from './Header.styled';
import { Icon, Logo, Nav, StyledNavLink } from '..';
import svg from '../../assets/site-logo.svg';
import { BsCart2 } from 'react-icons/bs';

const SiteHeader = (): JSX.Element => {
  return (
    <StyledSiteHeader>
      <Logo src={svg} alt="logo" />
      <Nav>
        <StyledNavLink to="/login">Login</StyledNavLink>
        <span className="separator">|</span>
        <StyledNavLink to="/register">Register</StyledNavLink>
        <StyledNavLink to="/cart" className="icon">
          <Icon size="28px">
            <BsCart2 />
          </Icon>
        </StyledNavLink>
      </Nav>
    </StyledSiteHeader>
  );
};

export default SiteHeader;

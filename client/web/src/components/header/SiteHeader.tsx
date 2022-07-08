import React from 'react';
import { StyledSiteHeader } from './Header.styled';
import { Icon, Logo, Nav, StyledNavLink } from '..';
import svg from '../../assets/site-logo.svg';
import { BsCart2, BsPersonCircle } from 'react-icons/bs';
import { AuthContextModel, useAuthContext } from '../../context/AuthContext';
import { Role } from '../../utils/Enum';

const SiteHeader = (): JSX.Element => {
  const authContext: AuthContextModel = useAuthContext();
  const user = authContext.user;
  return (
    <StyledSiteHeader>
      <Logo src={svg} alt="logo" />
      <Nav>
        {typeof user.name != 'undefined' ? (
          <>
            <StyledNavLink to="/profile">
              <Icon size="28px">
                <BsPersonCircle />
                {/* <span className="label">{authContext.user.name.firstName}</span> */}
              </Icon>
            </StyledNavLink>

            {user.role.roleId !== Role.Buyer && (
              <>
                <span className="separator">|</span>
                <StyledNavLink to="/addbook">Add Book</StyledNavLink>
              </>
            )}

            <span className="separator">|</span>
            <StyledNavLink to="/logout">Logout</StyledNavLink>
          </>
        ) : (
          <>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <span className="separator">|</span>
            <StyledNavLink to="/register">Register</StyledNavLink>
          </>
        )}

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

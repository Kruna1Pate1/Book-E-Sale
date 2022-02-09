import styled from 'styled-components';
import { Container } from '..';

const StyledHeader = styled.header``;

const StyledSiteHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSearchBar = styled.div`
  backdrop-filter: brightness(96%);
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  margin: 0 auto;

  @media (max-width: 760px) {
    padding: 0 20px;
  }
`;

export { StyledHeader, StyledSiteHeader, StyledSearchBar };

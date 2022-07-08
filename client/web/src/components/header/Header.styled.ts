import styled from 'styled-components';
import { Container } from '..';

const StyledHeader = styled.header``;

const StyledSiteHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    margin: 10px;
  }
  white-space: nowrap;
`;

const StyledSearchBar = styled.div`
  backdrop-filter: brightness(96%);
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  padding: 0 50px;
  margin: 0 auto;

  input {
    max-width: 430px;
    flex-grow: 2;
    flex-shrink: 2;
  }

  & button {
    padding-right: 10px;
    margin-left: 10px;
  }

  @media (max-width: 760px) {
    padding: 0 20px;
  }
`;

export { StyledHeader, StyledSiteHeader, StyledSearchBar };

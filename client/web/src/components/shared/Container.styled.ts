import styled from 'styled-components';

const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;

  @media (max-width: 760px) {
    padding: 0 20px;
  }
`;

export default Container;

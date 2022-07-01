import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;

  h3 {
    font-size: 20px;
    margin: 0;
  }

  label {
    /* margin: 20px 15px 0 0; */
  }

  button {
    margin-top: auto;
    flex: none;
  }

  *.hint {
    color: ${({ theme }) => theme.colors.hint};
    font-weight: lighter;
  }

  p.error {
    margin-top: 6px;
    color: ${({ theme }) => theme.colors.error};
    font-weight: 300;
    font-style: italic;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-left: 18px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export { LoginContainer, LeftContainer, RightContainer };

import styled from 'styled-components';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: stretch;

  h3 {
    font-size: 20px;
    margin: 0;
  }

  label {
    margin: 20px 0;
  }

  input {
    flex: 1;
    /* width: 40%; */
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

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 30px;
  input {
    flex: 1;
    margin-top: 5px;
    width: 60%;
  }

  div.field {
    flex: 1;
    margin-top: 20px;
  }
`;

export { RegisterContainer, RowContainer };

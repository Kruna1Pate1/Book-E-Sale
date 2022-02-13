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
  }

  *.hint {
    color: ${({ theme }) => theme.colors.hint};
    font-weight: lighter;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 30px;
  input {
    flex: 1;
    margin-top: 20px;
  }
`;

export { RegisterContainer, RowContainer };

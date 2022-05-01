import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.colors.hint};

  backdrop-filter: brightness(96%);
  font-weight: lighter;
  height: 100px;
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledFooter };

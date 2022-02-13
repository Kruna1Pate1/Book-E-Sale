import { createGlobalStyle } from 'styled-components';

// [issue]: createGlobalStyle not being auto formatted
// https://github.com/styled-components/vscode-styled-components/issues/175
const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap');

  * {
    box-sizing: border-box;
    /* box-shadow: none; */
  }

  body {
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.onSurface};
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }

  input,
  textarea,
  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  hr {
    width: 100%;
    margin: 20px 0;
    padding-right: 10px;
    border: none;
    border-top: 1px solid;
    border-top-color: ${({ theme }) => theme.colors.border};
  }
`;

export default GlobalStyle;

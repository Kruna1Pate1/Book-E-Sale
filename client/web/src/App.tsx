import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/theme';
import { Container, Header } from './components';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Header />
      <Container>
        <h2>Hello World</h2>
      </Container>
    </ThemeProvider>
  );
}

export default App;

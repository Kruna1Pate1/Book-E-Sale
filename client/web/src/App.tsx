import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/theme';
import { Container, Footer, Header } from './components';
import GlobalStyle from './styles/GlobalStyle';
import AppRoutes from './App.routes';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Header />
      <Container>
        <main>
          <AppRoutes />
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/theme';
import { Container, Footer, Header } from './components';
import GlobalStyle from './styles/GlobalStyle';
import AppRoutes from './App.routes';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <AuthProvider>
        <Header />
        <ToastContainer
        newestOnTop={true}
        theme='colored'
        />
        <Container>
          <main>
            <AppRoutes />
          </main>
        </Container>
      </AuthProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

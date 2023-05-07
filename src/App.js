import React from 'react';
import { Normalize } from 'styled-normalize';
import Theme from './styles/Theme';
import GlobalStyle from './styles/global';
import AppRouter from './routes';

function App() {
  return (
    <Theme>
      <AppRouter />
      <GlobalStyle />
      <Normalize />
    </Theme>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import App from './components/App';
import Launch from './components/Launch';

import styles from './styles/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#329d9c',
    },
    secondary: {
      main: '#205072',
    },
  },
});

if (document.getElementById('root')) {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Launch />
    </ThemeProvider>,
    document.getElementById('launch-root')
  );
}

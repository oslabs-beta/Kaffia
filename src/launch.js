import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Launch from './components/Launch';
import styles from './styles/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Launch />
  </ThemeProvider>,
  document.getElementById('launch-root')
);

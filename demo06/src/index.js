import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fontsource/roboto';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const teema = createMuiTheme({
  palette : {
    type : 'dark'
  }

});

ReactDOM.render(
    <ThemeProvider theme={teema}>
      <CssBaseline/>
      <App />
    </ThemeProvider>,
  document.getElementById('root')
);



import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// English.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../src/style/global.css'
import 'react-toastify/dist/ReactToastify.css';



const theme = createTheme()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


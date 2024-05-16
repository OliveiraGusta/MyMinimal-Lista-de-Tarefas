import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

import { ThemeProvider } from 'styled-components';
import { theme }  from "./styles/theme";
import GlobalStyle from "./styles/global";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
)

//Router configuration


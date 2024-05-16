import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import GlobalStyle from "./styles/global";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
  </React.StrictMode>,
)

//Router configuration


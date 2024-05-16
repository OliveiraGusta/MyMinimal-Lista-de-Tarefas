import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'OpenSans',system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
        font-weight: 400;
        color: #363636;
    }
    body{
        background-color: #ffffff;
    }
`;

export default GlobalStyle;
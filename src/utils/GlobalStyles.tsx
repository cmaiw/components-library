import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@100;400&display=swap');
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          display: flex;
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100vw;
          font-family: 'Roboto';
          flex-direction: column;
          background-color: #f7f9f7;
          color: #3a3335;
          overflow: scroll;
        }
        
`
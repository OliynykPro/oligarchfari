import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
      font-size: 16px;
    }

    body {
      position: relative;
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      min-height: -webkit-fill-available;
    }
    
    html {
      height: -webkit-fill-available;
    }

    html, body {
        font-family: 'Inter', sans-serif;

        img {
          max-width: 100%;
        }
    }
`;

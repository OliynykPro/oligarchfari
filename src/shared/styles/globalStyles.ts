import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
      font-size: 16px;
    }

    body {
      padding-bottom: 4rem;
      position: relative;
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      min-height: -webkit-fill-available;
      background-color: ${({ theme }) => theme.colors.grey};
    }
    
    html {
      height: -webkit-fill-available;
    }

    html, body {
        font-family: 'Eudoxus Sans', sans-serif;

        img {
          max-width: 100%;
        }
    }

    div {
      &.form-title {
        font-weight: 700;
        font-size: 1.25rem;
        margin-bottom: 2rem;
        line-height: 1.75rem;
      }
    }

    label {
      width: 100%;
      display: block;
      color: #818181;
      line-height: 1rem;
      font-size: 0.75rem;
      margin-bottom: 0.25rem;
    }

    input {
      width: 100%;
      padding: 0.75rem;
      border-radius: 0.5rem;
      margin-bottom: 1.5rem;
      border: 1px solid #C7C7C7; 
    }
`;

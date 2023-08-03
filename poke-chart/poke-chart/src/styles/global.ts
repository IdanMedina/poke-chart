import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    
  }

  :root {
    --color-white: #FDFCF4;
    --color-primary: #3570AB;
    --color-primary-20: #DCE6EC;
    --color-primary-50: #97BDE3;
    --color-secondary:#B85353;
    --color-secondary-50:#ECA0A0;
    --color-secondary-20:#F3D6D6;
    --grey-100: #6F6F45;
    --grey-50: #847C44;
    --grey-20: #E4DFC1;
    --grey-0: #F1F1DE;
  }

  body {
    list-style: none;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    background-color: var(--color-white)
  }  

  main {
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 5rem;
    padding: 2rem 1rem 3rem 1rem;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1024px) {
    flex-direction: row;
    };

    @media (min-width: 1360px) {
    padding: 2.5rem 4rem 5rem 4rem;
    }
  }
`;

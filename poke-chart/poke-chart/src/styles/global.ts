import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    
  }

  :root {
    --color-white: #FFFFFF;
    --color-primary: #3570AB;
    --color-primary-50: #97BDE3;
    --color-secondary:#EB5757;
    --grey-100: #6F6F45;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-0: #F1F1DE;
    --grey-opacity-100: #33333380; 
    --negative:#E60000;
    --warning:#FFCD07;
    --success:#168821;
    --information:#155BCB;
  }

  body {
    list-style: none;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
  }  


  
`;

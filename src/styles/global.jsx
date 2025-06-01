import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

a{
  text-decoration:none;
  color:#fff;
}

a:hover{
  text-decoration:underline;
}

body{
  background-color:#000;
  color:#fff;
  font-family: "Nunito", sans-serif;
}

img{
  max-width:100%;
  display:block;
}

#root{
height:100svh;
}
/* *,::before,::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
} */
`;


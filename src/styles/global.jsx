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

.tippy-box[data-theme~='custom-play'] {
    background-color: #202020;
    color: #fff;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 5px 8px;
    border-radius: 4px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  }

/* *,::before,::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
} */
`;


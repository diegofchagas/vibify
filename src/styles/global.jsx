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
}

#root{
height:100svh;
}
/* *,::before,::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
} */

    /* --background-base: #121212;
    --background-highlight: #1f1f1f;
    --background-press: #000;
    --background-elevated-base: #1f1f1f;
    --background-elevated-highlight: #2a2a2a;
    --background-elevated-press: #191919;
    --background-tinted-base: #ffffff1a;
    --background-tinted-highlight: #ffffff24;
    --background-tinted-press: #ffffff36;
    --text-base: #fff;
    --text-subdued: #b3b3b3;
    --text-bright-accent: #1ed760;
    --text-negative: #f3727f;
    --text-warning: #ffa42b;
    --text-positive: #1ed760;
    --text-announcement: #4cb3ff;
    --essential-base: #fff;
    --essential-subdued: #7c7c7c;
    --essential-bright-accent: #1ed760;
    --essential-negative: #ed2c3f;
    --essential-warning: #ffa42b;
    --essential-positive: #1ed760;
    --essential-announcement: #4cb3ff;
    --decorative-base: #fff;
    --decorative-subdued: #292929; */
`;
  


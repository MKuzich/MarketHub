import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: 'Roboto, sans-serif';
  color: #0b090a;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
  
p {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3 {
  margin: 0;
}

a {
  text-decoration: none;
}
`;

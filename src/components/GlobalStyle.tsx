import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

.swiper-button-prev {
    color: #0b090a; 
}

.swiper-button-next {
    color: #0b090a; 
}
`;

import { createGlobalStyle } from 'styled-components';

export const style = {
  color: {
    black: '#202020',
    white: '#ffffff',
  },
  font: {
    family: 'sans-serif',
    size: {
      default: '16px',
      small: '0.75rem',
      regular: '1rem',
      medium: '1.25rem',
      large: '2rem',
      big: '4rem',
    },
  },
  opacity: '0.75',
  transition: 'all ease-in-out 0.25s',
};

export const Style = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;

    &:before, &:after {
      box-sizing: border-box;
    }
  }

  html, body {
    width: 100%;
    height: 100vh;
    text-rendering: optimizeLegibility;
    image-rendering: optimizeQuality;
    shape-rendering: optimizeSpeed;
  }

  body {
    color: ${style.color.black};
    background: ${style.color.white};
    font-size: ${style.font.size};
    font-family: ${style.font.family};
  }

  a, button {
    transition: ${style.transition};
  }
`;

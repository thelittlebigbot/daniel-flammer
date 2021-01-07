import { createGlobalStyle } from 'styled-components';

export const style = {
  color: {
    black: '#202020',
    blue: '#1941ac',
    white: '#ffffff',
  },
  font: {
    family: "'Poppins', sans-serif",
    size: {
      default: '16px',
      small: '0.75rem',
      regular: '1rem',
      medium: '1.25rem',
      large: '2rem',
      big: '4rem',
    },
    weight: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
  },
  opacity: '0.5',
  transition: 'all ease-in-out 0.25s',
  shadow: '10px 10px 20px rgba(0, 0, 0, 0.25)',
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
    font-weight: ${style.font.weight.regular}
  }

  a {
    color: ${style.color.blue};

    &:hover {
      background: ${style.color.blue};
      color: ${style.color.white};
      padding: 0.15rem 0.30rem;
    }
  }

  a, button {
    transition: ${style.transition};
  }
`;

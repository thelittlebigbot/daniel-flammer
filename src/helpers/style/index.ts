import { createGlobalStyle } from 'styled-components';

export const style = {
  color: {
    black: '#202020',
    blue: '#1941ac',
    white: '#ffffff',
  },
  font: {
    light: 'Futura Std Light',
    regular: 'Futura Std Book',
    italic: 'Futura Std Book Oblique',
    medium: 'Futura Std Medium',
    bold: 'Futura Std Bold',
    heavy: 'Futura Std Heavy',
    extraBold: 'Futura Std Extra Bold',
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
    font-family: ${style.font.regular};
    font-weight: ${style.font.weight.regular}
  }

  a {
    color: ${style.color.blue};
    background: none;
    padding: 0.15rem 0;
    border: none;

    &:hover {
      background: ${style.color.blue};
      color: ${style.color.white};
      padding: 0.15rem 0.5rem;
    }
  }

  a, button {
    transition: ${style.transition};
  }

 

  [style~="2147483647;"] {
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    & .description {
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0.5rem;
      width: 100%;
      opacity: ${style.opacity};

      transition: all ease-in-out 2s;

    }
  }
`;



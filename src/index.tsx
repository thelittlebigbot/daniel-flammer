import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import './assets/fonts/style.css';

import { Routes, Style } from './helpers';

const App: React.FC = () => {
  return (
    <Component>
      <Routes />
    </Component>
  );
};

const Component = styled.main`
  width: 100%;
  height: 100vh;
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Style />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app'),
);

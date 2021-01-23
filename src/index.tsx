import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { style } from './helpers';

// import { Layout } from './components';
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

const Page = styled.div`
  padding: ${() => style.font.size.big};
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

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './components';
import { Routes, Style } from './helpers';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Style />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app'),
);

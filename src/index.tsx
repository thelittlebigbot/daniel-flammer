import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Routes, Style } from './helpers';

const App: React.FC = () => {
  return (
    <div>
      <Routes />
    </div>
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

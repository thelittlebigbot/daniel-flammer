import React from 'react';
import ReactDOM from 'react-dom';

import { Style } from './helpers';

const App: React.FC = () => {
  return (
    <div>
      <h1>Daniel Flammer</h1>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Style />
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);

// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Renderiza o componente App dentro do div com id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
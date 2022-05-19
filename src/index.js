import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

const body = ReactDOM.createRoot(document.querySelector('body'));
body.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
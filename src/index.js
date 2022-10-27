import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './index.styled';
import { App } from 'components/App';
import 'modern-normalize/modern-normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

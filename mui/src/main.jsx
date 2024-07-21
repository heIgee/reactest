import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.css';

const rootElem = document.querySelector('#root');

if (rootElem) {
  ReactDOM.createRoot(rootElem).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error('Root not found');
}


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Card from './Card';
import Car from './Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Card/>
    <Car/>
  </React.StrictMode>
);


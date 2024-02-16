import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WidthSetter from './component/WidthSetter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WidthSetter>
    <App />
  </WidthSetter>
);



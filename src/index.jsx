import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/tailwind.css'
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import * as React from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
  </React.StrictMode>
);
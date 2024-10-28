import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { app, analytics } from "./firebase" // Import Firebase

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
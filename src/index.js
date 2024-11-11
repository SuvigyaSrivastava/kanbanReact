// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import './App.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create a root

root.render(<App />); // Render the App component

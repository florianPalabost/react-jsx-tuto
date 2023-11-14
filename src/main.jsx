import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// root should be define in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
    // Strict Mode is for display some errors for development purposes
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

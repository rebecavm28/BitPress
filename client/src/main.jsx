import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import UserProvider from './context/UserContext'; // Importa UserProvider como componente predeterminado
import router from './router/router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        {router} {/* Renderiza tu enrutador dentro de UserProvider */}
      </UserProvider>
    </Router>
  </React.StrictMode>
);
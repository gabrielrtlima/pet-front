import React from 'react';
import ReactDOM from 'react-dom/client';
import {GlobalStyle} from "./GlobalStyle";
import {Header} from "./components/Header";
import { Home } from './pages/Home';
import { AtualizarDados } from './pages/AtualizarDados';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { App } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App />
    </React.StrictMode>
);

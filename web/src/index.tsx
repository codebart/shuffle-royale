import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Application} from './component/Application';
import './locale/i18n'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Application/>
    </React.StrictMode>
);
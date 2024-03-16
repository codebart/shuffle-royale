import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ErrorPage} from './ErrorPage';
import {CardComponent} from '../poker/Card';

export const Routing = () => (
    <Routes>
        <Route path={'/'} errorElement={<ErrorPage/>}/>
    </Routes>
);
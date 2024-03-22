import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ErrorPage} from './ErrorPage';
import {Layout} from '../shared/Layout';
import {Logo} from '../shared/Logo';
import {Account} from '../poker/Account';
import {Rooms} from '../poker/rooms/Rooms';
import {Room} from '../poker/Room';

export const Routing = () => (
    <Routes>
        <Route path={'/'} errorElement={<ErrorPage/>}>
            <Route path={'/rooms'} element={<RoomsRoute/>}/>
            <Route path={'/room/:id'} element={<RoomRoute/>}/>
        </Route>
    </Routes>
);

const RoomsRoute = () => (
    <Layout>
        <Logo/>
        <Account/>
        <Rooms/>
    </Layout>
)

const RoomRoute = () => (
    <Layout>
        <Logo/>
        <Account/>
        <Room/>
    </Layout>
)
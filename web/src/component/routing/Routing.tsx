import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ErrorPage} from './ErrorPage';
import {Layout} from '../shared/Layout';
import {Logo} from '../shared/Logo';
import {User} from '../poker/User';
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
        <User/>
        <Rooms/>
    </Layout>
)

const RoomRoute = () => (
    <Layout>
        <Logo/>
        <User/>
        <Room/>
    </Layout>
)
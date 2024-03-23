import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ErrorPage} from './ErrorPage';
import {Layout} from 'component/shared/Layout';
import {Logo} from 'component/shared/Logo';
import {Account} from 'component/poker/Account';
import {Rooms} from 'component/poker/rooms/Rooms';
import {Room} from 'component/poker/Room';

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
        <Account/>
        <Room/>
    </Layout>
)
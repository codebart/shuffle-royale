import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ErrorPage} from './ErrorPage';
import {Layout} from '../shared/Layout';
import {Logo} from '../shared/Logo';
import {User} from '../poker/User';
import {Rooms} from '../poker/rooms/Rooms';
import {Room} from '../poker/Room';
import {CardComponent} from '../poker/Card';
import {Card} from '../../model/Card';
const cards: Card[] = [
    {
        suit: 'clubs',
        rank: 2,
        shown: true,
    },
    {
        suit: 'clubs',
        rank: 3,
        shown: true,
    },
    {
        suit: 'clubs',
        rank: 4,
        shown: true,
    },
    {
        suit: 'clubs',
        rank: 5,
        shown: true,
    },
    {
        suit: 'clubs',
        rank: 6,
        shown: true,
    },
    {
        suit: 'clubs',
        rank: 7,
        shown: true,
    },
    {
        suit: 'clubs',
        rank: 8,
        shown: true,
    },
    {
        suit: 'clubs',
        rank: 9,
        shown: true,
    },
    {
        suit: 'clubs',
        rank: 10,
        shown: true,
    },
    {
        suit: 'diamonds',
        rank: 'K',
        shown: true,
    },
    {
        suit: 'hearts',
        rank: 7,
        shown: true,
    },
    {
        suit: 'spades',
        rank: 'A',
        shown: true,
    },
    {
        suit: 'hearts',
        rank: 'J',
        shown: true,
    },
    {
        suit: 'hearts',
        rank: 'Q',
        shown: true,
    },
    {
        suit: 'hearts',
        rank: 'K',
        shown: true,
    },
    {
        suit: 'hearts',
        rank: 'A',
        shown: true,
    }
]
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
        <Rooms rooms={[]}/>
    </Layout>
)

const RoomRoute = () => (
    <Layout>
        <Logo/>
        <User/>
        <Room/>
    </Layout>
)
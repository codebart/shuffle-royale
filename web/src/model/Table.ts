import {Card} from './Card';

export type TableState = {
    seatsCount: number;
    seats: Seat[];
    button: number;
    stage: Stage;
    cards: [Card, Card, Card, Card, Card] | [];
}

export enum Stage {
    WAITING = 'WAITING',
    PRE_FLOP = 'PRE_FLOP',
    FLOP = 'FLOP',
    TURN = 'TURN',
    RIVER = 'RIVER'
}

export type Player = {
    name: string;
    stack: number;
    avatar?: string;
}

export enum PlayerAction {
    NONE = 'NONE',
    FOLD = 'FOLD',
    CHECK = 'CHECK',
    BET = 'BET',
    CALL = 'CALL',
    RAISE = 'RAISE',
    ALL_IN = 'ALL_IN'
}

export type Seat = PlayerSeat | FreeSeat;

export type FreeSeat = {
    occupied: false;
}

export type PlayerSeat = {
    occupied: true;
    player: Player;
    cards: [Card, Card];
    action: PlayerAction;
    actionValue: number | null;
}
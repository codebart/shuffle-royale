import {Card} from './card.model';
import {PlayerAction} from './betting.model';

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
    avatar?: string;
}

export type Seat = PlayerSeat | FreeSeat;

export type FreeSeat = {
    occupied: false;
}

export type PlayerSeat = {
    occupied: true;
    player: Player;
    stack: number;
    cards: [Card, Card];
    action: PlayerAction;
    actionValue: number | null;
}
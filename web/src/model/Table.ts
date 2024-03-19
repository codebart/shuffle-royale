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

export enum PlayerActionType {
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
}

export type PlayerAction = None | Fold | Call | Check | Bet | Raise | AllIn;

export interface PlayerActionBase {
    type: PlayerActionType;
}

export interface None extends PlayerActionBase {
    type: PlayerActionType.NONE;
}

export interface Fold extends PlayerActionBase {
    type: PlayerActionType.FOLD;
}

export interface Call extends PlayerActionBase {
    type: PlayerActionType.CALL;
}

export interface Check extends PlayerActionBase {
    type: PlayerActionType.CHECK;
}

export interface Bet extends PlayerActionBase {
    type: PlayerActionType.BET;
    value: number;
}

export interface Raise extends PlayerActionBase {
    type: PlayerActionType.RAISE;
    value: number;
}

export interface AllIn extends PlayerActionBase {
    type: PlayerActionType.ALL_IN;
    value: number;
}
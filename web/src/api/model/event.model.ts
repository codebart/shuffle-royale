export enum GameEventType {
    PLAYER_TOOK_SEAT = 'PLAYER_TOOK_SEAT',
    PLAYER_TOOK_ACTION = 'PLAYER_TOOK_ACTION',
    PLAYER_SHOWED_CARDS = 'PLAYER_SHOWED_CARDS',
    PLAYER_MUCKED_CARDS = 'PLAYER_MUCKED_CARDS',
    PLAYER_LEFT_SEAT = 'PLAYER_LEFT_SEAT',
    BETTING_PHASE_STARTED = 'BETTING_PHASE_STARTED',
    ROUND_ENDED = 'ROUND_ENDED',
}

export interface GameEvent {
    type: GameEventType;
}

export interface PlayerTookSeatEvent extends GameEvent {
    type: GameEventType.PLAYER_TOOK_SEAT;
    seat: number;
    player: PlayerInfo;
}

export interface PlayerTookActionEvent extends GameEvent {
    type: GameEventType.PLAYER_TOOK_ACTION;
    seat: number;
    action: PlayerAction;
    value?: number;
    nextActionSeat: number;
}

export interface PlayerShowedCardsEvent extends GameEvent {
    type: GameEventType.PLAYER_SHOWED_CARDS;
    seat: number;
    cards: Card[];
}

export interface PlayerMuckedCardsEvent extends GameEvent {
    type: GameEventType.PLAYER_MUCKED_CARDS;
    seat: number;
}

export interface PlayerLeftSeatEvent extends GameEvent {
    type: GameEventType.PLAYER_LEFT_SEAT;
    seat: number;
}

export interface BettingPhaseStartedEvent extends GameEvent {
    type: GameEventType.BETTING_PHASE_STARTED;
    phase: BettingPhase;
    cards: Card[];
    nextActionSeat: number;
}

export interface RoundEndedEvent extends GameEvent {
    type: GameEventType.ROUND_ENDED;
    winningHands: WinningHand[];
    prizes: PotPrize[];
    nextDealerButtonSeat: number;
}

export type PlayerInfo = {
    name: string;
    chips: number;
    avatar?: string;
}

export enum BettingPhase {
    PRE_FLOP = 'PRE_FLOP',
    FLOP = 'FLOP',
    TURN = 'TURN',
    RIVER = 'RIVER'
}

export type Card = {
    suit: Suit;
    rank: Rank;
}

export type WinningHand = {
    seat: number;
    communityCards: Card[];
    hand: Card[];
}

export type PotPrize = {
    seat: number;
    pot: number;
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

export type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades';

export type Rank = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'J' | 'Q' | 'K' | 'A';

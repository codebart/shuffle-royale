export enum PlayerAction {
    NONE = 'NONE',
    FOLD = 'FOLD',
    CHECK = 'CHECK',
    BET = 'BET',
    CALL = 'CALL',
    RAISE = 'RAISE',
    ALL_IN = 'ALL_IN'
}

export enum AutoBetAction {
    FOLD = 'FOLD',
    CHECK_FOLD = 'CHECK_FOLD',
    CHECK = 'CHECK',
    CALL_ANY = 'CALL_ANY'
}

export type BettingOption = {
    action: PlayerAction;
    min?: number;
    max?: number | 'all-in';
}

export type BettingOptions = {
    pot: number;
    actions: BettingOption[];
}

export type BettingActionForm = {
    action?: PlayerAction;
    value?: number | 'all-in';
}

export const initialBettingActionForm: BettingActionForm = {
    value: 0
};
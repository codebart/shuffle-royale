export type TakeActionRequest = {
    roomId: number;
    type: ActionType;
    value?: number;
}

export enum ActionType {
    NONE = 'NONE',
    FOLD = 'FOLD',
    CHECK = 'CHECK',
    BET = 'BET',
    CALL = 'CALL',
    RAISE = 'RAISE',
    ALL_IN = 'ALL_IN'
}

import React from 'react';
import {TakeSeat} from './TakeSeat';
import {PlayerSeatComponent} from './PlayerSeat';
import {Seat} from 'model/table.model';

type SeatProps = {
    roomId: number;
    index: number;
    seat: Seat;
}

export const SeatComponent = ({seat, index, roomId}: SeatProps) => {
    if (seat.occupied) {
        return <PlayerSeatComponent seat={seat}/>;
    }
    return <TakeSeat seatIndex={index} roomId={roomId}/>;
};

import React from 'react';
import {Seat} from '../../../model/table.model';
import {TakeSeat} from './TakeSeat';
import {PlayerSeatComponent} from './PlayerSeat';

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

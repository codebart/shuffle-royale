import {useTranslation} from 'react-i18next';
import {useTakeSeat} from '../../../api/endpoint/takeSeat.post';
import {Button} from '../../ui/Button';
import React from 'react';

export const TakeSeat = ({seatIndex, roomId}: { seatIndex: number, roomId: number }) => {
    const {t} = useTranslation();
    const takeSeat = useTakeSeat({
        roomId,
        seatIndex
    })
    return (
        <Button onClick={() => takeSeat.refetch()}>
            {t('room.seat.take')}
        </Button>
    );
};

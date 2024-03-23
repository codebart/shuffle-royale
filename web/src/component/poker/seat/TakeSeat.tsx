import {useTranslation} from 'react-i18next';
import {useTakeSeat} from 'api/endpoint/takeSeat.post';
import {Button} from 'component/ui/Button';
import React from 'react';
import styled from 'styled-components';

export const TakeSeat = ({seatIndex, roomId}: { seatIndex: number, roomId: number }) => {
    const {t} = useTranslation();
    const takeSeat = useTakeSeat({
        roomId,
        seatIndex
    })
    return (
        <Button onClick={() => takeSeat.refetch()}>
            <TakeSeatText>{t('room.seat.take')}</TakeSeatText>
        </Button>
    );
};

const TakeSeatText = styled.span`
  filter: grayscale(1);
`

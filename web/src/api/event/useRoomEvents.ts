import {rootUrl} from '../httpApiRoutes';
import {useState} from 'react';
import {GameEventType} from '../model/event.model';

type RoomEventsControl = {
    connecting: boolean;
    ready: boolean;
    closed: boolean;
    onEvent<E extends GameEventType, T extends { type: E }>(event: E): (event: T) => void;
}

export const useRoomEvents = (roomId: number) => {
    const [connectionState, setConnectionState] = useState();
    const eventSource = new EventSource(`${rootUrl}/room/${roomId}/events`);
    eventSource.addEventListener('message', (event) => {

    });
}
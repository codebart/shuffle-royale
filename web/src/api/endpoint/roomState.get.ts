import {rootUrl} from 'api/httpApiRoutes';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {ApiError} from 'api/apiError';
import {get} from 'api/httpApi';
import {RoomStateRequest, RoomStateResponse} from 'api/model/roomState.model';

export const useRoomState = (request: RoomStateRequest): UseQueryResult<RoomStateResponse, ApiError> => {
    return useQuery<RoomStateResponse, ApiError>({
        queryKey: ['request', request],
        retry: false,
        queryFn: () => get(`${rootUrl}/room/${request.roomId}`),
    });
}
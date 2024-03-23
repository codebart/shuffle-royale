import {post} from 'api/httpApi';
import {rootUrl} from 'api/httpApiRoutes';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {CreateRoomRequest, CreateRoomResponse} from 'api/model/createRoom.model';
import {ApiError} from 'api/apiError';

export const useCreateRoom = (request: CreateRoomRequest): UseQueryResult<CreateRoomResponse, ApiError> => {
    return useQuery<CreateRoomResponse, ApiError>({
        queryKey: ['request', request],
        enabled: false,
        retry: false,
        queryFn: () => post(`${rootUrl}/room`, request),
    });
}
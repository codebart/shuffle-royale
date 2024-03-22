import {post} from '../httpApi';
import {rootUrl} from '../httpApiRoutes';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {CreateRoomRequest, CreateRoomResponse} from '../model/createRoom.model';
import {ApiError} from '../apiError';

export const useCreateRoom = (request: CreateRoomRequest): UseQueryResult<CreateRoomResponse, ApiError> => {
    return useQuery<CreateRoomResponse, ApiError>({
        queryKey: ['request', request],
        enabled: false,
        retry: false,
        queryFn: () => post(`${rootUrl}/room`, request),
    });
}
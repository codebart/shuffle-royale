import {post} from '../httpApi';
import {rootUrl} from '../httpApiRoutes';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {ApiError} from '../apiError';
import {EmptyResponse} from '../model/response.model';
import {LeaveRoomRequest} from '../model/leaveRoom.model';

export const useLeaveRoom = (request: LeaveRoomRequest): UseQueryResult<EmptyResponse, ApiError> => {
    return useQuery<EmptyResponse, ApiError>({
        queryKey: ['request', request],
        enabled: false,
        retry: false,
        queryFn: () => post(`${rootUrl}/room/${request.roomId}/leave`, request),
    });
}
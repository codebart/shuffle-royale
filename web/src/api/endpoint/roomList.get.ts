import {rootUrl} from '../httpApiRoutes';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {ApiError} from '../apiError';
import {RoomListRequest, RoomListResponse} from '../model/roomList.model';
import {get} from '../httpApi';
import {defaultPage} from '../model/pagination.model';

export const useRoomList = (request: RoomListRequest): UseQueryResult<RoomListResponse, ApiError> => {
    return useQuery<RoomListResponse, ApiError>({
        queryKey: ['request', request],
        retry: false,
        initialData: {
            rooms: [],
            page: defaultPage
        },
        queryFn: () => get(`${rootUrl}/rooms?${queryParams(request.filter)}&${queryParams(request.sort)}`),
    });
}

const queryParams = (object: any): string => {
    return Object.entries(object).map(([key, value]) => `${key}=${value}`).join('&');
}
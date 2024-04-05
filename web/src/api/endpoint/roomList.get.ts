import {rootUrl} from 'api/httpApiRoutes';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {ApiError} from 'api/apiError';
import {RoomListRequest, RoomListResponse} from 'api/model/roomList.model';
import {get} from 'api/httpApi';
import {defaultPage} from 'api/model/pagination.model';

export const useRoomList = (request: RoomListRequest): UseQueryResult<RoomListResponse, ApiError> => {
    return useQuery<RoomListResponse, ApiError>({
        queryKey: ['request', request],
        retry: false,
        initialData: {
            rooms: [],
            page: defaultPage
        },
        queryFn: () => get(`${rootUrl}/rooms?${[...queryParams(request.filter), ...queryParams(request.sort), ...queryParams(request.pagination)].join('&')}`),
    });
}

const queryParams = (object: any): string[] => {
    return Object.entries(object)
        .filter(([key, value]) => Boolean(value))
        .map(([key, value]) => `${key}=${value}`);
}
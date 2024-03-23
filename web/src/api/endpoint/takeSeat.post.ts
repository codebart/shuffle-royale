import {post} from '../httpApi';
import {rootUrl} from '../httpApiRoutes';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {ApiError} from '../apiError';
import {TakeSeatRequest} from '../model/takeSeat.model';
import {EmptyResponse} from '../model/response.model';

export const useTakeSeat = (request: TakeSeatRequest): UseQueryResult<EmptyResponse, ApiError> => {
    return useQuery<EmptyResponse, ApiError>({
        queryKey: ['request', request],
        enabled: false,
        retry: false,
        queryFn: () => post(`${rootUrl}/room/${request.roomId}/seat/${request.seatIndex}/take`, request),
    });
}
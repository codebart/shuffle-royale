import {post} from 'api/httpApi';
import {rootUrl} from 'api/httpApiRoutes';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {ApiError} from 'api/apiError';
import {TakeSeatRequest} from 'api/model/takeSeat.model';
import {EmptyResponse} from 'api/model/response.model';

export const useTakeSeat = (request: TakeSeatRequest): UseQueryResult<EmptyResponse, ApiError> => {
    return useQuery<EmptyResponse, ApiError>({
        queryKey: ['request', request],
        enabled: false,
        retry: false,
        queryFn: () => post(`${rootUrl}/room/${request.roomId}/seat/${request.seatIndex}/take`, request),
    });
}
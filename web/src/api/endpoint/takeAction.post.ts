import {post} from 'api/httpApi';
import {rootUrl} from 'api/httpApiRoutes';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {ApiError} from 'api/apiError';
import {EmptyResponse} from 'api/model/response.model';
import {TakeActionRequest} from '../model/takeAction.model';

export const useTakeAction = (request: TakeActionRequest): UseQueryResult<EmptyResponse, ApiError> => {
    return useQuery<EmptyResponse, ApiError>({
        queryKey: ['request', request],
        enabled: false,
        retry: false,
        queryFn: () => post(`${rootUrl}/room/${request.roomId}/action/${request.type}${request.value && `?value=${request.value}`}`, request),
    });
}
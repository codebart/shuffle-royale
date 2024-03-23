import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {ApiError} from 'api/apiError';
import {get} from 'api/httpApi';
import {rootUrl} from 'api/httpApiRoutes';
import {AccountInfoResponse} from 'api/model/accountInfo.model';

export const useAccountInfo = (): UseQueryResult<AccountInfoResponse, ApiError> => {
    return useQuery<AccountInfoResponse, ApiError>({
        queryKey: ['accountInfo'],
        refetchInterval: 15000,
        retry: false,
        queryFn: () => get(`${rootUrl}/account`),
    });
}
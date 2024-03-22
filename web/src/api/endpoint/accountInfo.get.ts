import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {ApiError} from '../apiError';
import {get} from '../httpApi';
import {rootUrl} from '../httpApiRoutes';
import {AccountInfoResponse} from '../model/accountInfo.model';

export const useAccountInfo = (): UseQueryResult<AccountInfoResponse, ApiError> => {
    return useQuery<AccountInfoResponse, ApiError>({
        queryKey: ['accountInfo'],
        refetchInterval: 15000,
        retry: false,
        queryFn: () => get(`${rootUrl}/account`),
    });
}
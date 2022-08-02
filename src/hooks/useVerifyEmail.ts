import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const useVerifyEmail = <T>(endpoint: string, data: T) => {
    return useQuery('verify-email', () =>
        finalFetchWithoutToken(endpoint, data, 'POST')
    );
};

export default useVerifyEmail;

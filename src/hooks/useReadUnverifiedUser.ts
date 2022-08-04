import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const useReadUnverifiedUser = <T>(endpoint: string, data: T) => {
    return useQuery(['read-unverified-user', endpoint], () =>
        finalFetchWithoutToken(endpoint, data, 'POST')
    );
};

export default useReadUnverifiedUser;

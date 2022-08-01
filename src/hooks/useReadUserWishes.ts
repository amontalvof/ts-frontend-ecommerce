import { useQuery } from 'react-query';
import { finalFetchWithToken } from '../helpers/fetch';

const useReadUserWishes = (endpoint: string) => {
    return useQuery('read-user-wishes', () => finalFetchWithToken(endpoint));
};

export default useReadUserWishes;

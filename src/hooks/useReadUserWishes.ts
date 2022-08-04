import { useQuery } from 'react-query';
import { finalFetchWithToken } from '../helpers/fetch';

const readUserWishes = ({ queryKey }: { queryKey: string[] }) => {
    const [, endpoint] = queryKey;
    return finalFetchWithToken(endpoint);
};

const useReadUserWishes = (endpoint: string) => {
    return useQuery(['read-user-wishes', endpoint], readUserWishes);
};

export default useReadUserWishes;

import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const useReadProducts = <T>(endpoint: string, data: T, criteria: any[]) => {
    return useQuery(['read-products', ...criteria], () =>
        finalFetchWithoutToken(endpoint, data, 'POST')
    );
};

export default useReadProducts;

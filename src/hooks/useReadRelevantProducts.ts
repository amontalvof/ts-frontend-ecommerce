import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const useReadRelevantProducts = (endpoint: string) => {
    return useQuery('read-relevant-products', () =>
        finalFetchWithoutToken(endpoint)
    );
};

export default useReadRelevantProducts;

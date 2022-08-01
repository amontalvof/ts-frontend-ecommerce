import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const useReadRelatedProducts = <T>(endpoint: string, data: T) => {
    return useQuery('read-related-products', () =>
        finalFetchWithoutToken(endpoint, data, 'POST')
    );
};

export default useReadRelatedProducts;

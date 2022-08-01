import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const useReadProduct = (endpoint: string) => {
    return useQuery('read-product', () => finalFetchWithoutToken(endpoint));
};

export default useReadProduct;

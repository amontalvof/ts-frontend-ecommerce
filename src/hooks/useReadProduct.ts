import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const readProduct = ({ queryKey }: { queryKey: string[] }) => {
    const [, endpoint] = queryKey;
    return finalFetchWithoutToken(endpoint);
};

const useReadProduct = (endpoint: string) => {
    return useQuery(['read-product', endpoint], readProduct);
};

export default useReadProduct;

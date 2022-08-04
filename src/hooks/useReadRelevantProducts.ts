import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const readRelevantProducts = ({ queryKey }: { queryKey: string[] }) => {
    const [, endpoint] = queryKey;
    return finalFetchWithoutToken(endpoint);
};

const useReadRelevantProducts = (endpoint: string) => {
    return useQuery(['read-relevant-products', endpoint], readRelevantProducts);
};

export default useReadRelevantProducts;

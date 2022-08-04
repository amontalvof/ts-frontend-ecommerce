import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const readProductComments = ({ queryKey }: { queryKey: string[] }) => {
    const [, endpoint] = queryKey;
    return finalFetchWithoutToken(endpoint);
};

const useReadProductComments = (endpoint: string) => {
    return useQuery(['read-product-comments', endpoint], readProductComments);
};

export default useReadProductComments;

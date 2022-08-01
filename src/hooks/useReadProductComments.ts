import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const useReadProductComments = (endpoint: string) => {
    return useQuery('read-product-comments', () =>
        finalFetchWithoutToken(endpoint)
    );
};

export default useReadProductComments;

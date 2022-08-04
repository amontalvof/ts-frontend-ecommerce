import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const useUpdateProductViews = <T>(endpoint: string, data: T) => {
    return useQuery(['update-product-views', endpoint], () =>
        finalFetchWithoutToken(endpoint, data, 'PUT')
    );
};

export default useUpdateProductViews;

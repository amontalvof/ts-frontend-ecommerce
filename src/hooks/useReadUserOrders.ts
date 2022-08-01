import { useQuery } from 'react-query';
import { finalFetchWithToken } from '../helpers/fetch';

const useReadUserOrders = (endpoint: string) => {
    return useQuery('read-user-orders', () => finalFetchWithToken(endpoint));
};

export default useReadUserOrders;

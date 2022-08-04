import { useQuery } from 'react-query';
import { finalFetchWithToken } from '../helpers/fetch';

const readUserOrders = ({ queryKey }: { queryKey: string[] }) => {
    const [, endpoint] = queryKey;
    return finalFetchWithToken(endpoint);
};

const useReadUserOrders = (endpoint: string) => {
    return useQuery(['read-user-orders', endpoint], readUserOrders);
};

export default useReadUserOrders;

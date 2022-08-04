import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const readBanner = ({ queryKey }: { queryKey: string[] }) => {
    const [, endpoint] = queryKey;
    return finalFetchWithoutToken(endpoint);
};

const useReadBanner = (endpoint: string) => {
    return useQuery(['read-banner', endpoint], readBanner);
};

export default useReadBanner;

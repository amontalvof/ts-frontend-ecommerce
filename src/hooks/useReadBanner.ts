import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const useReadBanner = (endpoint: string) => {
    return useQuery('read-banner', () => finalFetchWithoutToken(endpoint));
};

export default useReadBanner;

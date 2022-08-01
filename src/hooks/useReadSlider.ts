import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const useReadSlider = (endpoint: string) => {
    return useQuery('read-slider', () => finalFetchWithoutToken(endpoint));
};

export default useReadSlider;

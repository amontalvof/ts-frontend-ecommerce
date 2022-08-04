import { useQuery } from 'react-query';
import { finalFetchWithoutToken } from '../helpers/fetch';

const readSlider = ({ queryKey }: { queryKey: string[] }) => {
    const [, endpoint] = queryKey;
    return finalFetchWithoutToken(endpoint);
};

const useReadSlider = (endpoint: string) => {
    return useQuery(['read-slider', endpoint], readSlider);
};

export default useReadSlider;

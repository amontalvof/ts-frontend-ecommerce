import { useCallback, useEffect, useState } from 'react';

interface IUseAsyncReturn {
    loading: boolean;
    error?: any;
    value?: any;
}
type TDependencies = any[];
const useAsync = (
    callback: () => Promise<any>,
    dependencies: TDependencies = []
): IUseAsyncReturn => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [value, setValue] = useState();

    const callbackMemoized = useCallback(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    useEffect(() => {
        callbackMemoized();
    }, [callbackMemoized]);

    return { loading, error, value };
};

export default useAsync;

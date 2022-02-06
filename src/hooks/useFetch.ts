import useAsync from './useAsync';

interface IUseFetchReturn {
    loading: boolean;
    error?: any;
    value?: any;
}

const DEFAULT_OPTIONS = {
    headers: { 'Content-Type': 'application/json' },
};

const useFetch = (
    url: string,
    options = {},
    dependencies = []
): IUseFetchReturn => {
    return useAsync(() => {
        return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
            if (res.ok) return res.json();
            return res.json().then((json) => Promise.reject(json));
        });
    }, dependencies);
};

export default useFetch;

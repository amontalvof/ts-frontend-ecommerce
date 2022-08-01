import { baseUrl } from '../constants';

export const fetchWithoutToken = <T>(
    endpoint: string,
    data?: T,
    method = 'GET'
): Promise<Response> => {
    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    }
};

export const fetchWithToken = <T>(
    endpoint: string,
    data?: T,
    method = 'GET'
): Promise<Response> => {
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';
    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'x-token': token,
            },
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'x-token': token,
            },
            body: JSON.stringify(data),
        });
    }
};

export const finalFetchWithoutToken = async <T>(
    endpoint: string,
    data?: T,
    method = 'GET'
) => {
    const resp = await fetchWithoutToken(endpoint, data, method);
    return await resp.json();
};

export const finalFetchWithToken = async <T>(
    endpoint: string,
    data?: T,
    method = 'GET'
) => {
    const resp = await fetchWithToken(endpoint, data, method);
    return await resp.json();
};

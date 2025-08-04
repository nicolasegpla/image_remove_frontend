import { useState } from 'react';

import postServiceLogin from '@/services/api/httpservices/postServiceLogin';

export const usePost = () => {
    const [dataRes, setDataRes] = useState<object | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const executePost = async (url: string, data: object, signalAbort?: AbortSignal) => {
        try {
            setLoading(true);
            setError(null);
            const result = await postServiceLogin({ signalAbort, data, url });
            setDataRes(result);
            return result;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
            throw err; // Re-throw the error for further handling if needed
        } finally {
            setLoading(false);
        }
    };

    return {
        dataRes,
        error,
        loading,
        executePost,
    };
};

import { useEffect, useState } from 'react';

import { getServiceTokenPerUser } from '@/services/api/httpservices/getServiceTokenPerUser';

function useGetTokens(userId: string, url: string) {
    const [dataTokens, setDataTokens] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getTokens = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getServiceTokenPerUser({ userId, url });

                console.log('Response from getServiceTokenPerUser:', response);
                setDataTokens(response);
                return response;
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                throw err; // Re-throw the error for further handling if needed
            } finally {
                setLoading(false);
            }
        };
        getTokens(); // Replace with actual userId and url
    }, []);

    const refresh = async () => {
        try {
            setLoading(true);
            setError(null);
            const result = await getServiceTokenPerUser({ userId, url });
            setDataTokens(result);
        } catch (err) {
            setError(
                'error' in (err as Error) ? (err as Error).message : 'An unknown error occurred'
            );
        } finally {
            setLoading(false);
        }
    };
    return {
        dataTokens,
        error,
        loading,
        refresh,
    };
}

export { useGetTokens };

import { useEffect, useState } from 'react';

interface User {
    id: string;
    email: string;
    id_api: string;
    status: boolean;
    tokens: number;
    type_user: string;
    country: string;
}

function useGetAllUsers(url: string) {
    const [dataUsers, setDataUsers] = useState<User[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add authorization headers if needed
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();
                setDataUsers(data);
            } catch (err) {
                console.error('Failed to fetch users:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const refresh = async () => {
        try {
            setLoading(true);
            setError(false);
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Add authorization headers if needed
                },
            });
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            setDataUsers(data);
        } catch (err) {
            console.error('Failed to fetch users:', err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return {
        dataUsers,
        error,
        loading,
        refresh,
    }; // Hook implementation
}

export { useGetAllUsers };

import { useState } from 'react';

import postService from '@/services/api/httpservices/postService';

interface UsePostBlobImageProps {
    data: File | null;
    setStateImageUrl: (imageUrl: string) => void;
    signalAbort?: AbortSignal;
    url: string;
    token?: string; // Optional token for authorization
}

const usePostBlobImage = ({
    data,
    setStateImageUrl,
    signalAbort,
    url,
    token,
}: UsePostBlobImageProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const postBlobImage = async (refresh: () => void) => {
        setLoading(true);
        try {
            const response = await postService({ data, signalAbort, url, token });
            setStateImageUrl(response);
            refresh();
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An unexpected error occurred');
            setTimeout(() => {
                setError(null);
            }, 5000); // Clear error after 5 seconds
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, postBlobImage };
};

export default usePostBlobImage;

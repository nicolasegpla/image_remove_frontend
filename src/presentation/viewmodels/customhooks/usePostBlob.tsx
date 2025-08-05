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
    const [error, setError] = useState<boolean>(false);

    const postBlobImage = async (refresh: () => void) => {
        setLoading(true);
        try {
            const response = await postService({ data, signalAbort, url, token });
            setStateImageUrl(response);
            refresh();
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, postBlobImage };
};

export default usePostBlobImage;

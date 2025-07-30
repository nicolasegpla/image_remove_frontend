import { useState } from 'react';

import postService from '@/services/api/httpservices/postService';

interface UsePostBlobImageProps {
    data: File | null;
    setStateImageUrl: (imageUrl: string) => void;
    signalAbort?: AbortSignal;
    url: string;
}

const usePostBlobImage = ({ data, setStateImageUrl, signalAbort, url }: UsePostBlobImageProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const postBlobImage = async () => {
        setLoading(true);
        try {
            const response = await postService({ data, signalAbort, url });
            setStateImageUrl(response);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, postBlobImage };
};

export default usePostBlobImage;

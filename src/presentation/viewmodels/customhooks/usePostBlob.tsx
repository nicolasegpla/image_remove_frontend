import { useState } from 'react';

import postService from '@/services/api/httpservices/postService';

interface UsePostBlobImageProps {
    data: File | null;
    setStateImageUrl: (imageUrl: string) => void;
    signalAbort?: AbortSignal;
}

const usePostBlobImage = ({ data, setStateImageUrl, signalAbort }: UsePostBlobImageProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const postBlobImage = async () => {
        setLoading(true);
        try {
            const response = await postService({ data, signalAbort });
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

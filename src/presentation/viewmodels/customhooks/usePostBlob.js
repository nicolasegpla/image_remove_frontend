import { useState } from 'react';
import postService from '@/services/api/httpservices/postService';
const usePostBlobImage = ({ data, setStateImageUrl, signalAbort }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const postBlobImage = async () => {
        setLoading(true);
        try {
            const response = await postService({ data, signalAbort });
            setStateImageUrl(response);
        }
        catch (error) {
            setError(true);
        }
        finally {
            setLoading(false);
        }
    };
    return { loading, error, postBlobImage };
};
export default usePostBlobImage;

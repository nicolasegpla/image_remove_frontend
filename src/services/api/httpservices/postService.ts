import { adaptBlobToUrl, jpegOnlyInterceptor } from '@/utils';
import { urlFetchPost } from '@/constants';

interface PostServiceProps {
    signalAbort?: AbortSignal;
    data: File | null;
    url: string;
}

const postService = async ({ signalAbort, data, url }: PostServiceProps) => {
    try {
        if (!(data instanceof File)) {
            throw new Error('El valor recibido no es un archivo válido.');
        }
        const isValid = jpegOnlyInterceptor(data);
        if (!isValid) {
            throw new Error('📸 Formato de archivo no permitido. Solo JPEG.');
        }
        const formData = new FormData();
        formData.append('file', data);
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
            signal: signalAbort,
        });

        if (!response.ok) {
            switch (response.status) {
                case 400:
                    throw new Error('❗ Solicitud incorrecta (400)');
                case 401:
                    throw new Error('🔒 No autorizado (401) - Token expirado o inválido.');
                case 403:
                    throw new Error('⛔ Prohibido (403) - No tienes permisos.');
                case 404:
                    throw new Error('🕵️‍♂️ Recurso no encontrado (404).');
                case 500:
                    throw new Error('💥 Error interno del servidor (500).');
                default:
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
        }
        const blob = await response.blob();
        const imageUrl = adaptBlobToUrl(blob);
        return imageUrl;
    } catch (error: unknown) {
        if (error instanceof DOMException && error.name === 'AbortError') {
            throw new DOMException('Petición abortada', 'AbortError');
        }
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Error desconocido');
    }
};

export default postService;

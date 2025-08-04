import { dataTypeInterceptor } from '@/utils';

interface PostServiceProps {
    signalAbort?: AbortSignal;
    data: object | null;
    url: string;
}

const postServiceLogin = async ({ signalAbort, data, url }: PostServiceProps) => {
    try {
        if (!(data instanceof Object) || data === null) {
            throw new Error('El valor recibido no es un archivo válido.');
        }
        const isValid = dataTypeInterceptor(data);
        if (!isValid) {
            throw new Error('📸 Formato de archivo no permitido. Solo recibe objetos');
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            signal: signalAbort,
        });

        const responseText = await response.text();
        console.log('Raw response text:', responseText);

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

        try {
            return JSON.parse(responseText);
        } catch (parseError) {
            console.error('Failed to parse response as JSON:', parseError);
            console.error('Response text was:', responseText);
            throw new Error('Invalid JSON response from server');
        }
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

export default postServiceLogin;

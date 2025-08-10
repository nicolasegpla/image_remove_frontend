interface User {
    url: string; // Add other user properties as needed
}

export const getAllUser = async ({ url }: User) => {
    try {
        const response = await fetch(url);

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

        const data = await response.json();
        console.log('User data:', data);
        return data;
    } catch (error) {
        console.error('Failed to fetch users:', error);
        throw error;
    }
};

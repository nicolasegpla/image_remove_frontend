/**
 * Interceptor para validar un objeto antes de ser procesado.
 * Retorna true si todas las propiedades tienen valor (no null, undefined o string vacío).
 */
export function dataTypeInterceptor<T extends object>(obj: T): boolean {
    for (const key in obj) {
        const value = obj[key];
        if (
            value === null ||
            value === undefined ||
            (typeof value === 'string' && value.trim() === '')
        ) {
            return false;
        }
    }
    return true;
}

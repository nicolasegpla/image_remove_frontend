export type FileInterceptor = (file: File) => boolean;

export const jpegOnlyInterceptor: FileInterceptor = (file) => {
    const allowedType = 'image/jpeg';
    const isValid = file.type === allowedType;

    if (!isValid) {
        console.warn(`El archivo "${file.name}" no es una imagen JPEG válida.`);
    }

    return isValid;
};

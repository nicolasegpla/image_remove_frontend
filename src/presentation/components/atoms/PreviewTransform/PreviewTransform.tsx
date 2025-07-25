import './preview-transform.scss';

interface PreviewTransformProps {
    urlImage: string;
    text?: string;
}

export function PreviewTransform({ urlImage, text }: PreviewTransformProps) {
    return (
        <div className="preview-transform">
            {urlImage && <img src={urlImage} alt="Preview" className="preview-transform__image" />}
            {!urlImage && <p>{text ? text : 'No image to show, please transform an image.'}</p>}
        </div>
    );
}

import './preview-transform.scss';

interface PreviewTransformProps {
    urlImage: string;
}

export function PreviewTransform({ urlImage }: PreviewTransformProps) {
    return (
        <div className="preview-transform">
            {urlImage && <img src={urlImage} alt="Preview" className="preview-transform__image" />}
            {!urlImage && <p>No image to show, please transform an image.</p>}
        </div>
    );
}

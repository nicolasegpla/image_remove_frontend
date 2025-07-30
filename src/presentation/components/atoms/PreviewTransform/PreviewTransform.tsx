import './preview-transform.scss';

interface PreviewTransformProps {
    urlImage: string;
    text?: string;
    title?: string;
    description?: string;
}

export function PreviewTransform({ urlImage, text, title, description }: PreviewTransformProps) {
    return (
        <div className="preview-transform">
            {urlImage && <img src={urlImage} alt="Preview" className="preview-transform__image" />}
            {!urlImage && (
                <div className="preview-image__title">
                    <h2>{title ? title : 'Preview image original'}</h2>
                    <p>
                        {description
                            ? description
                            : 'Here you can see the image you have selected.'}
                    </p>
                    <p>{text ? text : 'No image to show, please transform an image.'}</p>
                </div>
            )}
        </div>
    );
}

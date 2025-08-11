import { PencilIcon } from '@heroicons/react/24/outline';
import './button-edit-image.scss';

interface ButtonEditImageProps {
    onClick: () => void;
}

export function ButtonEditImage({ onClick }: ButtonEditImageProps) {
    return (
        <button onClick={onClick} className="button-edit-image">
            <PencilIcon className="button-edit-image__icon" />
        </button>
    );
}

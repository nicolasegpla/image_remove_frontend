import { XMarkIcon } from '@heroicons/react/24/outline';
import './button-closed.scss';

interface BUttonClosedProps {
    onClick: () => void;
}

export function BUttonClosed({ onClick }: BUttonClosedProps) {
    return (
        <button className="button-closed" onClick={onClick}>
            <XMarkIcon className="button-closed__icon" />
        </button>
    );
}

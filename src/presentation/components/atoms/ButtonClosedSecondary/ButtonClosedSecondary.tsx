import { XMarkIcon } from '@heroicons/react/24/outline';
import './button-closed-secondary.scss';

interface ButtonClosedSecondaryProps {
    onClick: () => void;
}

export function ButtonClosedSecondary({ onClick }: ButtonClosedSecondaryProps) {
    return (
        <button onClick={onClick} className="button-closed-secondary">
            <XMarkIcon className="button-closed-secondary__icon" />
        </button>
    );
}

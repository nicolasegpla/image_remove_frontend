import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import './button-mini-menu.scss';

interface ButtonMiniMenuProps {
    onClick: () => void;
}

export function ButtonMiniMenu({ onClick }: ButtonMiniMenuProps) {
    return (
        <button onClick={onClick} className="button-mini-menu">
            <EllipsisHorizontalIcon className="button-mini-menu__icon" />
        </button>
    );
}

import { InformationCircleIcon } from '@heroicons/react/24/outline';
import './infobutton.scss';

interface InfobuttonProps {
    onClick: () => void;
}

export function Infobutton({ onClick }: InfobuttonProps) {
    return (
        <button className="infobutton" onClick={onClick}>
            <InformationCircleIcon className="infobutton__icon" />
        </button>
    );
}

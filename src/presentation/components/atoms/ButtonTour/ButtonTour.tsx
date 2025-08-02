import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import './button-tour.scss';

interface ButtonTourProps {
    textButton: string;
    onClick: () => void;
}

export function ButtonTour({ textButton, onClick }: ButtonTourProps) {
    return (
        <button className="button-tour" onClick={onClick}>
            <p>{textButton}</p>
            <ArrowLongRightIcon className="button-tour__icon" />
        </button>
    );
}

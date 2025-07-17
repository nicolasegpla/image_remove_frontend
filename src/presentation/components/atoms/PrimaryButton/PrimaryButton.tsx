import './primary-button.scss';

interface PrimaryButtonProps {
    textButton: string;
    onClick: () => void;
}

export function PrimaryButton({ textButton, onClick }: PrimaryButtonProps) {
    return (
        <button onClick={onClick} className="primary-button">
            <h2>{textButton}</h2>
        </button>
    );
}

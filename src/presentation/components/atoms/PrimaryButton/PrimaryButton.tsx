import './primary-button.scss';

interface PrimaryButtonProps {
    textButton: string;
    onClick: () => void;
    disabled?: boolean;
}

export function PrimaryButton({ textButton, onClick, disabled = false }: PrimaryButtonProps) {
    return (
        <button onClick={onClick} className={`${disabled ? 'disabled-button' : 'primary-button'}`}>
            <p>{textButton}</p>
        </button>
    );
}

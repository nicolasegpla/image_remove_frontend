import './primary-button.scss';

interface PrimaryButtonProps {
    textButton: string;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export function PrimaryButton({
    textButton,
    onClick,
    disabled = false,
    loading = false,
}: PrimaryButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${disabled ? 'disabled-button' : 'primary-button'} ${loading ? 'loading-button' : ''}`}
        >
            <p>{textButton}</p>
        </button>
    );
}

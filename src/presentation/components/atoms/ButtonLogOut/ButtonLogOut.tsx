import './button-log-out.scss';

interface ButtonLogOutProps {
    onClick: () => void;
}

export function ButtonLogOut({ onClick }: ButtonLogOutProps) {
    return (
        <button onClick={onClick} className="button-log-out">
            <p>Log out</p>
        </button>
    );
}

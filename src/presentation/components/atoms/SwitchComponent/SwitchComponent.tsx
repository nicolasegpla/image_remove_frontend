import './switch-component.scss';

interface switchComponentProps {
    onClick: () => void;
    ProisActive: boolean;
}

export function SwitchComponent({ onClick, ProisActive = false }: switchComponentProps) {
    return (
        <div className="switch-component">
            <p
                className={`${!ProisActive ? 'switch-component__text-active' : 'switch-component__text'}`}
            >
                Lite
            </p>
            <div
                onClick={onClick}
                className={`${ProisActive ? 'switch-component__circle-container-active' : 'switch-component__circle-container'}`}
            >
                <div
                    className={`${ProisActive ? 'switch-component__circle-container-active__circle' : 'switch-component__circle-container__circle'}`}
                ></div>
            </div>
            <p
                className={`${ProisActive ? 'switch-component__text-active' : 'switch-component__text'}`}
            >
                Pro
            </p>
        </div>
    );
}

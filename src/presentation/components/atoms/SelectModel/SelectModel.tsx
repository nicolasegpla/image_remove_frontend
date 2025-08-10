import { ChevronDownIcon } from '@heroicons/react/24/outline';
import './select-model.scss';

interface TypeMOdel {
    id: string;
    value: string;
    label: string;
    onChange: (value: string) => void;
}

interface SelectModelProps {
    data: TypeMOdel[];
    model: string;
    selectIsOpen: boolean;
    onClick: () => void;
}

export function SelectModel({ model, data, selectIsOpen, onClick }: SelectModelProps) {
    return (
        <div className="select-model">
            <span className="select-model__span">Model</span>
            <button onClick={onClick} className="select-model__button">
                <p className="select-model__button__p">
                    {model === 'express'
                        ? 'ClearCut'
                        : model === 'studio'
                          ? 'HumanPro'
                          : 'UltraClean'}
                </p>
                <ChevronDownIcon className="select-model__button__icon" />
            </button>
            {selectIsOpen && (
                <div className="select-model__Box-options">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="select-model__Box-options__option"
                            onClick={() => item.onChange(item.value)}
                        >
                            <p className="select-model__Box-options__option__p">{item.label}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

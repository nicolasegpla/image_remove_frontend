import './pick-list.scss';

interface PickListProps {
    onChange: (value: string) => void;
}

export function PickList({ onChange }: PickListProps) {
    return (
        <select className="pick-list" onChange={(e) => onChange(e.target.value)}>
            <option value="express">Modelo Express</option>
            <option value="studio">Modelo Studio</option>
            <option value="ultra">Modelo Ultra</option>
        </select>
    );
}

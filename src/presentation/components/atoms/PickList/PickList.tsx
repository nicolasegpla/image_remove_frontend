import './pick-list.scss';

interface PickListProps {
    onChange: (value: string) => void;
}

export function PickList({ onChange }: PickListProps) {
    return (
        <select className="pick-list" onChange={(e) => onChange(e.target.value)}>
            <option value="express">ClearCut</option>
            <option value="studio">HumanPro</option>
            {/*<option value="ultra">SmartEdge</option>s*/}
            <option value="external">UltraClean</option>
        </select>
    );
}

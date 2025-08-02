import { Squares2X2Icon } from '@heroicons/react/24/outline';
import { ButtonLogOut } from '../ButtonLogOut/ButtonLogOut';
import './collapsible-menu.scss';

interface CollapsibleMenuProps {
    onClick: () => void;
}

export function CollapsibleMenu({ onClick }: CollapsibleMenuProps) {
    return (
        <div className="collapsible-menu">
            <div className="collapsible-menu__item">
                <p className="collapsible-menu__item__text">Dashboard</p>
                <Squares2X2Icon className="collapsible-menu__item__icon" />
            </div>
            <ButtonLogOut onClick={onClick} />
        </div>
    );
}

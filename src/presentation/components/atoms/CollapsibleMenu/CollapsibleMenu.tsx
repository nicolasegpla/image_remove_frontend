import { Squares2X2Icon } from '@heroicons/react/24/outline';

import { ButtonLogOut } from '../ButtonLogOut/ButtonLogOut';
import './collapsible-menu.scss';

interface groupFnInterface {
    title: string;
    onClick: () => void;
}

interface CollapsibleMenuProps {
    onClick: () => void;
    isadmin?: string;
    groupFn?: groupFnInterface[];
}

export function CollapsibleMenu({ onClick, isadmin, groupFn }: CollapsibleMenuProps) {
    return (
        <div className="collapsible-menu">
            <div
                onClick={groupFn ? groupFn[0].onClick : () => {}}
                className="collapsible-menu__item"
            >
                <p className="collapsible-menu__item__text">Dashboard</p>
                <Squares2X2Icon className="collapsible-menu__item__icon" />
            </div>
            {isadmin === 'admin' && (
                <div
                    onClick={groupFn ? groupFn[1].onClick : () => {}}
                    className="collapsible-menu__item"
                >
                    <p className="collapsible-menu__item__text">Admin</p>
                    <Squares2X2Icon className="collapsible-menu__item__icon" />
                </div>
            )}
            <ButtonLogOut onClick={onClick} />
        </div>
    );
}

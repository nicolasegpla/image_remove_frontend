import './table-all-user.scss';

export interface User {
    id: string;
    email: string;
    id_api: string;
    status: boolean;
    tokens: number;
    type_user: string;
    country: string;
}

interface TableAllUserProps {
    dataUsers: User[];
    openInfoUser: (user: User) => void;
}

export function TableAllUser({ dataUsers, openInfoUser }: TableAllUserProps) {
    return (
        <div className="table-all-user">
            <table className="table-all-user__table">
                <thead className="table-all-user__table__head">
                    <tr className="table-all-user__table__head__row">
                        <th className="table-all-user__table__head__row__th">ID</th>
                        <th className="table-all-user__table__head__row__th">Email</th>
                        <th className="table-all-user__table__head__row__th">ID API</th>
                        <th className="table-all-user__table__head__row__th">Status</th>
                        <th className="table-all-user__table__head__row__th">Tokens</th>
                        <th className="table-all-user__table__head__row__th">Type User</th>
                        <th className="table-all-user__table__head__row__th">Country</th>
                    </tr>
                </thead>
                <tbody className="table-all-user__table__body">
                    {dataUsers.map((user) => (
                        <tr
                            onClick={() => openInfoUser(user)}
                            className="table-all-user__table__body__tr"
                            key={user.id}
                        >
                            <td className="table-all-user__table__body__tr__td">{user.id}</td>
                            <td className="table-all-user__table__body__tr__td">{user.email}</td>
                            <td className="table-all-user__table__body__tr__td">{user.id_api}</td>
                            <td className="table-all-user__table__body__tr__td">
                                {user.status ? 'Active' : 'Inactive'}
                            </td>
                            <td className="table-all-user__table__body__tr__td">{user.tokens}</td>
                            <td className="table-all-user__table__body__tr__td">
                                {user.type_user}
                            </td>
                            <td className="table-all-user__table__body__tr__td">{user.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

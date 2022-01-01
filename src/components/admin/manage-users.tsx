import { Table } from 'antd';
import Column from 'antd/lib/table/Column';
import { useQueryUser } from '../../hooks/user/query/useQueryUser';
import { ButtonActionsUser } from './button-actions-user';
import { TagsRole } from './tags-column';

// interface ManageUsersProps{}

export const ManageUsers: React.FC = () => {
    const { data, isLoading } = useQueryUser();

    const dataTable = data?.data.items.map((value) => {
        return {
            key: value.id,
            name: value.name,
            age: value.age,
            email: value.email,
            tags: `${value.role}`
        }
    });

    return (
        <div >
            <h2>Manage Users</h2>
            <Table
                loading={isLoading}
                bordered={true}
                dataSource={dataTable}
                pagination={{ position: ['bottomCenter'] }}
            >
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Tags" dataIndex="tags" key="tags"
                    render={(tag) => <TagsRole tag={tag} />}
                />
                <Column
                    title="Actions"
                    key="actions"
                    width={150}
                    render={() => <ButtonActionsUser />}
                />
            </Table>
        </div>
    )
}


import { Table } from 'antd';
import Column from 'antd/lib/table/Column';

import { useQueryForm } from '../../hooks/user/query/useQueryUser';
import { ButtonActionsForm } from './button-actions-form';
import { TagsRole } from './tags-column';

// interface ListFormRegistrationProps{}

export const ListFormRegistration: React.FC = () => {

    const { data, isLoading } = useQueryForm();

    const dataTable = data?.data.items.map((value) => {
        return {
            key: value.id,
            title: value.title,
            description: value.description,
            status: `${value.status}`
        }
    });

    return (
        <>
            <h2>List Form Registration Users</h2>
            <Table loading={isLoading} dataSource={dataTable} >
                <Column title="Title" dataIndex="title" key="title" />
                <Column title="Description" dataIndex="description" key="description" />
                <Column title="Status" dataIndex="status" key="status"
                    render={(tag) => <TagsRole tag={tag} />}
                />
                <Column title="Actions" dataIndex="actions" key="actions"
                    width={250}
                    render={() => <ButtonActionsForm />}
                />
            </Table>
        </>
    )
}

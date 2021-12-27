import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Tag, Space, Button } from 'antd';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { useQueryUser } from '../../hooks/user/query/useQueryUser';

// interface ManageUsersProps{}
type valueColumnTable =
    boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (value: valueColumnTable) => <a>{value}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: any[]) => (
            <>
                {tags.map(tag => {
                    if (tag === '1') {
                        tag = 'user'
                    } else if (tag === '2') {
                        tag = 'manager'
                    } else if (tag === '3') {
                        tag = 'admin'
                    }
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'admin') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <Button icon={<EditOutlined />} type='primary' shape="round"> Edit</Button>
                <span>/</span>
                <Button icon={<DeleteOutlined />} type='primary' danger shape="round"></Button>
            </Space>
        ),
    },
];

export const ManageUsers: React.FC = () => {
    const { data, isLoading } = useQueryUser();

    const dataTable = data?.data.items.map((value) => {
        return {
            key: value.id,
            name: value.name,
            age: value.age,
            email: value.email,
            tags: [`${value.role}`]
        }
    });

    return (
        <div >
            <h2>Manage Users</h2>
            <Table loading={isLoading} bordered={true} columns={columns} dataSource={dataTable} />
        </div>
    )
}


import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Tag, Space, Button } from 'antd';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { useQueryForm } from '../../hooks/user/query/useQueryUser';

type valueColumnTable =
    boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text: valueColumnTable) => <a>{text}</a>,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (tags: string[]) => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
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
        width: 250,
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="small">
                <Button icon={<CheckCircleOutlined />} type='primary' shape="round"> Accept</Button>
                <span>|</span>
                <Button icon={<DeleteOutlined />} type='primary' danger shape="round">Cancel</Button>
            </Space>
        ),
    },
];

// interface ListFormRegistrationProps{}

export const ListFormRegistration: React.FC = () => {

    const { data, isLoading } = useQueryForm();

    const dataTable = data?.data.items.map((value) => {
        return {
            key: value.id,
            title: value.title,
            description: value.description,
            status: [`${value.status}`]
        }
    });

    return (
        <>
            <h2>List Form Registration Users</h2>
            <Table loading={isLoading} columns={columns} dataSource={dataTable} />
        </>
    )
}

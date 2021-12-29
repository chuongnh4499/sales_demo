import { Table, Tag, Space, Button } from 'antd';
import { useForm } from '../../hooks/user/query/useForm';

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        width: 200,
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length < 5 ? 'geekblue' : 'green';
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
        width: 150,
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <Button danger>Cancel</Button>
            </Space>
        ),
    },
];

// interface UserFormRegistrationProps{}

export const UserFormRegistration: React.FC = () => {

    const { data, isLoading } = useForm();

    const form = data?.data.form;

    const dataTable = form !== null ? [
        {
            key: 'form?.id',
            title: form?.title,
            description: form?.description,
            tags: [`${form?.status}`],
        }
    ] : [];

    return (
        <>
            <h2>Form Registration</h2>
            <Table loading={isLoading} columns={columns} dataSource={dataTable} />
        </>
    )
}

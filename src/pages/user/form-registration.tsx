import { QuestionCircleOutlined } from '@ant-design/icons';
import { Table, Tag, Space, Button, Popconfirm, message } from 'antd';
import { ReactChild, ReactFragment, ReactPortal, useState } from 'react';
import { useQueryClient } from 'react-query';
import { cancelFormUser } from '../../api/users';
import { useForm } from '../../hooks/user/query/useForm';
import { StatusCode } from '../../interfaces/types';

type textType = boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;


// interface UserFormRegistrationProps{}

export const UserFormRegistration: React.FC = () => {

    const { data, isLoading } = useForm();
    const [loadingAction, setLoadingAction] = useState(false);
    const queryClient = useQueryClient();
    const form = data?.data.form;

    const refuse = () => {
        message.error('Click on No');
    }

    const confirm = async () => {
        setLoadingAction(true);
        const status = await cancelFormUser(form?.id);

        if (status === StatusCode.OK) {
            message.success('Cancel successfully')

            //reload query cache
            await queryClient.refetchQueries(['user-form-register'], { active: true })

            setLoadingAction(false)
        }
        else {
            message.info('Oops !! Something wrong')
            setLoadingAction(false)
        }
    }


    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text: textType) => <a>{text}</a>,
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
            render: (tags: string[]) => (
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
                    <Popconfirm
                        title="Are you sure?"
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        okButtonProps={{ loading: loadingAction }}
                        onConfirm={confirm}
                        onCancel={refuse}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Cancel</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

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

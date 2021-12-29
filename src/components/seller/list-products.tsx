import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Tag, Space, Button } from 'antd';
import { ReactChild, ReactFragment, ReactPortal, useState } from 'react';
import { useQueryProduct } from '../../hooks/seller/query/useQueryProduct';
import { useQueryUser } from '../../hooks/user/query/useQueryUser';

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
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        width: 150,
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <Button icon={<EditOutlined />} type='primary' shape="round"> Edit</Button>
                <span>|</span>
                <Button icon={<DeleteOutlined />} type='primary' danger shape="round"></Button>
            </Space>
        ),
    },
];

// interface ListProductsOfSellerProps {}

export const ListProductsOfSeller: React.FC = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useQueryProduct(page);
    
    //Fill data to table
    const dataTable = data?.data.items.map((value) => {
        return {
            key: value.id,
            name: value.name,
            description: value.description
        }
    })

    return (
        <>
            <h2>List Products</h2>
            <div style={{ width: '90%', display: 'inline-block', textAlign: 'left', marginBottom: 50 }}>
            <Table
                loading={isLoading}
                size='middle'
                bordered={true}
                columns={columns}
                dataSource={dataTable}
                pagination={{
                    position: ['topLeft'],
                    pageSize: data?.data.meta.itemsPerPage,
                    total: data?.data.meta.totalItems,
                    onChange: (page) => {                        
                        setPage(page);
                    }
                }}
            />
            </div>
        </>
    )
}

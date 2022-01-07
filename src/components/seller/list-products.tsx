import { Table } from 'antd';
import Column from 'antd/lib/table/Column';
import { useState } from 'react';
import { useQueryProduct } from '../../hooks/seller/query/useQueryProduct';
import { useModalForm } from '../../hooks/useModal';
import { IProduct } from '../../interfaces/product';
import { ModalForm } from '../modal-form';
import { ButtonActionsProduct } from './button-actions-product';

// interface ListProductsOfSellerProps {}

export const ListProductsOfSeller: React.FC = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useQueryProduct(page);

    const [productInfo, setProductInfo] = useState<IProduct>();

    const { onClose, onShowModal, visible } = useModalForm();

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
                    dataSource={dataTable}
                    pagination={{
                        position: ['topLeft'],
                        pageSize: data?.data.meta.itemsPerPage,
                        total: data?.data.meta.totalItems,
                        onChange: (page) => {
                            setPage(page);
                        }
                    }}
                >
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Description" dataIndex="description" key="description" />
                    <Column title="Actions" dataIndex="actions" key="actions"
                        width={150}
                        render={(_, product: IProduct) =>
                            <ButtonActionsProduct
                                setProductInfo={setProductInfo}
                                onShowModal={onShowModal}
                                product={product}
                            />}
                    />
                </Table>
            </div>
            <ModalForm productData={productInfo} onClose={onClose} visible={visible} />
        </>
    )
}

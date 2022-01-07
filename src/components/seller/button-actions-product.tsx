import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { IProduct } from '../../interfaces/product'

interface ActionsProductProps {
    product: IProduct;
    onShowModal: () => void;
    setProductInfo: (product: IProduct) => void;
}

export const ButtonActionsProduct = ({ product, onShowModal, setProductInfo }: ActionsProductProps) => {

    const showModalData = () => {
        setProductInfo(product);
        onShowModal();
    }

    return (
        <Space size="middle">
            {/* Edit */}
            <Button onClick={showModalData} icon={<EditOutlined />} type='primary' shape="round"> Edit</Button>
            <span>|</span>
            {/* Delete */}
            <Button icon={<DeleteOutlined />} type='primary' danger shape="round"></Button>
        </Space>
    )
}

import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'

export const ButtonActionsUser: React.FC = () => {
    return (
        <>
            <Space size="middle">
                <Button icon={<EditOutlined />} type='primary' shape="round"> Edit</Button>
                <span>|</span>
                <Button icon={<DeleteOutlined />} type='primary' danger shape="round"></Button>
            </Space>
        </>
    )
}

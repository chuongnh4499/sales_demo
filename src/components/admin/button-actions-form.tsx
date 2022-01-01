import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'

export const ButtonActionsForm = () => {
    return (
        <Space size="small">
            <Button icon={<CheckCircleOutlined />} type='primary' shape="round"> Accept</Button>
            <span>|</span>
            <Button icon={<DeleteOutlined />} type='primary' danger shape="round">Cancel</Button>
        </Space>
    )
}

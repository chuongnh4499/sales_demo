import { Tag } from 'antd'

interface TagsRoleProps {
    tag: string;
}

export const TagsRole = ({ tag }: TagsRoleProps) => {
    let color = tag.length > 5 ? 'geekblue' : 'green';

    //set color for role
    if (tag === '1') {
        tag = 'user'
        color = 'green'
    } else if (tag === '2') {
        tag = 'manager'
        color = 'geekblue'
    } else if (tag === '3') {
        tag = 'admin'
        color = 'volcano'
    }

    //set color for status
    if(tag === 'pending')
        color = 'green';
    

    return (
        <Tag color={color} key={tag}>
            {tag.toUpperCase()}
        </Tag>
    )
}


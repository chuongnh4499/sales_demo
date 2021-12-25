import React from 'react'
import { useParams } from 'react-router-dom'

export const EditProfile: React.FC = () => {
    const params = useParams()
    return (
        <div>
            <h2>Edit My Profile Has ID: {params.id}</h2>
        </div>
    )
}
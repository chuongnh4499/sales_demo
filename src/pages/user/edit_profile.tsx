import React from 'react'
import { useParams } from 'react-router-dom'

function EditProfile() {
    const params = useParams()
    return (
        <div>
            <h3>Edit My Profile Has ID: {params.id}</h3>
        </div>
    )
}

export default EditProfile

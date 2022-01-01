import { Button } from 'antd'
import React from 'react'

interface ButtonCheckoutProps {
    handleCheckOut: () => void;
}

export const ButtonCheckOut = ({ handleCheckOut }: ButtonCheckoutProps) => {
    return (
        <>
            <Button
                key='CheckOut'
                style={{ width: '90%' }}
                type='primary'
                shape='round'
                onClick={handleCheckOut}
            >
                Check Out
            </Button>
        </>
    )
}

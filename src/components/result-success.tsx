import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

// interface ResultSuccessProps{}

export const ResultSuccess: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Result
                status="success"
                title="Registration is successful, form has been sent!"
                subTitle="Registration number: 2017182818828182881 Admin configuration takes 1-5 days, please wait."
                extra={[
                    <Button onClick={() => navigate(-1)} type="primary" key="console">
                        Go Back
                    </Button>
                ]}
            />
        </>
    )
}

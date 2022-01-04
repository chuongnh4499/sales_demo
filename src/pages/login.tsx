import { useEffect } from 'react';
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/login-form'
import { useAuthContext } from '../context/auth-context';
import { useStore } from '../context/user';
import { Role } from '../interfaces/types';

export const Login: React.FC = () => {

    const [cookies] = useCookies(['isAuthenticated']);
    const { role } = useStore();
    const { toggleAuth } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (cookies.isAuthenticated == 'true') {
            toggleAuth(true);
            navigate("/", { replace: true });
        } else {
            navigate("/login", { replace: true });
        }

    }, [])

    return (
        <div className="App">
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}
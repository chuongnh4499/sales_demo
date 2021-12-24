import { Outlet } from 'react-router-dom'
import LogOutButton from '../../components/logout_button'

function SaleHomePage() {
    return (
        <div>
            
            <h1>Sale</h1>
            <LogOutButton />
            <Outlet />
            
        </div>
    )
}

export default SaleHomePage

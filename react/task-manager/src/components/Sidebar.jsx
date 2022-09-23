import CustomButton from './CustomButton'

import logo from '../assets/images/logo.png'
import './Sidebar.scss'


const Sidebar = () => {
    return (
        <div className="sidebar-container">
           <div className="logo">
                <img src={logo} alt="logo" />
           </div>

           <div className="sign-out">
                <CustomButton> 
                    Sair
                </CustomButton>
           </div>
        </div>
    )
}

export default Sidebar
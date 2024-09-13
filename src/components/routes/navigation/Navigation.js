import React from 'react'
import { Fragment,useContext} from 'react'
import { Outlet } from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import CartIcon from '../../cart-icon/CartIcon'
import CartDropdown from '../../cart-dropdown/CartDropdown'
import { UserContext } from '../../../context/userContext'
import { CartContext } from '../../../context/cartContext'
import {signOutUser} from '../../../utils/firebase/firebase.utils'
import {NavigationContainer,LogoContainer,NavLinks,NavLink} from './navigation.styles.jsx'

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
   const {isCartOpen}  =useContext(CartContext)
  return (
    <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrownLogo className='logo' />
            </LogoContainer>
            <NavLinks>
                <NavLink  to='/shop' className="nav-link" >
                SHOP
                </NavLink>
                {currentUser?<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>:
                <NavLink to='/auth'  >
                    SIGN IN
                </NavLink>}
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
            
        </NavigationContainer>
      
        <Outlet />  
    </Fragment>
  )
}

export default Navigation

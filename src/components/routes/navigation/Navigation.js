import React from 'react'
import { Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import CartIcon from '../../cart-icon/CartIcon'
import CartDropdown from '../../cart-dropdown/CartDropdown'
import { selectCurrentUser } from '../../../store/user/user.selector.js'

import { selectIsCartOpen } from '../../../store/cart/cart.selector.js'

import {NavigationContainer,LogoContainer,NavLinks,NavLink} from './navigation.styles.jsx'
import { signOutStart } from '../../../store/user/user.action.js'

const Navigation = () => {
    const dispatch = useDispatch()
    const currentUser =useSelector(selectCurrentUser)
   const isCartOpen  =useSelector(selectIsCartOpen)
   const signOutUser = ()=> dispatch(signOutStart())
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

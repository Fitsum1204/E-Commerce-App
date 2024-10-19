import React from 'react'
import {useDispatch, useSelector } from 'react-redux';
import {ShoppingIcon,CartIconContainer,ItemCount} from './cart-icon.styles.jsx'
import {setIsCartOpen} from '../../store/cart/cart.action'
import { selectIsCartOpen,selectCartCount } from '../../store/cart/cart.selector.js';


const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen =useSelector(selectIsCartOpen)
 
  const cartCount =useSelector(selectCartCount)
  const toggleHAndeler = () => dispatch(setIsCartOpen(!isCartOpen))

  
  return (
    <CartIconContainer onClick={toggleHAndeler}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
     
    </CartIconContainer>
  )
}

export default CartIcon

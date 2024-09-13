import React,{useContext} from 'react'
import { CartContext } from '../../context/cartContext'
import {ShoppingIcon,CartIconContainer,ItemCount} from './cart-icon.styles.jsx'


const CartIcon = () => {
  const {isCartOpen,setISCartOpen,count} =useContext(CartContext);

  const toggleHAndeler = () => {setISCartOpen(!isCartOpen)

  }
  return (
    <CartIconContainer onClick={toggleHAndeler}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{count}</ItemCount>
     
    </CartIconContainer>
  )
}

export default CartIcon

import React,{useContext} from 'react'
import {CartDropdownContainer,EmptyMessage,CartItems} from  './cart-dropdown.styles.jsx'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { CartContext } from '../../context/cartContext'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = ()=> {
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
        <CartItems>
        {cartItems.length  ? (cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)):(<EmptyMessage>Your cart is empty</EmptyMessage>)}
        
        </CartItems>
        <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown

import React,{useContext} from 'react'
import './checkout-item.styles.scss'
import { CartContext } from '../../context/cartContext'
const CheckoutItem = ({cartItem}) => {
  const {clearItemFromCart,addItemToCart,removeItemToCart} = useContext(CartContext)
  const {name,imageUrl,price,quantity} =cartItem
  const clearITemHandler = () => {
    clearItemFromCart(cartItem)
  }
  const addItemHandler = ()=> addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={removeItemHandler} >&lt;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>&gt;</div>
        </span>
      <span className='price'>{price}</span>
      <div className="remove-button" onClick={clearITemHandler}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem

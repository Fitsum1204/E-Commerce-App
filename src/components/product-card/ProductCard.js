import React from 'react'
import Button,{Button_Type_Classes} from '../button/Button'
import { useDispatch, useSelector } from 'react-redux'
import './product-card.styles.scss'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

const ProductCard = ({product}) => {
  const dispatch =useDispatch()
  const {name,imageUrl,price} = product;
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems,product));

  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
         <div className='footer'>
            <span className='name'  >{name}</span>
            <span  className='price'>{price}</span>
         </div>
         <Button buttonType={Button_Type_Classes.inverted} onClick={addProductToCart}>ADD TO CART</Button>
    </div>
  )
}

export default ProductCard

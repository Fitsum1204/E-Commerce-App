import React,{useContext} from 'react'
import Button,{Button_Type_Classes} from '../button/Button'
import { CartContext } from '../../context/cartContext'
import './product-card.styles.scss'

const ProductCard = ({product}) => {

  const {name,imageUrl,price} = product;
  const {addItemToCart} = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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

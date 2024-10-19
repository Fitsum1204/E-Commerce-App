import React, { Fragment, useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectCategoriesMap } from '../../../store/category/category.selector'
import ProductCard from '../../product-card/ProductCard'
import './catagory.styles.scss'
import Spinner from '../../spinner/Spinner'
import { selectIsLoading } from '../../../store/category/category.selector'
const Catagory = () => {
 const {catagory} = useParams();
 const categoriesMap = useSelector(selectCategoriesMap);
 const [products,setProducts] = useState(categoriesMap[catagory]);
const isLoading = useSelector(selectIsLoading)
 useEffect(()=>{
    setProducts(categoriesMap[catagory])
 },[catagory,categoriesMap])

 return ( isLoading ? <Spinner /> : 
    <Fragment>
        <h2 className='catagory-title'>{catagory.toUpperCase()}</h2>
        <div className='catagory-container'>
            
            {products && products.map((product)=><ProductCard key={product.id} product={product} />

                )
            }
        </div>
    </Fragment>
 
    
 )
}

export default Catagory

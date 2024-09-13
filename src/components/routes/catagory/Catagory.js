import React, { Fragment, useContext ,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { CatagoriesContext } from '../../../context/catagoriesContext'
import ProductCard from '../../product-card/ProductCard'
import './catagory.styles.scss'
const Catagory = () => {
 const {catagory} = useParams();
 const {catagoriesMap} = useContext(CatagoriesContext);
 const [products,setProducts] = useState(catagoriesMap[catagory]);

 useEffect(()=>{
    setProducts(catagoriesMap[catagory])
 },[catagory,catagoriesMap])
 return (
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

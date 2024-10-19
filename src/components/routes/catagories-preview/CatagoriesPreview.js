import React,{Fragment} from 'react'
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../../store/category/category.selector.js';
import { selectIsLoading } from '../../../store/category/category.selector.js';
import CatagoryPreview from '../../catagory-preview/CatagoryPreview.js'
import Spinner from '../../spinner/Spinner.js';


const CatagoriesPreview = () => {
const categoriesMap = useSelector(selectCategoriesMap)
const isLoading = useSelector(selectIsLoading)

return (isLoading ? <Spinner />  :  
  <Fragment>
    {Object.keys(categoriesMap).map((title) => {
      const products = categoriesMap[title];
      return <CatagoryPreview key={title} title={title} products={products} />;
    })}
  </Fragment>
);
};

export default CatagoriesPreview 

import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Routes,Route } from 'react-router-dom';


import CatagoriesPreview from '../catagories-preview/CatagoriesPreview.js';
import Catagory from '../catagory/Catagory.js';
import './shop.style.scss'
import { fetchCategoriesStart } from '../../../store/category/category.action.js';
//import SHOP_DATA from '../../../shope-data.json'

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCategoriesStart())
  
},[dispatch])

return (
  <Routes>
    <Route index Component={CatagoriesPreview} />
    <Route path=':catagory' Component={Catagory} />
  </Routes>
);
};

export default Shop

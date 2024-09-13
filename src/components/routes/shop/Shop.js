import React from 'react'
import { Routes,Route } from 'react-router-dom';
import CatagoriesPreview from '../catagories-preview/CatagoriesPreview.js';
import Catagory from '../catagory/Catagory.js';
import './shop.style.scss'
//import SHOP_DATA from '../../../shope-data.json'

const Shop = () => {


return (
  <Routes>
    <Route index Component={CatagoriesPreview} />
    <Route path=':catagory' Component={Catagory} />
  </Routes>
);
};

export default Shop

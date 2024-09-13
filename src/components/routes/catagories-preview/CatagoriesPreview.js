import React,{Fragment, useContext} from 'react'

import { CatagoriesContext } from '../../../context/catagoriesContext.js'

import CatagoryPreview from '../../catagory-preview/CatagoryPreview.js'

//import SHOP_DATA from '../../../shope-data.json'
const CatagoriesPreview = () => {
const {catagoriesMap} = useContext(CatagoriesContext)

return (
  <Fragment>
    {Object.keys(catagoriesMap).map((key) => {
      const products = catagoriesMap[key];
      return <CatagoryPreview key={key} title={key} products={products} />;
    })}
  </Fragment>
);
};

export default CatagoriesPreview 

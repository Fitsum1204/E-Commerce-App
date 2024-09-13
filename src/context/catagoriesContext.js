import { createContext, useEffect, useState} from 'react'

import { getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';
export const CatagoriesContext = createContext({
    catagoriesMap:{}
});

export const CatagoriesProvider = ({children}) => {
    const [catagoriesMap ,setCatagoriesMap] = useState({});
    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCatagoriesMap(categoryMap)
        }
        getCategoriesMap();
    },[])
    const value = {catagoriesMap};
    return <CatagoriesContext.Provider value = {value}>
       {children} 
    </CatagoriesContext.Provider>
}

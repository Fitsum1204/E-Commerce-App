import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BackgroundImage,Body,DirectoryItemContainer} from './directoryItem.styles'
const DirectoryItem = ({catagory}) => {
    const {title,imageUrl,route} = catagory
    const naviget = useNavigate()
    const onNavigetHandler = () =>naviget(route);
  return (
    
   
    <DirectoryItemContainer onClick={onNavigetHandler}>
         <BackgroundImage imageUrl={imageUrl} />
         <Body>
           <h2>{title}</h2>
           <p>Shope now</p>
    </Body>

</DirectoryItemContainer>
  )
  
}

export default DirectoryItem

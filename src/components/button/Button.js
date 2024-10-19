import React from 'react'
import {BaseButton,GoogleSignINButton,InvertedButton,ButtonSpinner} from './button.styles.jsx'

export const Button_Type_Classes = {
    base:'base',
    google:'google-sign-in',
    inverted:'inverted'
}

const getButton  =  (buttonType =Button_Type_Classes.base) => (
  {
    [Button_Type_Classes.base]:BaseButton,
    [Button_Type_Classes.google]:GoogleSignINButton,
    [Button_Type_Classes.inverted]:InvertedButton,
  }[buttonType]
)
const Button = ({children,buttonType,isLoading,...otherProps}) => {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading? <ButtonSpinner /> :children}</CustomButton>
  )
}

export default Button

import React from 'react'

import SignUPForm from '../../sign-up-form/SignUPForm'
import SignInForm from '../../sign-in-form/SignInForm'
import './authentication.styles.scss'
const Authentication = () => {
    
    return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUPForm />
    </div>
  )
}

export default Authentication



    
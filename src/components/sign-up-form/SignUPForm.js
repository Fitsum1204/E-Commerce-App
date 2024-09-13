import React,{useState} from 'react'
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/FormInput'
import Button from '../button/Button'

import './sign-up-form.styles.scss'
    const SignUPForm = () => {
    const defaultFormFields = {
        name:'',
        email:'',
        password:'',
        confirmpPassword:''
      }
    const [formFields,setFormFields] = useState(defaultFormFields);

    const {name,email,password,confirmpPassword} = formFields;

    
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }  

    const handelSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmpPassword) {
            alert("password do not match")
            return;
        } 
        try {
           const {user} =   await createAuthUserWithEmailAndPassword(email,password) 
     
           await createUserDocumentFromAuth(user,{name})
           resetFormFields();
        } catch (error) {
            if(error.code ==='auth/email-already-in-use') {
               alert('Cannot create user,email already in use') 
            } else {
                alert('user creation ecncountered an error',error) 
            }
           
           
        }
     
    }
    const handleChange = e => {
        const {name,value} =e.target;
        setFormFields({...formFields,[name]:value})
    }
    return (
        <div className='sign-up-container'>
            <h1>Don't  have an account?</h1>
            <span>Sign up with your email and password</span>
            <form onSubmit={handelSubmit}>
               
                <FormInput
                label="Display Name"
                type='text' 
                required 
                onChange={handleChange}
                name='name' 
                value={name} />
              
                <FormInput
                label='Email' 
                type='email' 
                required 
                onChange={handleChange} 
                name='email' 
                value={email} />
                
                <FormInput
                label='password' 
                type='password' 
                required 
                onChange={handleChange}name='password' 
                value={password} />
            
                <FormInput
                label='Confirm Password'  
                type='password' 
                required 
                onChange={handleChange} name='confirmpPassword'  
                value={confirmpPassword} />
                <Button buttonType='inverted' type='submit'>Sign up</Button>
            </form>
        </div>
  )
}

export default SignUPForm

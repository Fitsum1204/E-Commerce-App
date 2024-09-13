import React,{useState} from 'react'
import {signInWithGooglePopup,signINAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/FormInput'
import Button,{Button_Type_Classes} from '../button/Button'

import './sign-in-form.styles.scss'
    const SignInForm = () => {

    const signInWithGoogle = async () => {
       await signInWithGooglePopup();
           
            
        }
    const defaultFormFields = {
       
        email:'',
        password:'',
      
      }
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;

 

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }  

    const handelSubmit = async (e) => {
        e.preventDefault();
        
        try {
          await signINAuthUserWithEmailAndPassword(email,password)
       
          
           resetFormFields();
        } catch (error) {
           if(error.code ==='auth/invalid-credential')  {
            alert('invalid-credential')
            //return;
        } else {
            alert("Ther is an error try again")
        }
         

        }
     
    }
    const handleChange = e => {
        const {name,value} =e.target;
        setFormFields({...formFields,[name]:value})
    }
    return (
        <div className='sign-in-container'>
            <h1>Already have an account?</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={handelSubmit}>
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
            
                <div className='buttons-container'>
                    <Button  type='submit'>SIGN in</Button>
                    <Button type='button' buttonType={Button_Type_Classes.google} onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>
                </div>
                
            </form>
        </div>
  )
}

export default SignInForm
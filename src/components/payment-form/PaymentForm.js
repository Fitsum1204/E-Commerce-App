import React, { useState } from 'react'
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js'
import  { Button_Type_Classes } from '../button/Button';
import { PaymentFormContainer,FormContainer,PaymentButton } from './payment-form.styles';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';
const PaymentForm = () => {
const elements = useElements();
const stripe = useStripe();
const amount = useSelector(selectCartTotal);
const currentUser = useSelector(selectCurrentUser)
const [isProcessing,setIsProcessing] =useState(false)

const paymentHandler = async(e) => {
    e.preventDefault();
    setIsProcessing(true)
    if(!stripe || !elements) {return; }
    const response = await fetch('/.netlify/functions/create-payment-intent',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({amount:amount*100})
    }).then((res)=> res.json())
    const {paymentIntent:{client_secret}} = response;
    console.log(client_secret)
    const paymentResult = await stripe.confirmCardPayment(
      client_secret,{
      payment_method:{
        card:elements.getElement(CardElement),
        billing_details:{
          name:currentUser ? currentUser.displayName : 'Guest',
          address: {
            line1: '123 Example St', // Add street address
            city: 'Example City', // Add city
            state: 'CA', // Add state if applicable
            postal_code: '12345', // Ensure you have a complete postal code
            country: 'US', // Add country code
          },
        }
      }
})
setIsProcessing(false)
if(paymentResult.error) {
  alert(paymentResult.error.message)
} else {
  if (paymentResult.paymentIntent.status === 'succeeded') {
    alert('Payment Successful')
  }
}

}
  return (
  
     <PaymentFormContainer onSubmit={paymentHandler}>
       <FormContainer>
      <h2>Credit Card Method</h2>
      <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

      <PaymentButton isLoading={isProcessing} buttonType={Button_Type_Classes.inverted} >Pay Now</PaymentButton>
      </FormContainer>
    </PaymentFormContainer> 
  )
}

export default PaymentForm

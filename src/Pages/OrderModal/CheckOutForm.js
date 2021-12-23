import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const CheckOutForm = ({price, buyerName, email}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
    },[price]);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(!card){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if(error){
            setError(error.message);
            setSuccess('');
        }else{
            setError('');
        }

        // payment intent
        const {paymentIntent, error : intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: cardElement,
                billing_details: {
                  name: buyerName,
                  email: email
                },
              },
            },
          );
          if(intentError){
              setError(intentError.message);
              setSuccess('');
          }else{
              setError('');
              setSuccess('Your payment processed successfully');
          }
    };

    return (
        <Container fluid>
        <form onSubmit={handleSubmit} className='w-100 d-flex flex-column'>
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
        {price && <Button variant="primary" className="mx-auto mt-3" type="submit" disabled={!stripe}>Pay ${price}</Button>}
        {
            error && <p className='text-center fw-bold text-danger mt-3'>{error}</p>
        }
        {
            success && <p className='text-center fw-bold text-success mt-3'>{success}</p>
        }
      </form>
      </Container>
    );
};

export default CheckOutForm;
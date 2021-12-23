import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const CheckOutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('');

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
            setError(error.message)
        }else{
            setError('')
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
        <Button variant="primary" className="mx-auto mt-3" type="submit" disabled={!stripe}>Pay ${price}</Button>
        {
            error && <p className='text-center fw-bold text-danger mt-3'>{error}</p>
        }
      </form>
      </Container>
    );
};

export default CheckOutForm;
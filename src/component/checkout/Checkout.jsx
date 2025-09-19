import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Checkout.css';

const stripePromise = loadStripe('your-stripe-publishable-key'); // Replace with your key

const CheckoutForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card'
  });
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async () => {
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment('your-client-secret', {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      console.error(error);
    } else if (paymentIntent.status === 'succeeded') {
      alert('Order placed successfully!');
      navigate('/home');
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {step === 1 && (
        <div className="checkout-step">
          <h2>Shipping Information</h2>
          <form>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
            <input type="text" name="address" placeholder="Address" onChange={handleInputChange} />
            <input type="text" name="city" placeholder="City" onChange={handleInputChange} />
            <input type="text" name="zipCode" placeholder="Zip Code" onChange={handleInputChange} />
          </form>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div className="checkout-step">
          <h2>Payment Information</h2>
          <select name="paymentMethod" onChange={handleInputChange}>
            <option value="card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          {formData.paymentMethod === 'card' && (
            <div className="card-element">
              <CardElement />
            </div>
          )}
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div className="checkout-step">
          <h2>Review Order</h2>
          <p>Review your order details here.</p>
          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Place Order</button>
        </div>
      )}
    </div>
  );
};

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;
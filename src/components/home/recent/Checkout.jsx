import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const paymentMethods = [
  { id: 1, name: 'Credit/Debit Card' },
  { id: 2, name: 'PayPal' },
  { id: 3, name: 'Bank Transfer' },
];

const Checkout = () => {
  const location = useLocation();
  const { name, email, cart } = location.state || {};
  
  // Calculate order summary based on cart
  const subtotal = cart ? cart.reduce((total, item) => total + item.price, 0) : 0;
  const tax = subtotal * 0.1; // Assuming a 10% tax rate
  const total = subtotal + tax;

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handlePaymentMethodChange = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
  };

  const handlePay = () => {
    if (selectedPaymentMethod) {
      // Simulate a payment process
      setIsPaymentSuccessful(true);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Checkout</h2>
      <div className="mb-6">
        <h3 className="text-md font-bold mb-2">Order Summary</h3>
        <ul>
          <li className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Tax:</span>
            <span>${tax.toFixed(2)}</span>
          </li>
          <li className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-md font-bold mb-2">Payment Method</h3>
        <ul>
          {paymentMethods.map((paymentMethod) => (
            <li key={paymentMethod.id} className="mb-2">
              <input
                type="radio"
                id={`payment-method-${paymentMethod.id}`}
                name="payment-method"
                value={paymentMethod.id}
                checked={selectedPaymentMethod?.id === paymentMethod.id}
                onChange={() => handlePaymentMethodChange(paymentMethod)}
              />
              <label className="ml-2" htmlFor={`payment-method-${paymentMethod.id}`}>
                {paymentMethod.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {selectedPaymentMethod && (
        <div className="mb-6">
          <h3 className="text-md font-bold mb-2">Pay with {selectedPaymentMethod.name}</h3>
          {selectedPaymentMethod.id === 1 && (
            <div>
              <input
                type="text"
                className="block w-full p-2 mb-2 border border-gray-300 rounded"
                placeholder="Card Number"
              />
              <input
                type="text"
                className="block w-full p-2 mb-2 border border-gray-300 rounded"
                placeholder="Expiration Date"
              />
              <input
                type="text"
                className="block w-full p-2 mb-2 border border-gray-300 rounded"
                placeholder="CVV"
              />
            </div>
          )}
          {selectedPaymentMethod.id === 2 && (
            <div>
              <input
                type="text"
                className="block w-full p-2 mb-2 border border-gray-300 rounded"
                placeholder="PayPal Email"
              />
            </div>
          )}
          {selectedPaymentMethod.id === 3 && (
            <div>
              <input
                type="text"
                className="block w-full p-2 mb-2 border border-gray-300 rounded"
                placeholder="Bank Account Number"
              />
            </div>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePay}
          >
            Pay
          </button>
        </div>
      )}
      {isPaymentSuccessful && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Payment successful!
        </div>
      )}
    </div>
  );
};

export default Checkout;

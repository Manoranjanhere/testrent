import React, { useState } from "react";
import "./payment.css";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case "Credit/Debit Card":
        return (
          <div className="payment-form">
            <h3>Enter Card Details</h3>
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Card Holder Name" />
            <input type="text" placeholder="Expiry Date (MM/YY)" />
            <input type="text" placeholder="CVV" />
            <button className="submit-button" onClick={() => alert("Processing Card Payment")}>
              Pay Now
            </button>
          </div>
        );
      case "UPI":
        return (
          <div className="payment-form">
            <h3>Enter UPI ID</h3>
            <input type="text" placeholder="UPI ID (e.g., yourname@bank)" />
            <button className="submit-button" onClick={() => alert("Processing UPI Payment")}>
              Pay Now
            </button>
          </div>
        );
      case "Net Banking":
        return (
          <div className="payment-form">
            <h3>Select Your Bank</h3>
            <select>
              <option value="">Choose Bank</option>
              <option value="Bank 1">Bank of INDIA</option>
              <option value="Bank 2">SBI</option>
              <option value="Bank 3">Razorpay</option>
              {/* Add more bank options as needed */}
            </select>
            <button className="submit-button" onClick={() => alert("Processing Net Banking Payment")}>
              Pay Now
            </button>
          </div>
        );
      case "Wallet":
        return (
          <div className="payment-form">
            <h3>Select Wallet</h3>
            <select>
              <option value="">Choose Wallet</option>
              <option value="Wallet 1">Wallet 1</option>
              <option value="Wallet 2">Wallet 2</option>
              <option value="Wallet 3">Wallet 3</option>
              {/* Add more wallet options as needed */}
            </select>
            <button className="submit-button" onClick={() => alert("Processing Wallet Payment")}>
              Pay Now
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h2>Select Payment Method</h2>
        
        <button
          className="payment-button"
          onClick={() => setPaymentMethod("Credit/Debit Card")}
        >
          Pay with Credit/Debit Card
        </button>

        <button
          className="payment-button"
          onClick={() => setPaymentMethod("UPI")}
        >
          Pay with UPI
        </button>

        <button
          className="payment-button"
          onClick={() => setPaymentMethod("Net Banking")}
        >
          Pay with Net Banking
        </button>

        <button
          className="payment-button"
          onClick={() => setPaymentMethod("Wallet")}
        >
          Pay with Wallet
        </button>

        {renderPaymentForm()}
      </div>
    </div>
  );
};

export default PaymentPage;

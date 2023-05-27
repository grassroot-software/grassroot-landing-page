import React, { useState } from "react";
import { handlePayment } from "../../payment-api/paystack";
import './paymentForm.css'

import Navbar from "../../components/Navbar";

const PaymentForm = () => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePayment(email)
        console.log(email)        
    }

    return (
        <div>
            <Navbar />

            <div className="payment-form-container">
                <div className="payment-description">
                    <h1>Make Payment</h1>
                    <p>Enter email to confirm payment of GHS 500</p>
                </div>

                {/* Email Field */}
                <form onSubmit={handleSubmit}>
                    <label>Email Address:</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your e-mail addresss"
                    />

                    {/* Button */}
                    <button type="submit" disabled={loading} className="pay-button">
                        {loading ? 'Processing...' : 'Proceed to pay GHS 50'}
                    </button>
                </form>

            </div>

        </div>
    )
};

export default PaymentForm;
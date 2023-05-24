import PaystackPop from '@paystack/inline-js';

export const handlePayment = (email) => {

    const publicKey = 'pk_live_d03c757f196b860ca71587ed8f85aa14d800e81a'

    const handler = PaystackPop.setup({
    key: publicKey, // Replace with your public key
    email: email,
    amount: 500 * 100,
    currency: 'GHS',

    onClose: function(){
      alert('Window closed.');
    },

    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);

      // Send mail here
      window.location.href = "/welcome"
    }
  });

  handler.openIframe();

}
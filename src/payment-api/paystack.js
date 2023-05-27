import PaystackPop from '@paystack/inline-js';


export const handlePayment = (email) => {
  


//   Live api_key
  const publicKey = 'pk_live_d03c757f196b860ca71587ed8f85aa14d800e81a'
  
//   Test api_Key
//   const publicKey = 'pk_test_bc4396a87abbbf22ff958db759d20fd8928760a1'


  const handler = PaystackPop.setup({
    key: publicKey, // Replace with your public key
    email: email,
    amount: 50 * 100,
    currency: 'GHS',

    onClose: function () {
      alert('Window closed.');
    },

    callback: function (response) {
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
      

      // Switch to welcome page
      window.location.href = "/welcome"
    }
  });

  handler.openIframe();

}

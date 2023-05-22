import PaystackPop from '@paystack/inline-js';

export const handlePayment = (email) => {

    const publicKey = 'pk_test_bc4396a87abbbf22ff958db759d20fd8928760a1'

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
      window.location.href = "/welcome_pro"
    }
  });

  handler.openIframe();

}
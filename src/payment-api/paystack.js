import PaystackPop from '@paystack/inline-js';
import emailjs from 'emailjs-com';

export const handlePayment = (email) => {
  
      // Send mail here
      var templateParams = {        
      email: email
    };
      emailjs.send('service_0mcfmwp', 'template_9lsiwyp', templateParams,'s0FLFeKbLc9PuH-nc')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });  
   

//   Live api_key
//   const publicKey = 'pk_live_d03c757f196b860ca71587ed8f85aa14d800e81a'
  
//   Test api_Key
  const publicKey = 'pk_test_bc4396a87abbbf22ff958db759d20fd8928760a1'


  const handler = PaystackPop.setup({
    key: publicKey, // Replace with your public key
    email: email,
    amount: 500 * 100,
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

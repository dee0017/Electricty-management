function payWithPaystack() {
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value * 100; // Convert to kobo (1 NGN = 100 kobo)

    // Basic validation to ensure email and amount are provided
    if (!email || !amount) {
        alert("Please fill in all required fields.");
        return;
    }

    // Initialize Paystack payment
    const handler = PaystackPop.setup({
        key: 'pk_test_986bb9e0739727b5acb34477c36637ecebf8d82f', // Replace with your Paystack public key
        email: email,
        amount: amount,
        currency: 'NGN',
        callback: function(response) {
            // Successful payment - handle confirmation
            alert('Payment successful! Transaction reference: ' + response.reference);
            // Optional: Send response.reference to your server for verification
        },
        onClose: function() {
            alert('Payment was not completed.');
        }
    });

    // Open Paystack payment modal
    handler.openIframe();
}

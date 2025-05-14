document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    name: this.name.value,
    email: this.email.value,
    mobile: this.mobile.value,
    password: this.password.value,
    phone: this.phone.value
  };

  console.log("Form Submitted:", JSON.stringify(formData, null, 2));

  const options = {
    key: "rzp_test_6m6u1G0cBVheDk", // ✅ Your test API key
    amount: 50000, // Amount in paise => ₹500.00
    currency: "INR",
    name: "XYZ Coaching Center",
    description: "Registration Payment",
    image: "https://i.ibb.co/FHVL2mY/book.png",
    handler: function (response) {
      alert("✅ Payment successful!\nPayment ID: " + response.razorpay_payment_id);
    },
    prefill: {
      name: formData.name,
      email: formData.email,
      contact: formData.mobile
    },
    theme: {
      color: "#8c52ff"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
});
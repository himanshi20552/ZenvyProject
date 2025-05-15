
 const firebaseConfig = {
  apiKey: "AIzaSyCWcWclniiicDfkzsURaAwrK-Et5mdA6Sc",
  authDomain: "zenvy-7dc85.firebaseapp.com",
  databaseURL: "https://zenvy-7dc85-default-rtdb.firebaseio.com/",
  projectId: "zenvy-7dc85",
  storageBucket: "zenvy-7dc85.appspot.com",
  messagingSenderId: "26583439213",
  appId: "1:26583439213:web:6f7ccfc516bd63727eec64"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    name: this.name.value.trim(),
    email: this.email.value.trim(),
    password: this.password.value,  
    phone: this.phone.value.trim()
  };

  // Save to Firebase before payment
  const newRef = database.ref("enrollments").push();
  newRef.set(formData)
    .then(() => {
      console.log("✅ Data saved to Firebase");

    alert("📝 Form submitted successfully!");

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
  })

   .catch((error) => {
      console.error("❌ Firebase save error:", error);
      alert("Something went wrong while saving your data.");
    });
});
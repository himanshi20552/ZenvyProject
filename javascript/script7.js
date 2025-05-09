document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const formData = {
      name: this.name.value,
      email: this.email.value,
      mobile: this.mobile.value,
      password: this.password.value,
      phone: this.phone.value
    };
  
    console.log("Form Submitted:", JSON.stringify(formData, null, 2));
  
    alert("Registration Successful!");
    this.reset();
  });
  
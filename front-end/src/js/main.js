// client side validation for contact form

//get field values through id
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let phoneno = document.getElementById("phoneno");
let fullnameError = document.getElementById("fullnameError");
let emailError = document.getElementById("emailError");
let phonenoError = document.getElementById("phonenoError");
let btn = document.getElementById("submitBtn");

//event listener
btn.addEventListener("click", (e) => {
  e.preventDefault(); //prevent form submission

  let isValid = true; //assume form is valid

  //reset error msg
  fullnameError.textContent = "";
  emailError.textContent = "";
  phonenoError.textContent = "";

  //trim() property to remove any whitespace
  let fullNameValue = fullname.value.trim();
  let emailValue = email.value.trim();
  let phonenoValue = phoneno.value.trim();

  //if empty

  if (fullNameValue === "") {
    fullnameError.textContent = "Full name is required";
    isValid = false;
  }

  if (emailValue === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  }

  if (phonenoValue === "") {
    phonenoError.textContent = "Phone number is required";
    isValid = false;
  }

 

  //validate fullname
  let namePattern = /^[a-zA-Z\s]*$/;
  if (fullNameValue !== "" && !namePattern.test(fullNameValue)) {
    fullnameError.textContent = "Only alphabets and spaces are allowed";
    isValid = false; //if validation fails
  }
  // validate email field
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue !== "" && !emailPattern.test(emailValue)) {
    emailError.textContent = "Invalid email address";
    isValid = false;
  }

  // validate phone number field
  let phonePattern = /^\d{10}$/;
  if (phonenoValue !== "" && !phonePattern.test(phonenoValue)) {
    phonenoError.textContent = "Phone number must be exactly 10 digits";
    isValid = false;
  }

  if (isValid) {
    //toastify for notification
    Toastify({
      text: "Thanks for submitting your information",
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "#03C03C",
        color: "#fff",
        border: "none",
        fontSize: "1rem",
        fontWeight: "bold",
        borderRadius: '5px',
        fontFamily: "Nunito, sans-serif",
      },
      offset: {
        x: 50,
        y: 10
      },
    }).showToast();

    // Clear form after submission
        fullname.value = "";
        email.value = "";
        phoneno.value = "";
  }
});

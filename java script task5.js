let password = "Jeshojlbenedict@0005";

if(password.length >= 8 &&
               /[a-z]/.test(password) &&
               /[A-Z]/.test(password) &&
               /\d/.test(password) &&
               /[!@#$%^&*(),.?":{}|<>]/.test(password))

    console.log("Strong password");
else
  console.log("Weak password");
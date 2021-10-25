<!--Function for the way to see if password is corect and show link for next puzzle--!>
function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "Human") {
      alert ("https://codepen.io/Joeyparisi/pen/ExvaMvd")
      return true;
   }
      alert("Incorrect Password");
      return false;
   }
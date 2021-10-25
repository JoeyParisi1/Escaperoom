<!--Function for the way to see if password is corect and show link for next puzzle--!>
function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "Human") {
      alert ("https://github.com/JoeyParisi1/Escaperoom/Puzzle5.html")
      return true;
   }
      alert("Incorrect Password");
      return false;
   }

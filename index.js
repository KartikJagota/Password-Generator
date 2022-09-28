let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("pw1")
let passwordLength = 12

function getRandomChars() {
  let randomChars = Math.floor(Math.random() * characters.length)
    return characters[randomChars]
}

function generateRandomChars() {
  let randomPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getRandomChars()
  }
  return randomPassword
}

function generateNewPassword() {
  password1.textContent = generateRandomChars()
}

function copy() {
  let range = document.createRange();
   range.selectNode(document.getElementById("pw1"));
   window.getSelection().removeAllRanges();
   window.getSelection().addRange(range);
   document.execCommand("copy");
   window.getSelection().removeAllRanges();
  alert("Copied the password");

}

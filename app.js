let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];
let captchaButton = document.getElementById("capta-button");
let captchaText = document.getElementById("captcha-text");

captchaButton.addEventListener("click", (event) => {
  event.preventDefault();
  function getNumber() {
    let number = "";
    for (let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * letters.length);
      number += letters[num];
    }
    console.log(typeof(number));
    return number;
  }
  let result = getNumber();
  captchaText.innerText = result;
});

let signUpButton = document.querySelector(".signup-btn");
let userName = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#psw');
let passwordConfirmation = document.querySelector('#psw-repeat');
let captcha = document.querySelector('#captcha');

signUpButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(typeof(captcha.value));
    // if(userName.value.length > 4 && email.value.length > 4 && password.value == passwordConfirmation.value){
    //     alert('Sucessfully signed up')
    // }else{
    //     alert('Failed to sign up')
    // }
})

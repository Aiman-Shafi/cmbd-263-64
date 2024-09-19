// TODO: 1 - Generate 4 digit PIN - done
// TODO: 2 - Make the keypad functional - done
// TODO: 3 - Make SUBMIT Btn & notification work
// TODO: 4 - Make try out functional
// TODO: 5 - "<" onClick - remove single digit & "C" Clear whole input
// TODO: 6 - if try = 0 then all the button will be disable (generate)

// Selectors
const generatePinBtn = document.querySelector(".generate-btn");
const generatedPinInput = document.querySelector(".generated-pin");
const keypadInput = document.querySelector(".show-value");
const removeBtn = document.getElementById("removeBtn");
const wrongNotification = document.querySelector(".wrong-pin");
const correctNotification = document.querySelector(".correct-pin");
const submit = document.querySelector(".submit-btn");
const tryLeft = document.getElementById("tryLeft");

// generate 4 digit pin
function generatePin() {
  let pin = Math.floor(Math.random() * 9000) + 1000;
  generatedPinInput.value = pin;
  //   generatePinBtn.style.backgroundColor = "green";
  //   generatePinBtn.disabled = true;
}

// generate value from keypad
function keypad(number) {
  if (generatedPinInput.value == "") {
    alert("Generate a pin first! 🤬");
  } else {
    keypadInput.value += number;

    if (number === "C") {
      keypadInput.value = "";
    }
  }
}

// remove single digit
function removeSingleDigit() {
  const currentValue = keypadInput.value;
  if (currentValue == "") {
    alert("Nothing to remove..");
  }
  keypadInput.value = currentValue.slice(0, -1);
}

// hide all notification by default
function hideNotification() {
  wrongNotification.style.display = "none";
  correctNotification.style.display = "none";
}

// match pin
function matchPin() {
  if (generatedPinInput.value == keypadInput.value) {
    console.log("matched!");
    submit.style.background = "green";
    generatePinBtn.style.background = "green";
    correctNotification.style.display = "block";
    wrongNotification.style.display = "none";
  } else {
    submit.style.background = "red";
    generatePinBtn.style.background = "red";
    correctNotification.style.display = "none";
    wrongNotification.style.display = "block";
    keypadInput.value = "";
    handleTryLeft();
  }
}

function handleTryLeft() {
  let value = parseInt(tryLeft.innerText);
  console.log(value);
  if (0 < value) {
    tryLeft.innerText = value - 1;
  } else {
    alert("Try again later!");
  }
}

submit.addEventListener("click", () => {
  if (keypadInput.value == "") {
    alert("enter your pin...");
  } else {
    matchPin();
  }
});
generatePinBtn.addEventListener("click", generatePin);
removeBtn.addEventListener("click", removeSingleDigit);
hideNotification();

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");

function addition() {
  if (input1.value == "" || input2.value == "") {
    alert("Please insert value");
  } else {
    const addition = parseInt(input1.value) + parseInt(input2.value);
    result.innerHTML = `Addition: ${addition}`;

    // input1.value = "";
    // input2.value = "";
  }
}

function subtract() {
  if (input1.value == "" || input2.value == "") {
    alert("Please insert value");
  } else {
    const subtract = parseInt(input1.value) - parseInt(input2.value);
    result.innerHTML = `Subtract: ${subtract}`;

    // input1.value = "";
    // input2.value = "";
  }
}

function multiply() {
  if (input1.value == "" || input2.value == "") {
    alert("Please insert value");
  } else {
    const multiply = parseInt(input1.value) * parseInt(input2.value);
    result.innerHTML = `Multiply: ${multiply}`;

    // input1.value = "";
    // input2.value = "";
  }
}

function divide() {
  if (input1.value == "" || input2.value == "") {
    alert("Please insert value");
  } else {
    const divide = parseInt(input1.value) / parseInt(input2.value);
    result.innerHTML = `Division: ${divide}`;
  }

  //   input1.value = "";
  //   input2.value = "";
}

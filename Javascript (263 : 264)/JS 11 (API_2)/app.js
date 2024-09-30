// console.log("1");
// console.log("2");
// console.log(3);
// alert("wait...");
// console.log("thanks...");

function changeText() {
  document.querySelector("h2").innerHTML = "Javascript is Async..";
  console.log("Changed...");
}

const timer = setTimeout(changeText, 3000);
console.log("Change heading initiated...");
// changeText();
console.log("Changing..");

function changeColor() {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}

// changeColor();

// const interval = setInterval(changeColor, 1000);

const generateUserBtn = document.getElementById("generate");
generateUserBtn.addEventListener("click", () => {
  //   clearInterval(interval);
  console.log("timer started....");
  clearTimeout(timer);
  console.log("timer stopped");
});

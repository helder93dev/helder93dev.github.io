const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/ashe.jpg") {
    myImage.setAttribute("src", "imagens/ashe2.jpg");
  } else {
    myImage.setAttribute("src", "imagens/ashe.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = 'Mozilla é legal, ' + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = 'Mozilla é legal, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

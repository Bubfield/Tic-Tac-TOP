const gameBoard = (() => {
  const array = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];
  return { array };
})();

const playerFactory = (name, age) => {
  return { name, age };
};

const displayController = (() => {})();

function Render() {
  for (let i = 0; i < gameBoard.array.length; i++) {
    arrayDiv[i].textContent += gameBoard.array[i];
  }
}

let player;
let computer;

function PlayerChoice(playerChoice) {
  player = playerChoice;
}

const arrayDiv = document.querySelectorAll(".array-div");

const x = document.getElementById("x");
const o = document.getElementById("o");

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

const container = document.querySelector(".container");

const result = document.querySelector(".result");

const restart = document.querySelector(".restart");

const playerName = document.querySelector(".player-name");
const nameInput = document.getElementById("player-name");
const nameDiv = document.querySelector(".name-div");
const xOrO = document.querySelector(".x-or-o");

let chosenName;

playerName.addEventListener("submit", function (e) {
  e.preventDefault();
  chosenName = nameInput.value;
  container.style.display = "grid";
  nameDiv.style.display = "none";
});

restart.addEventListener("click", function () {
  arrayDiv.forEach(function (div) {
    div.textContent = "";
    result.textContent = "";
    result.style.display = "none";
    container.style.display = "none";
    xOrO.style.display = "block";
    nameDiv.style.display = "block";
    nameInput.value = "";
    player = "";
  });
});

x.addEventListener("click", function () {
  PlayerChoice(x.textContent);
  xOrO.style.display = "none";
  computer = "O";
});

o.addEventListener("click", function () {
  PlayerChoice(o.textContent);
  xOrO.style.display = "none";
  computer = "X";
});

let win = false;

arrayDiv.forEach(function (div) {
  div.addEventListener("click", function () {
    //setTimeout(() => {}, 1000);
    if (div.textContent) {
      div.textContent = div.textContent;
    } else {
      div.textContent = player;
    }
    if (
      one.textContent &&
      one.textContent === two.textContent &&
      one.textContent === three.textContent
    ) {
      win = true;
      result.textContent = `${chosenName} WINS!`;
      result.style.display = "flex";
      container.style.display = "none";
    }
    if (
      one.textContent &&
      one.textContent === four.textContent &&
      one.textContent === seven.textContent
    ) {
      win = true;
      result.textContent = `${chosenName} WINS!`;
      result.style.display = "flex";
      container.style.display = "none";
    }
    if (
      one.textContent &&
      one.textContent === five.textContent &&
      one.textContent === nine.textContent
    ) {
      win = true;
      result.textContent = `${chosenName} WINS!`;
      result.style.display = "flex";
      container.style.display = "none";
    }
    if (
      two.textContent &&
      two.textContent === five.textContent &&
      two.textContent === eight.textContent
    ) {
      win = true;
      result.textContent = `${chosenName} WINS!`;
      result.style.display = "flex";
      container.style.display = "none";
    }
    if (
      three.textContent &&
      three.textContent === five.textContent &&
      three.textContent === seven.textContent
    ) {
      win = true;
      result.textContent = `${chosenName} WINS!`;
      result.style.display = "flex";
      container.style.display = "none";
    }
    if (
      three.textContent &&
      three.textContent === six.textContent &&
      three.textContent === nine.textContent
    ) {
      win = true;
      result.textContent = `${chosenName} WINS!`;
      result.style.display = "flex";
      container.style.display = "none";
    }
    if (
      four.textContent &&
      four.textContent === five.textContent &&
      four.textContent === six.textContent
    ) {
      win = true;
      result.textContent = `${chosenName} WINS!`;
      result.style.display = "flex";
      container.style.display = "none";
    }
    if (
      seven.textContent &&
      seven.textContent === eight.textContent &&
      seven.textContent === nine.textContent
    ) {
      win = true;
      result.textContent = `${chosenName} WINS!`;
      result.style.display = "flex";
      container.style.display = "none";
    }
    if (
      one.textContent &&
      two.textContent &&
      three.textContent &&
      four.textContent &&
      five.textContent &&
      six.textContent &&
      seven.textContent &&
      eight.textContent &&
      nine.textContent &&
      !win
    ) {
      result.textContent = "IT'S A DRAW!";
      result.style.display = "flex";
      container.style.display = "none";
    }
  });
});

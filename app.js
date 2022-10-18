const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");
let gameState = ["", "", "", "", "", "", "", "", ""];
let winOp = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

// gameState[4]='x'
let player = "x";
let winner = null;
board.addEventListener("click", (element) => {
  // console.dir(e.target);
  // checkWin(player);
  putSign(element);
  gameStatus(element);
  checkWin();
  switchTurn(element);
let reset =document.querySelector('#reset');
reset.addEventListener('click', (e)=>{
 
  if(e.target.id=="reset"){
    console.log('reset');
    a();
  }
});
});

function putSign(element) {
  if (element.target.innerText == "") {
    if (player === "x") {
      element.target.innerText = "x";
      element.target.style.color = "pink";
      element.target.style.fontSize = "70px";
    } else {
      element.target.innerText = "o";
      element.target.style.color = "pink";
      element.target.style.fontSize = "70px";
    }
  }
}
function gameStatus(element) {
  let id = element.target.id;
  gameState[id] = player;
  console.log(gameState);
  console.log(id);
}

function checkWin() {
  for (let i = 0; i < winOp.length; i++) {
    let test = winOp[i];
    let position1 = test[0]; //0
    let position2 = test[1]; // 1
    let position3 = test[2]; //2
    if (
      gameState[position1] == player &&
      gameState[position2] == player &&
      gameState[position3] == player
    ) {
      console.log("win!!!");
    }
  }
}

function a() {
  gameState = new Array(9).fill("");
  console.log(gameState);
  cells.forEach((cell)=>{
    cell.innerText = ""
  })
  
}

function switchTurn(element) {
  if (player === "x") {
    player = "o";
  } else player = "x";
}



// function checkWin(player) {
// if (
//   (cells[0].classList.contains(player) &&
//     cells[1].classList.contains(player) &&
//     cells[2].classList.contains(player)) ||
//   (cells[3].classList.contains(player) &&
//     cells[4].classList.contains(player) &&
//     cells[5].classList.contains(player)) ||
//   (cells[6].classList.contains(player) &&
//     cells[7].classList.contains(player) &&
//     cells[8].classList.contains(player)) ||
//   (cells[0].classList.contains(player) &&
//     cells[3].classList.contains(player) &&
//     cells[6].classList.contains(player)) ||
//   (cells[1].classList.contains(player) &&
//     cells[4].classList.contains(player) &&
//     cells[7].classList.contains(player)) ||
//   (cells[2].classList.contains(player) &&
//     cells[5].classList.contains(player) &&
//     cells[8].classList.contains(player)) ||
//   (cells[0].classList.contains(player) &&
//     cells[4].classList.contains(player) &&
//     cells[8].classList.contains(player)) ||
//   (cells[6].classList.contains(player) &&
//     cells[4].classList.contains(player) &&
//     cells[2].classList.contains(player))
// ) {
//     console.log(player + "win!!!!!!");
//     player = winner;
//     return true;
//   }
// }

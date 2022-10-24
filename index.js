// Snake Config

let defaultCauda = 3;
let tamanhoCauda = defaultCauda;
let caminhoSnake = [];
// Rever eixo Y
let snakeEixoY = 1;
let snakeEixoX = snakeEixoY = 10;

// Tela do Game
let screenWidth = tamanhoCaminho = 20;
let nY;
let nX = nY = 0;

// Food Snake
let appleX = (appleY = 15);
let appleY


let canvas;
let ctx;
window.onload = function () {
   canvas = document.getElementById("canvas");
   ctx = canvas.getContext("2d");
   document.addEventListener("keydown", keyDownEvent);
   let x = 8;
   setInterval(drawGame, 1000 / x);
};

function keyDownEvent(event) {
   switch (event.keyCode) {
      case 37:
         nX = -1;
         nY = 0;
      case 38:
         nX = 0;
         nY = -1;
      case 39:
         nX = 1;
         nY = 0;
      case 40:
         nX = 0;
         nY = 1;
         break;
   }
}

// Update game
function drawGame() {
   snakeEixoX += nX;
   snakeEixoY += nY;

   if (snakeEixoX < 0) {
      snakeEixoX = screenWidth - 1;
   } 
   if (snakeEixoX > screenWidth - 1) {
      snakeEixoX = 0;
   }
   if (snakeEixoY < 0) {
      snakeEixoY = screenWidth - 1;
   }
   if (snakeEixoY > screenWidth - 1) {
      snakeEixoY = 0;
   }


}
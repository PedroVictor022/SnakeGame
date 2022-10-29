let canvas;
let ctx;

let izi = document.getElementById("izi");
let normal = document.getElementById("normal");
let hard = document.getElementById("hard");

let counterApple = document.getElementById("counter");
let snakeWidth = document.getElementById("widthSnake");

let defaultTamanhoCauda = 3;
let tamanhoCauda = defaultTamanhoCauda;
let caminhoCobra = [];
let snakeEixoX = cobraEixoY = 10;

let screenWidth = tamanhoCaminho = 20;
let nX = nY = 0;

let appleX = (appleY = 15);
let countApple = 0;

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
         break;
      case 38:
         nX = 0;
         nY = -1;
         break;
      case 39:
         nX = 1;
         nY = 0;
         break;
      case 40:
         nX = 0;
         nY = 1;
         break;
   }
}

function drawGame() {
   snakeEixoX += nX;
   cobraEixoY += nY;
   if (snakeEixoX < 0) {
      snakeEixoX = screenWidth - 1;
   }

   if (snakeEixoX > screenWidth - 1) {
      snakeEixoX = 0;
   }

   if (cobraEixoY < 0) {
      cobraEixoY = screenWidth - 1;
   }

   if (cobraEixoY > screenWidth - 1) {
      cobraEixoY = 0;
   }

   if (snakeEixoX == appleX && cobraEixoY == appleY) {
      tamanhoCauda++;
      appleX = Math.floor(Math.random() * (Math.random() * screenWidth));
      appleY = Math.floor(Math.random() * screenWidth);
      countApple++;
      counterApple.innerText = `Quantidade de frutas: ${countApple}`
   }


   ctx.fillStyle = "black";
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   ctx.fillStyle = "green";
   for (let i = 0; i < caminhoCobra.length; i++) {
      ctx.fillRect(
         caminhoCobra[i].x * tamanhoCaminho,
         caminhoCobra[i].y * tamanhoCaminho,
         tamanhoCaminho,
         tamanhoCaminho
      );
      if (caminhoCobra[i].x == snakeEixoX && caminhoCobra[i].y == cobraEixoY) {
         tamanhoCauda = defaultTamanhoCauda;
         snakeWidth.innerText = `Tamanho: ${tamanhoCauda}`
      }
      snakeWidth.innerText = `Tamanho: ${tamanhoCauda}`
   }
   ctx.fillStyle = "red";
   ctx.fillRect(appleX * tamanhoCaminho, appleY * tamanhoCaminho, tamanhoCaminho, tamanhoCaminho);

   caminhoCobra.push({
      x: snakeEixoX,
      y: cobraEixoY
   });
   while (caminhoCobra.length > tamanhoCauda) {
      caminhoCobra.shift();
   }
}



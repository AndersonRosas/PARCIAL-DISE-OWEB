const player = document.getElementById("player");
const gameArea = document.getElementById("gameArea");
let x = gameArea.clientWidth / 2 - player.clientWidth / 2;
let y = gameArea.clientHeight / 2 - player.clientHeight / 2;

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      y = Math.max(0, y - 10);
      break;
    case "ArrowDown":
      y = Math.min(gameArea.clientHeight - player.clientHeight, y + 10);
      break;
    case "ArrowLeft":
      x = Math.max(0, x - 10);
      break;
    case "ArrowRight":
      x = Math.min(gameArea.clientWidth - player.clientWidth, x + 10);
      break;
  }
  player.style.top = y + "px";
  player.style.left = x + "px";
});

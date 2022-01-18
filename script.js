var mario = document.querySelector("img");
var background = document.querySelector("body");
var isMarioMoving = false;
var moveInterval;
var move = 0;

function marioMove(e) {
  var pressedButton = e.keyCode;

  if (!isMarioMoving) {
    //kliknuta desna strelica,mario trci desno
    if (pressedButton === 39) {
      isMarioMoving = true;
      mario.setAttribute("src", "./mario_running.gif");
      mario.className = "marioTurnedRight";
      moveInterval = setInterval(() => {
        move -= 2;
        background.style.backgroundPosition = move + "px";
      });
    }
    //kliknuta leva strelica,mario trci levo
    if (pressedButton === 37) {
      isMarioMoving = true;
      mario.setAttribute("src", "./mario_running.gif");
      mario.className = "marioTurnedLeft";
      moveInterval = setInterval(() => {
        move += 2;
        background.style.backgroundPosition = move + "px";
      });
    }
    //kliknuta strelica na gore, mario skace
    if (pressedButton === 38) {
      isMarioMoving = true;
      mario.style.bottom = "200px";
    }
  }
}
function marioStop() {
  isMarioMoving = false;
  clearInterval(moveInterval);
  mario.style.bottom = "100px";
  mario.setAttribute("src", "./mario.png");
}

// keydown -> event pritisnuto BILO KOJE dugme
document.addEventListener("keydown", marioMove);
// keyup -> event otpustanje BILO KOG dugmeta
document.addEventListener("keyup", marioStop);

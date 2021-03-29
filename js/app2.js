var getPokemon = Cookies.get("selection");
var gameOver = false;
var link = document.createElement("link");
link.setAttribute(`rel`, `stylesheet`);
link.setAttribute(`type`, `text/css`);
link.setAttribute(
  `href`,
  `https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap`
);
document.head.appendChild(link);

var playerImg = document.getElementById("player");
if (getPokemon === `Poliwhirl`) {
  playerImg.innerHTML = `<img src="/images/Poliwhirl.gif" alt="Poliwhirl gif" />`;
} else if (getPokemon === `Jigglypuff`) {
  playerImg.innerHTML = `<img src="/images/Jigglypuff.gif" alt="Jigglypuff gif" />`;
} else if (getPokemon === `Snorlax`) {
  playerImg.innerHTML = `<img src="/images/Snorlax.gif" alt="Snorlax gif" />`;
}
//stored the value of the cookies for current health in variables
var compCurrentHealth = Cookies.get("compCurrentHealth");
var userCurrentHealth = Cookies.get("userCurrentHealth");
var compDamage;
var compDamageDone = userCurrentHealth + compDamage;
//injected HTML onto the page to show the players' max healths before the battle begins
//max health comes from cookies in app.js cookies
var compMaxHealth = Cookies.get("compMaxHealth", compMaxHealth);
document.getElementById(
  `healthPointsP2`
).innerHTML = `<h3>Player 2 Health: ${compCurrentHealth} / ${compMaxHealth}</h3>`;
var userMaxHealth = Cookies.get("userMaxHealth", userMaxHealth);
document.getElementById(
  `healthPointsP1`
).innerHTML = `<h3>Player 1 Health: ${userCurrentHealth} / ${userMaxHealth}</h3>`;
//changed the styling of the health points
var healthPts = document.getElementsByClassName("healthPts");
for (var i = 0; i < healthPts.length; i++) {
  healthPts[i].style.fontFamily = `'Press Start 2P', cursive`;
  healthPts[i].style.fontSize = `20px`;
  healthPts[i].style.color = `#2f6fb9`;
  healthPts[i].style.background = `#ffffffbb`;
  healthPts[i].style.padding = `10px 10px`;
  healthPts[i].style.borderRadius = `10px`;
}

//if during click, getPokemon kills cpu, cpu doesn't attack OR
//set userPokemon to health it was before cpu does damage to them
// function plyrTie() {
//   if (userCurrentHealth <= 0 && compCurrentHealth <= 0) {
//     document.getElementById(
//       "winContainer"
//     ).innerHTML = `<h1>You win ${getPokemon}!</h1>`;
//     userCurrentHealth += compDamage;
//     compCurrentHealth = 0;
//     gameOver = true;
//   }
// }
//****write a function ("theLoser") that takes min 2 args - combine cpuLost and plyrLost fn into one  */
//set blissey to a cookie/variable or us if statement
function compLost() {
  if (compCurrentHealth <= 0) {
    // plyrTie();
    compCurrentHealth = 0;
    document.getElementById(
      "winContainer"
    ).innerHTML = `<h1>You win ${getPokemon}!</h1>`;
    gameOver = true;
  }
}
function plyrLost() {
  if (userCurrentHealth <= 0) {
    // plyrTie();
    userCurrentHealth = 0;
    document.getElementById(
      "winContainer"
    ).innerHTML = `<h1>You win Blissey!</h1>`;
    gameOver = true;
  }
}

function takeTurn(damage) {
  compDamage = Math.floor(Math.random() * 150);
  // compDamage = 250;
  if (gameOver === false) {
    if (compCurrentHealth > 0) {
      compCurrentHealth -= damage;
      // if (compCurrentHealth <= 0) {
      //   compCurrentHealth = 0;
      //   document.getElementById(
      //     "winContainer"
      //   ).innerHTML = `<h1>You win ${getPokemon}!</h1>`;
      //   gameOver = true;
      // }
      compLost();
      Cookies.set("compCurrentHealth", compCurrentHealth);
    }
    if (userCurrentHealth > 0) {
      userCurrentHealth -= compDamage;
      userLost();
      // if (userCurrentHealth <= 0) {
      //   userCurrentHealth = 0;
      //   document.getElementById(
      //     "winContainer"
      //   ).innerHTML = `<h1>You win Blissey!</h1>`;
      //   gameOver = true;
      // }
      Cookies.set("userCurrentHealth", userCurrentHealth);
    }
  }
  document.getElementById(
    "healthPointsP1"
  ).innerHTML = `<h3>Player 1 Health: ${userCurrentHealth} / ${userMaxHealth} </h3>`;
  document.getElementById(
    "healthPointsP2"
  ).innerHTML = `<h3>Player 2 Health: ${compCurrentHealth} / ${compMaxHealth}</h3>`;
}

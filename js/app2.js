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

// if gameOver = false;
// else
//but need to check if game is over before this code runs
var playerImg = document.getElementById("player");
if (getPokemon === `Poliwhirl`) {
  playerImg.innerHTML = `<img src="/images/Poliwhirl.gif" alt="Poliwhirl gif" />`;
} else if (getPokemon === `Jigglypuff`) {
  playerImg.innerHTML = `<img src="/images/Jigglypuff.gif" alt="Jigglypuff gif" />`;
} else if (getPokemon === `Snorlax`) {
  playerImg.innerHTML = `<img src="/images/Snorlax.gif" alt="Snorlax gif" />`;
}
//injected HTML onto the page to show the players' max healths before the battle begins
//max health comes from cookies in app.js cookies
var compMaxHealth = Cookies.get("compMaxHealth", compMaxHealth);
document.getElementById(
  `healthPointsP2`
).innerHTML = `<h3>Player 2 Health: ${compMaxHealth}</h3>`;
var userMaxHealth = Cookies.get("userMaxHealth", userMaxHealth);
document.getElementById(
  `healthPointsP1`
).innerHTML = `<h3>Player 1 Health: ${userMaxHealth}</h3>`;
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
//stored the value of the cookies for current health in variables
var compCurrentHealth = Cookies.get("compCurrentHealth");
var userCurrentHealth = Cookies.get("userCurrentHealth");

//made a function for the attack buttons
function takeTurn(damage) {
  compCurrentHealth -= damage;
  if (compCurrentHealth <= 0) {
    document.getElementById(
      "winContainer"
    ).innerHTML = `<h1>You win ${getPokemon}!</h1>`;
    compCurrentHealth = 0;
  } else if (compCurrentHealth > 0) {
    userCurrentHealth =
      userCurrentHealth - Math.floor(Math.random(damage) * 150);
  }
  if (userCurrentHealth <= 0) {
    document.getElementById(
      "winContainer"
    ).innerHTML = `<h1>You win Blissey!</h1>`;
    userCurrentHealth = 0;
  }
  document.getElementById(
    "healthPointsP1"
  ).innerHTML = `<h3>Player 1 Health: ${userCurrentHealth}</h3>`;
  document.getElementById(
    "healthPointsP2"
  ).innerHTML = `<h3>Player 2 Health: ${compCurrentHealth}</h3>`;
  document.getElementById("winContainer").style.left = `0`;
  document.getElementById("winContainer").style.color = `#f1ca23`;
  document.getElementById("winContainer").style.top = `35vh`;
  document.getElementById("winContainer").style.textAlign = `center`;
  document.getElementById(
    "winContainer"
  ).style.fontFamily = `'Press Start 2P', cursive`;
  document.getElementById("winContainer").style.fontSize = `25px`;
  //is there a better way to style multiple parts of the same element in JS all at once? This bothers me
  Cookies.set("newCompCrtHealth", compCurrentHealth);
  Cookies.set("newUsrCrtHealth", userCurrentHealth);
}

// if (compCurrentHealth <= 0 && userCurrentHealth <= 0) {
//   gameOver;
// }
// var cpuCurrentHealth = compCurrentHealth - damage;
// var usrCrtHealth = userCurrentHealth - damage;
// Cookies.set("newCurrentHealth", cpuCurrentHealth);
// Cookies.set("newUsrCrtHealth", usrCrtHealth);
// console.log(usrCrtHealth);
// if (usrCrtHealth > 0 && cpuCurrentHealth > 0) {
//   takeTurn();
// }
// Cookies.set("compCurrentHealth");
// document.getElementById(
//   "healthPointsP1"
// ).innerHTML = `<h2>Player 1 Health: ${cpuCurrentHealth}</h2>`;
// console.log(cpuCurrentHealth);
// if (takeTurn()) {
//   compCurrentHealth - damage;
// }

//   if (compCurrentHealth - damage <= 0) {
//     document.getElementById(
//       "winContainer"
//     ).innerHTML = `<h2>You win ${getPokemon}!</h2>`;
//   } else if (userCurrentHealth - damage <= 0) {
//     document.getElementById(
//       "winContainer"
//     ).innerHTML = `<h2>You win ${getPokemon}!</h2>`;
//   }
//   Cookies.set("compCurrentHealth", cpuCurrentHealth);
//   Cookies.set("userCurrentHealth", usrCrtHealth);
// }
//   var usrCrtHealth = userCurrentHealth - damage;
//   document.getElementById(
//     `healthPointsP1`
//   ).innerText = `Player 1 Health: ${usrCrtHealth}`;
//   var cpuCurrentHealth = compCurrentHealth - damage;
//   document.getElementById(
//     `healthPointsP2`
//   ).innerText = `Player 2 Health: ${cpuCurrentHealth}`;
//   if (cpuCurrentHealth <= 49) {
//     document.getElementById(
//       "winContainer"
//     ).innerHTML = `<h2>You win ${getPokemon}!</h2>`;
//     // compCurrentHealth = 0;
//   } else if (usrCrtHealth <= 49) {
//     document.getElementById(
//       "winContainer"
//     ).innerHTML = `<h2>You win Blissey!</h2>`;
//     // userCurrentHealth = 0;
//   }
//   if (cpuCurrentHealth > 1 && usrCrtHealth > 1) {
//     gameOver;
//   }

//   if ((gameOver = true)) {
//     // if (compCurrentHealth <= 1 && userCurrentHealth <= 1) {
//     // if (userCurrentHealth > 49) {
//     //   document.getElementById(
//     //     `healthPointsP2`
//     //   ).innerText = `Player 2 Health: ${userCurrentHealth}`;
//     // }
//     // && userCurrentHealth >
//     // && compCurrentHealth > 50

//     // else if (usrCrtHealth < 49 && cpuCurrentHealth < 49) {
//     //   document.getElementById(
//     //     "winContainer"
//     //   ).innerHTML = `<h2>You win ${getPokemon}</h2>`;
//     //   usrCrtHealth = 1;
//     //   cpuCurrentHealth = 0;
//     // }

//     Cookies.set("compCurrentHealth", cpuCurrentHealth);
//     Cookies.set("userCurrentHealth", usrCrtHealth);
//   }
// }

//I messed around with this a bunch but I have to go so I left it a mess sorry

// console.log(compCurrentHealth);
// console.log(userCurrentHealth);

// Cookies.set ("gameProgress",)

//Object.keys() to count number of key-value pairs in an OBJECT (.length for arrays)

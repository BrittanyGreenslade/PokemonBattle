var getPokemon = Cookies.get("selection");
var gameOver = false;
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

var compMaxHealth = Cookies.get("compMaxHealth", compMaxHealth);
document.getElementById(
  `healthPointsP2`
).innerText = `Player 2 Health: ${compMaxHealth}`;
var userMaxHealth = Cookies.get("userMaxHealth", userMaxHealth);
document.getElementById(
  `healthPointsP1`
).innerText = `Player 1 Health: ${userMaxHealth}`;

var compCurrentHealth = Cookies.get("compCurrentHealth");
var userCurrentHealth = Cookies.get("userCurrentHealth");

function takeTurn(damage) {
  cpuCurrentHealth = compCurrentHealth - damage;
  usrCurrentHealth = userCurrentHealth - damage;
  document.getElementById(
    `healthPointsP2`
  ).innerText = `Player 2 Health: ${cpuCurrentHealth}`;
  document.getElementById(
    `healthPointsP1`
  ).innerText = `Player 1 Health: ${usrCurrentHealth}`;
  if (gameOver) {
    if (cpuCurrentHealth > 1 && usrCurrentHealth > 1) {
    }
  }
  if ((gameOver = true)) {
    // if (compCurrentHealth <= 1 && userCurrentHealth <= 1) {
    // if (userCurrentHealth > 49) {
    //   document.getElementById(
    //     `healthPointsP2`
    //   ).innerText = `Player 2 Health: ${userCurrentHealth}`;
    // }
    // && userCurrentHealth >
    // && compCurrentHealth > 50
    if (cpuCurrentHealth <= 49) {
      document.getElementById(
        "winContainer"
      ).innerHTML = `<h2>You win ${getPokemon}!</h2>`;
      // compCurrentHealth = 0;
    } else if (usrCurrentHealth <= 49) {
      document.getElementById(
        "winContainer"
      ).innerHTML = `<h2>You win Blissey!</h2>`;
      // userCurrentHealth = 0;
    } else if (usrCurrentHealth < 49 && cpuCurrentHealth < 49) {
      document.getElementById(
        "winContainer"
      ).innerHTML = `<h2>You win ${getPokemon}</h2>`;
      usrCurrentHealth = 1;
      cpuCurrentHealth = 0;
    }

    Cookies.set("compCurrentHealth", cpuCurrentHealth);
    Cookies.set("userCurrentHealth", usrCurrentHealth);
  }
}

// console.log(compCurrentHealth);
// console.log(userCurrentHealth);

// Cookies.set ("gameProgress",)

//Object.keys() to count number of key-value pairs in an OBJECT (.length for arrays)

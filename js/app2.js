var getPokemon = Cookies.get("selection");
var gameOver = false;
document.title = `${getPokemon} vs. Blissey`;
//grabbed the empty element with the id "player" from the secondPg.html and made a conditional
//saying: if the cookie I grabbed has the value of (name), put that cookie into the
//empty div called "player"
var playerImg = document.getElementById("player");
if (getPokemon === `Slakoth`) {
  playerImg.innerHTML = `<img id="slakothPic" src="/images/Slakoth.gif" alt="Slakoth gif" />`;
} else if (getPokemon === `Snorlax`) {
  playerImg.innerHTML = `<img src="/images/Snorlax.gif" alt="Snorlax gif" />`;
} else if (getPokemon === `Mimikyu`) {
  playerImg.innerHTML = `<img src="/images/Mimikyu2.gif" alt="Mimikyu gif" />`;
}
//stored the value of the cookies for current health in variables
var compCurrentHealth = Cookies.get("compCurrentHealth");
var userCurrentHealth = Cookies.get("userCurrentHealth");
//set a global variable as 'undefined' that I have updating within functions below,
//so that I can access it outside of thosefunctions
var compDamage;

//injected HTML onto the page to show both players' current health out of their total/max
//health before the battle begins (both are set in cookies in app.js)
var compMaxHealth = Cookies.get("compMaxHealth", compMaxHealth);
document.getElementById(
  `healthPointsP2`
).innerHTML = `<h3 class="gameFont">Blissey Health: ${compCurrentHealth} / ${compMaxHealth}</h3>`;
var userMaxHealth = Cookies.get("userMaxHealth", userMaxHealth);
document.getElementById(
  `healthPointsP1`
).innerHTML = `<h3 class="gameFont">${getPokemon} Health: ${userCurrentHealth} / ${userMaxHealth}</h3>`;

//makes the currentHealths undefined when the game ends, so the following conditional
//can send the user to home pg
function clearCache() {
  if (gameOver === true) {
    Cookies.remove("userCurrentHealth");
    Cookies.remove("compCurrentHealth");
  }
}
//sends users back to homepage to pick a pokemon if any of the cookies are undefined (i.e.
//which pokemon they've chosen, computer's health pts, player's health pts)
if (
  getPokemon === undefined ||
  compCurrentHealth === undefined ||
  userCurrentHealth === undefined
) {
  window.open(`../index.html`, `_self`);
}
//declaring a function stating when the computer player loses; ensures the
//number for their health stays at 0 on the screen and doesn't go into negatives;
//shows a message to say who won & link to go back to first page;ends the game;
//clears the cookies saved from the battle;
//this function is called in the battle below
function compLost() {
  if (compCurrentHealth <= 0) {
    compCurrentHealth = 0;
    document.getElementById(
      "winContainer"
    ).innerHTML = `<h1 class="gameFont">You win ${getPokemon}!</h1><br/><a id="plyAgain" href="../index.html">Play again</a>`;
    gameOver = true;
    clearCache();
    //something feels repetitive about putting this here because the condition for this is
    //`if gameOver = true"` but.... it works so I'm going to leave it and think about it more
  }
}
//declaring a function stating when the user player loses; ensures the number for their health
//stays at 0 on the screen and doesn't go into negatives; shows a message to say
//who won & link to go back to first page; ends the game; clears the cookies
//saved from the battle
//this function is called in the battle below
function userLost() {
  if (userCurrentHealth <= 0) {
    userCurrentHealth = 0;
    document.getElementById(
      "winContainer"
    ).innerHTML = `<h1 class="gameFont">Blissey wins!</h1><br/><a id="plyAgain" href="../index.html">Play again</a>`;
    gameOver = true;
    clearCache();
  }
}
//a function for when the attack happens. This function is called 'on click' in my HTML (attack
//buttons).
function takeTurn(damage) {
  compDamage = Math.floor(Math.random() * 150);
  //makes the computer's rebuttle a random number between 0 and 1, multiplied by 150 to make it
  //a bigger number, then rounded it down to a whole number. I need to read more about this...
  //150 felt like it made the odds for each player close but I don't really know why...
  if (gameOver === false) {
    //if the game is still going on, check:
    if (compCurrentHealth > 0) {
      //do damage:
      compCurrentHealth -= damage;
      //then check the function to see if the computer's health is <=0
      compLost();
      Cookies.set("compCurrentHealth", compCurrentHealth);
      //then set the cookies to the new amt minus the damage once user's turn is over
      document.getElementById(
        "healthPointsP2"
      ).innerHTML = `<h3 class="gameFont">Blissey Health: ${compCurrentHealth} / ${compMaxHealth}</h3>`;
    }
    if (userCurrentHealth > 0 && gameOver === false) {
      //if, after the user's turn, the game is not over, do damage:
      userCurrentHealth -= compDamage;
      //then check the function to see if the user's health is <=0
      userLost();
      //then set the cookies to the new amt minus the damage once computer's turn is over
      Cookies.set("userCurrentHealth", userCurrentHealth);
      document.getElementById(
        "healthPointsP1"
      ).innerHTML = `<h3 class="gameFont">${getPokemon} Health: ${userCurrentHealth} / ${userMaxHealth} </h3>`;
    }
    if (userCurrentHealth < 600 && getPokemon === `Mimikyu`) {
      playerImg.innerHTML = `<img id="mimikyuBusted" src="/images/Mimikyu.gif" alt="Mimikyu gif" />`;
    }
  }
}

//ignore this stuff.
// //tried to write a function to combine my two losing ones above into one
// but it was making my cookies go below 0
//for some reason. so I'm going to try again later but ignore this for now
// should: take 2 min arts; set blissey to a cookie/variable or use if statement
// function losingPlyr(userCurrentHealth, compCurrentHealth) {
//   if (userCurrentHealth <= 0) {
//     userCurrentHealth = 0;
//     document.getElementById(
//       "winContainer"
//     ).innerHTML = `<h1 class="gameFont">Blissey wins!</h1><br/><a id="plyAgain" href="../index.html">Play again</a>`;
//     gameOver = true;
//     clearCache();
//   }
//   if (compCurrentHealth <= 0) {
//     compCurrentHealth = 0;
//     document.getElementById(
//       "winContainer"
//     ).innerHTML = `<h1 class="gameFont">You win ${getPokemon}!</h1><br/><a id="plyAgain" href="../index.html">Play again</a>`;
//     gameOver = true;
//     clearCache();
//     //something feels repetitive about putting this here because the condition for this is
//     //`if gameOver = true"` but.... it works so I'm going to leave it and think about it more
//   }
// }

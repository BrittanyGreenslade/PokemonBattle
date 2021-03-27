var getPokemon = Cookies.get("selection");
// console.log(getPokemon);

var playerImg = document.getElementById("player");
if (getPokemon === `Poliwhirl`) {
  playerImg.innerHTML = `<img src="/images/Poliwhirl.gif" alt="Poliwhirl gif" />`;
} else if (getPokemon === `Jigglypuff`) {
  playerImg.innerHTML = `<img src="/images/Jigglypuff.gif" alt="Jigglypuff gif" />`;
} else if (getPokemon === `Snorlax`) {
  playerImg.innerHTML = `<img src="/images/Snorlax.gif" alt="Snorlax gif" />`;
}

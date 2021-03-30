function setPokemon(selectedPokemon) {
  Cookies.set("selection", selectedPokemon);
  Cookies.set("userCurrentHealth", `600`);
  Cookies.set("userMaxHealth", `600`);
  Cookies.set("compCurrentHealth", `700`);
  Cookies.set("compMaxHealth", `700`);
  window.open(`/pages/secondPage.html`, `_self`);
}

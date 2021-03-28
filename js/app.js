function setPokemon(selectedPokemon) {
  Cookies.set("selection", selectedPokemon);
  Cookies.set("userCurrentHealth", `400`);
  Cookies.set("userMaxHealth", `400`);
  Cookies.set("compCurrentHealth", `400`);
  Cookies.set("compMaxHealth", `400`);
  window.open(`/pages/secondPage.html`, `_self`);
}

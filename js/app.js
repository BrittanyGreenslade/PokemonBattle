function setPokemon(selectedPokemon) {
  Cookies.set("selection", selectedPokemon);
  window.open(`/pages/secondPage.html`, `_self`);
}

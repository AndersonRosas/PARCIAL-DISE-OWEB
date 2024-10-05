const categoryfilter = document.getElementById("categoryFilter");
const content = document.querySelectorAll(".game-card");

categoryfilter.addEventListener("change", filtarCategorias);

function filtarCategorias() {
  const categoriaSeleccionada = categoryfilter.value;
  content.forEach((game) => {
    const categoria = game.getAttribute("data-category");
    if (
      categoriaSeleccionada === "todo" ||
      categoria === categoriaSeleccionada
    ) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  });
}

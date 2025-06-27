function busqueda() {
  const texto = document.getElementById("buscar").value.toLowerCase().trim();
  const libros = document.querySelectorAll(".book-item");
  const resultados = document.getElementById("resultados");
  const listaOriginal = document.getElementById("bookList");

  resultados.innerHTML = "";

  if (texto === "") {
    listaOriginal.style.display = "block";
    return;
  }

  listaOriginal.style.display = "none";

  let coincidencias = 0;

  libros.forEach(libro => {
    const titulo = libro.querySelector(".book-title").textContent.toLowerCase();
    const autor = libro.querySelector(".book-author").textContent.toLowerCase();
    const genero = libro.querySelector(".book-genero").textContent.toLowerCase();

    if (
      titulo.includes(texto) ||
      autor.includes(texto) ||
      genero.includes(texto)
    ) {
      const clon = libro.cloneNode(true);
      resultados.appendChild(clon);
      coincidencias++;
    }
  });

  if (coincidencias === 0) {
    resultados.innerHTML = "<li>No se encontraron resultados.</li>";
  }
}

function limpiarResultados() {
  const input = document.getElementById("buscar").value.trim();
  if (input === "") {
    document.getElementById("resultados").innerHTML = "";
    document.getElementById("bookList").style.display = "block";
  }
} 

// Asociar el evento submit al formulario para evitar que recargue la página
document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Previene el comportamiento por defecto
  busqueda();
});
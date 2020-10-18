/**
 * 
 * @param {object} dateMovies Datos del moves con la estructura:
 *                            {
 *                              titulo: {string} Título de la pelicula ,
 *                              Fecha de estreno: {string},
 *                              Foto: {string} url de la imagen de tapa
 *  *                              Compañia: {string} Nombre de la empresa,
 *  *                              Duracion: {string} duracion de la pelicula ,
 *  *                              Precio: {number}},

 *                            }
 */

/**
 * Función alternativa a crearDivMove con otra forma de resolución
 *
 * @param {Object} DateMovies idem crearDivMovies
 */
function crearDivMoves(dateMoves) {
  // Creo un elemento div para contener todo lo que estoy creando
  let divRespuesta = document.createElement("div");

  // Declaro una variable html y la inicializo con un string vacío
  let html = "";

  // Concateno valores en esa variable formando un pedazo de código HTML
  html += `<div class="contenedor-move">`;
  html += `<img src="${dateMoves.Foto}">`;
  html += `<ul>`;
  html += `<li>Título: ${dateMoves.Titulo}</li>`;
  html += `<li>Compañia: ${dateMoves.Compañia}</li>`;
  html += `<li>Fecha de lanzamiento:${dateMoves.Fecha_de_Estreno}</li>`;
  html += `<li>Duracion: ${dateMoves.Duracion}</li>`;
  html += `<li>Precio: ${dateMoves.Precio}</li>`;
  html += `</ul>`;
  html += `</div>`;

  // Asigno ese texto como HTML del div
  divRespuesta.innerHTML = html;

  // Asigno el callback de click al elemento imagen (como no tengo una variable para referirlo, uso
  // la función divRespuesta.querySelector("img"), que me va a traer el primer elemento "img" que encuentre dentro
  // de divRespuesta
  divRespuesta.querySelector("img").addEventListener("click", () => {
    divZoomTapa.querySelector("img").src = dateMoves.Foto;
    divZoomTapa.classList.remove("oculto");
    divSombreado.classList.remove("oculto");
  });

  // Retorno el div
  return divRespuesta;
}

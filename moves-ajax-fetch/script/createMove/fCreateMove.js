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
  // Creo div para contener todos los elementos (este es el div que
  // al final de la función se retorna)
  let divResult = document.createElement("div");

  // Asigno al div la clase contenedor-disco para estilarlo
  divResult.classList.add("contenedor-move");

  // Creo elemento <img>
  let imgTop = document.createElement("img");
  // Le asigno como src de la imagen la url de la tapa
  imgTop.src = dateMoves.Foto;
  // Le asigno un listener para el click
  imgTop.addEventListener("click", () => {
    // Al hacer el click pongo como src de la imagen del div de zoom el mismo
    // src de la imagen clickeada...
    divZoomTop.querySelector("img").src = imgTop.src;
    // ... y quito la clase "oculto" (o sea, hago visible) al div de zoom y al sombreado
    divZoomTop.classList.remove("oculto");
    divSombreado.classList.remove("oculto");
  });

  // Agrego la imagen en el div a retornar
  divResult.appendChild(imgTop);

  // Creo una lista (ul)
  let listDate = document.createElement("ul");

  // Item Titulo
  let itemArtist = document.createElement("li");
  itemArtist.textContent = dateMoves.Titulo;
  listDate.appendChild(itemArtist);

  // Item título
  let itemTitle = document.createElement("li");
  itemTitle.textContent = "Compañia: " + dateMoves.Compañia;
  listDate.appendChild(itemTitle);

  // Item Duracion
  let itemDuracion = document.createElement("li");
  itemDuracion.textContent = "Duracion: " + dateMoves.Duracion;
  listDate.appendChild(itemDuracion);

  let itemLanzamiento = document.createElement("li");
  itemLanzamiento.textContent = "Fecha de Estreno: ";
  let linkLanzamiento = document.createElement("p");

  linkLanzamiento.textContent = dateMoves.Fecha_de_Estreno;
  // Agrego el <a> dentro del <li>
  itemLanzamiento.appendChild(linkLanzamiento);
  // Agrego el <li> dentro del <lu>
  listDate.appendChild(itemLanzamiento);
  // Item título
  let itemPrecio = document.createElement("li");
  itemPrecio.textContent = "Precio: " + dateMoves.Precio;
  listDate.appendChild(itemPrecio);
  // Agrego el <lu> dentro del <div> contenedor
  divResult.appendChild(listDate);

  // Retorno ese div con todos los elementos
  return divResult;
}

// Constantes de referencia a elementos del contenido del  documento
const divMoves = document.getElementById("moves");
const divZoomTop = document.getElementById("zoomTop");
const divSombreado = document.getElementById("sombreado");

// Abro conexión para request GET a la url de la API que retorna el JSON con move
divMoves.textContent = "Consultando datos";
//  texto "Consultando datos...." para que se lea mientras espera respuesta.
fetch("http://localhost:3002/")
  .then((divMoves.textContent = ""))
  .then((response) => response.json())
  .then((data) =>
    data.forEach((moves) => {
      // Llamo a la función crearDivMoves pasando el objeto y el retorno de
      // dicha función se lo paso al divMoves.appendChild para agregar el
      divMoves.appendChild(crearDivMoves(moves));
    })
  );

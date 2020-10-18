// Constantes de referencia a elementos del contenido del  documento
const divMoves = document.getElementById("moves");
const divZoomTop = document.getElementById("zoomTop");
const divSombreado = document.getElementById("sombreado");

// Creo objeto XMLHttpRequest
let req = new XMLHttpRequest();

// Asigno callback de respuesta completa (se llamará cuando se reciba toda la información) osea cuando la req la reciba correctamente en ajax
req.onload = setTimeout(function () {
  // Limpio el texto del div (que decía "Consultando datos....")
  divMoves.textContent = "";
  // Convierto el JSON de la respuesta en objeto y lo guardo en una variable
  let move = JSON.parse(req.responseText);

  // Recorro el objeto de la respuesta (que sé que es un array)
  move.forEach((moves) => {
    // Llamo a la función crearDivMoves pasando el objeto y el retorno de
    // dicha función se lo paso al divMoves.appendChild para agregar el
    divMoves.appendChild(crearDivMoves(moves));
  });
}, 3000);
//En caso de que la request tenga un error se manda un mensaje
req.onerror = function () {
  divMoves.textContent = "No se a podido encontrar la informacion solicitada";
};

// Abro conexión para request GET a la url de la API que retorna el JSON con move
req.open("GET", "http://localhost:3002/");
// Envío el request
req.send();

//  texto "Consultando datos...." para que se lea mientras espera respuesta.
divMoves.textContent = "Consultando datos....";

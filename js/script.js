const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");

const muneco = document.querySelector(".contenedor-muneco");
const mensaje = document.querySelector(".contenedor-mensaje");

const resultado = document.querySelector(".contenedor-resultado");
const copiar = document.querySelector(".contenedor-copiar");

const textoSalida = document.querySelector(".texto-salida");

const obtenerTextoEntrada = () => {
  return document.querySelector(".texto-entrada").value;
};

const copiarTexto = () => {
  const contenido = textoSalida.textContent;
  navigator.clipboard.writeText(contenido);
};

const encriptarTexto = (mensaje) => {
  const texto = mensaje.toLowerCase();
  var textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "e") textoEncriptado += "enter";
    else if (texto[i] === "i") textoEncriptado += "imes";
    else if (texto[i] === "a") textoEncriptado += "ai";
    else if (texto[i] === "o") textoEncriptado += "ober";
    else if (texto[i] === "u") textoEncriptado += "ufat";
    else textoEncriptado += texto[i];
  }
  return textoEncriptado;
};

const desencriptarTexto = (mensaje) => {
  var textoDesencriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    if (mensaje[i] === "e") {
      textoDesencriptado += mensaje[i];
      i += 4;
    } else if (mensaje[i] === "i") {
      textoDesencriptado += mensaje[i];
      i += 3;
    } else if (mensaje[i] === "a") {
      textoDesencriptado += mensaje[i];
      i += 1;
    } else if (mensaje[i] === "o") {
      textoDesencriptado += mensaje[i];
      i += 3;
    } else if (mensaje[i] === "u") {
      textoDesencriptado += mensaje[i];
      i += 3;
    } else textoDesencriptado += mensaje[i];
  }
  return textoDesencriptado;
};

const ocultarVistaPrimaria = () => {
  muneco.classList.add("ocultar-elemento");
  mensaje.classList.add("ocultar-elemento");
};

const ocultarVistaSecundaria = () => {
  resultado.classList.add("ocultar-elemento");
  copiar.classList.add("ocultar-elemento");
};

const mostrarVistaSecundaria = () => {
  resultado.classList.remove("ocultar-elemento");
  copiar.classList.remove("ocultar-elemento");
};

const mostrarTextoEncriptado = () => {
  ocultarVistaPrimaria();
  mostrarVistaSecundaria();
  const textoEntrada = obtenerTextoEntrada();
  const textoEncriptado = encriptarTexto(textoEntrada);
  textoSalida.innerHTML = textoEncriptado;
};

const mostrarTextoDesencriptado = () => {
  ocultarVistaPrimaria();
  mostrarVistaSecundaria();
  const textoEntrada = obtenerTextoEntrada();
  const textoDesencriptado = desencriptarTexto(textoEntrada);
  textoSalida.innerHTML = textoDesencriptado;
};

ocultarVistaSecundaria();

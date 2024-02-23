const botonEncriptar = document.querySelector('.boton-encriptar');
const botonDesencriptar = document.querySelector('.boton-desencriptar');

const muneco = document.querySelector('.contenedor-muneco');
const mensaje = document.querySelector('.contenedor-mensaje');

const resultado = document.querySelector('.contenedor-resultado');
const copiar = document.querySelector('.contenedor-copiar');

const textoSalida = document.querySelector('.texto-salida');

const obtenerTextoEntrada = () => {
    return document.querySelector('.texto-entrada').value;
}

const ocultarVistaPrimaria = () => {
    muneco.classList.add("ocultar-elemento");
    mensaje.classList.add("ocultar-elemento");
}

const ocultarVistaSecundaria = () => {
    resultado.classList.add("ocultar-elemento");
    copiar.classList.add("ocultar-elemento");
}

const mostrarVistaSecundaria = () => {
    resultado.classList.remove("ocultar-elemento");
    copiar.classList.remove("ocultar-elemento");
}

const mostrarTextoEncriptado = () => {
    ocultarVistaPrimaria();
    mostrarVistaSecundaria();
    const textoEntrada = obtenerTextoEntrada();
    encriptarTexto(textoEntrada);
    console.log(textoEntrada);
}

ocultarVistaSecundaria();
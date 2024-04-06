// Mensaje del usuario
var mensaje = document.querySelector('#mensaje');
//Lugar dónde se mostrará el mensaje
const mostrarMSJEncriptado = document.querySelector('#mostrarMSJEncriptado');

 // Vocales que vamos a cifrar
 const vocalesEncriptadas = [

    ["e","enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]

];

// Funcion para encriptar.
function encriptar(mensajeEncriptado){
    vocalesEncriptadas
    // Mantener el mensaje en minúsculas
    mensajeEncriptado = mensajeEncriptado.toLowerCase();

    for (let i = 0; i < vocalesEncriptadas.length; i++){
        // Incluir solo las letras registradas en el mensaje
        if(mensajeEncriptado.includes(vocalesEncriptadas[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(vocalesEncriptadas[i][0], vocalesEncriptadas[i][1]);
        };
    };
    return mensajeEncriptado;
};

// Botón para encriptar
function btnEncriptar() {
    const encriptado = encriptar(mensaje.value);
    mostrarMSJEncriptado.innerHTML = encriptado; 
}

// Función desencriptar
function desencriptar(mensajeEncriptado) {
    vocalesEncriptadas
    // Mantener el mensaje en minúsculas
    mensajeEncriptado = mensajeEncriptado.toLowerCase();

    for (let i = vocalesEncriptadas.length - 1; i >= 0; i--) {
        mensajeEncriptado = mensajeEncriptado.replace(new RegExp(vocalesEncriptadas[i][1], 'g'), vocalesEncriptadas[i][0]);
    }

    return mensajeEncriptado;
}

// Botón para desencriptar
function btnDesencriptar() {
    const desencriptado = desencriptar(mensaje.value);
    mostrarMSJEncriptado.innerHTML = desencriptado; 
}

// Botón para copiar
function btnCopiar () {
    const textoEncriptado = mostrarMSJEncriptado.textContent;

    // Crear un elemento de texto temporal para copiar el texto encriptado
    const tempInput = document.createElement('textarea');
    tempInput.value = textoEncriptado;
    document.body.appendChild(tempInput);

    // Seleccionar el texto y copiarlo al portapapeles
    tempInput.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(tempInput);

    // Mostrar un mensaje de copia exitosa
    alert('Texto copiado al portapapeles');
}
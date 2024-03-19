function btnEncriptar() {
    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");

    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");

    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    if (/[A-ZÁÉÍÓÚÜÀÈÌÒÙÂÊÎÔÛÄËÏÖÜáéíóúüàèìòùâêîôûäëïö]/.test(stringEncriptada)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos.");
        return "";
    }

    matrizCodigo.forEach(function(elemento) {
        let regex = new RegExp(elemento[0], "g");
        stringEncriptada = stringEncriptada.replace(regex, elemento[1]);
    });
    return stringEncriptada;
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    // Verificar si el texto contiene mayúsculas o caracteres con acentos
    if (/[A-ZÁÉÍÓÚÜÀÈÌÒÙÂÊÎÔÛÄËÏÖÜáéíóúüàèìòùâêîôûäëïö]/.test(stringDesencriptada)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos.");
        return "";
    }

    for (let i = matrizCodigo.length - 1; i >= 0; i--) {
        let regex = new RegExp(matrizCodigo[i][1], "g");
        stringDesencriptada = stringDesencriptada.replace(regex, matrizCodigo[i][0]);
    }

    return stringDesencriptada;
}

function copiarTexto() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}


//!  Ejercicio 2: Validar Contraseña

// - Formulario de registro.
//  Crea una función validarContraseña(contraseña) que retorne true si:
//  - Tiene al menos 8 caracteres.
//  - Incluye un número.
//  - Incluye una mayúscula.

const prompt = require("prompt-sync")();


function validarContrasena(contrasena) {
    
    const tieneLongitud = contrasena.length >= 8;
    const tieneNumero = /\d/.test(contrasena);
    const tieneMayuscula = /[A-Z]/.test(contrasena);

    if (tieneLongitud && tieneNumero && tieneMayuscula) {
        console.log("Contraseña válida");
        return true;
    } else {
        console.log("Contraseña inválida. Debe tener al menos 8 caracteres, un número y una mayúscula.");
        return false;
    }
}

// Pedir la contraseña al usuario
const ingresarContrasena = prompt("Ingrese una contraseña: ");
validarContrasena(ingresarContrasena);

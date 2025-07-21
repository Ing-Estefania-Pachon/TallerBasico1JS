// ! Ejercicio 6: Contador de Palabras-Editor de texto.
//  Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por 
// espacios).

const prompt = require("prompt-sync")();

function contarPalabras(texto) {
    let contador = 0;
    let palabra = "";
    
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];

        if (caracter !== " ") {
            palabra = palabra + caracter;
        } else {
            if (palabra !== "") {
                contador = contador + 1;
                palabra = "";
            }
        }
    }

    // Contar la última palabra si no termina en espacio
    if (palabra !== "") {
        contador = contador + 1;
    }

    console.log("El texto tiene " + contador + " palabra(s).");
    return contador;
}

let textoIngresado = prompt("Ingrese un texto: ");
contarPalabras(textoIngresado);
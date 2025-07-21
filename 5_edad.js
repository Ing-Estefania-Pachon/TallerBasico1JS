// ! Ejercicio 5: Filtrar Usuarios por Edad- Red social.
//  Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función 
// filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la 
// cual será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas de la lsita 
// cumplen con tener más de 18.

const prompt = require("prompt-sync")();

// Lista de usuarios predefinida
const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 17 },
    { nombre: "Carla", edad: 30 },
    { nombre: "Mar", edad: 18 },
    { nombre: "Sofía", edad: 16 }
];

function filtrarUsuarios(usuarios, edadMinima) {
    let encontrados = [];

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].edad >= edadMinima) {
            encontrados.push(usuarios[i]);
        }
    }

    if (encontrados.length > 0) {
        console.log("Usuarios con edad mayor o igual a " + edadMinima + ":");
        for (let i = 0; i < encontrados.length; i++) {
            console.log(encontrados[i].nombre + " - " + encontrados[i].edad + " años");
        }
    } else {
        console.log("Ningún usuario cumple con la edad mínima de " + edadMinima);
    }
}

// Pedir edad mínima al usuario
let edadMinimaTexto = prompt("Ingrese la edad mínima: ");
let edadMinima = parseInt(edadMinimaTexto);

// Llamar la función
filtrarUsuarios(usuarios, edadMinima);
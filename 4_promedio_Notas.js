// ! Ejercicio 4: Calcular Promedio de Notas
// - Plataforma educativa.
//  Crea una función calcularPromedio(notas) que reciba un array de notas dado por el usuario 
// (separadas por comas)  y retorne el promedio (redondeado a 2 decimales).

const prompt = require("prompt-sync")();

function calcularPromedio(notas) {

    notas = []
       
        while (true){
        
            let ingresar = prompt("¿Quiere ingresar otra nota? Escriba si o no: ").toLocaleLowerCase();
            
            if (ingresar === "si"){
                let nuevaNota = prompt("Ingrese la siguiente nota: ");
                let notaNumero = parseFloat(nuevaNota);

                // Validar que sea un número
                if (!isNaN(notaNumero)) {
                    notas.push(notaNumero);
                } else {
                    console.log("Nota no válida. Debe ser un número.");
                }

            } else if (ingresar === "no"){
                console.log("Finalizando ingreso de notas...");
                break;
            } else {
                console.log("Respuesta no válida. Escriba 'si' o 'no'.");
            }

        }

    // Calcular el promedio si hay notas
    if (notas.length > 0) {
        let suma = 0;
        for (let i = 0; i < notas.length; i++) {
            suma += notas[i];
        }

        let promedio = suma / notas.length;
        promedio = promedio.toFixed(2);

        console.log("El promedio de las notas es: ", promedio);
        return promedio;
    } else {
        console.log("No se ingresaron notas.");
        return null;
    }
}

calcularPromedio();

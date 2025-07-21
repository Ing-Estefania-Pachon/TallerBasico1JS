// ! Ejercicio 8: Cambio de Moneda-App de viajes.
//  Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
//  pedir al usuario monto en COP y la moneda con la que desea hacer la converción

const prompt = require("prompt-sync")();

function convertirMoneda() {
    let montoTexto = prompt("Ingrese el monto en pesos colombianos (COP): ");
    let monto = parseFloat(montoTexto);

    if (isNaN(monto)) {
        console.log("Debe ingresar un número válido.");
        return;
    }

    let monedaDestino = prompt("Ingrese la moneda a la que desea convertir (USD o EUR): ");
    monedaDestino = monedaDestino.toUpperCase();

    let resultado = 0;

    if (monedaDestino === "USD") {
        resultado = monto / 4000; 
        console.log("El monto en dólares (USD) es: " + resultado);
    } else if (monedaDestino === "EUR") {
        resultado = monto / 4400; 
        console.log("El monto en euros (EUR) es: " + resultado);
    } else {
        console.log("Moneda no válida. Solo se acepta USD o EUR.");
    }

    return resultado;
}

convertirMoneda();

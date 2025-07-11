//! Calculadora de Propinas

// - Una app para calcular propinas en restaurantes.
//  Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de 
// propina, y retorne el monto final a pagar (total + propina).

const prompt = require("prompt-sync")();

function calcularPropina(){
        
    let total = Number(prompt("Ingrese el total de la cuenta: "))
    let porcentaje = Number(prompt("Ingrese el porcentaje de las propinas: "))
    // total = Interger(total)
    // porcentaje = Interger(porcentaje)

    propina = (total * porcentaje)/100
    
    totalCuenta = total + propina

    console.log("El total de la cuenta es", totalCuenta, " solo de propina es ", propina);
}

calcularPropina();
// ! Ejercicio 7: Simulador de Cajero Automático-App bancaria.
//  Crea una función retirarDinero(saldo, monto) que:
//  Pide al usuario su saldo actual y el monto a retirar.
//  Muestra el nuevo saldo o "Fondos insuficientes".

const prompt = require("prompt-sync")();

function retirarDinero() {
    let saldoTexto = prompt("Ingrese su saldo actual: ");
    let saldo = parseFloat(saldoTexto);

    let montoTexto = prompt("Ingrese el monto a retirar: ");
    let monto = parseFloat(montoTexto);

    if (isNaN(saldo) || isNaN(monto)) {
        console.log("Debe ingresar números válidos.");
        return;
    }

    if (monto <= saldo) {
        let nuevoSaldo = saldo - monto;
        console.log("Retiro exitoso. Su nuevo saldo es: " + nuevoSaldo);
        return nuevoSaldo;
    } else {
        console.log("Fondos insuficientes.");
        return saldo;
    }
}

retirarDinero();

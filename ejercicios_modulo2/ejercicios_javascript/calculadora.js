function calculadora() {
let primerNumero = parseFloat(prompt("Ingrese el primer número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");
let segundoNumero = parseFloat(prompt("Ingrese el segundo número:"));

let resultado;

switch (operacion) {
case "+":
resultado = primerNumero + segundoNumero;
break;


case "-":
resultado = primerNumero - segundoNumero;
break;
case "*":
resultado = primerNumero * segundoNumero;
break;
case "/":
resultado = primerNumero / segundoNumero;
break;
default:
alert("Operación inválida");
return; // Salir de la función si la operación es inválida
}

alert("El resultado es: " + resultado);
}

calculadora();
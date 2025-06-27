// Ejemplo de uso de variables
// Variables para el dinero de Cofla
let dineroCofla;

dineroCofla = prompt("Ingrese la cantidad de dinero que tiene en su billetera Cofla: ");

dineroCofla = parseInt(dineroCofla); // Convertir el valor ingresado a un número entero

if (dineroCofla >= 0.6) {
    alert("Cofla puede comprar un helado de agua.");
    alert("Y te sobrará: " + (dineroCofla - 0.6) + " pesos.");
} else if (dineroCofla >= 1) {
    alert("Cofla puede comprar un helado de crema.");
    alert("Y te sobrará: " + (dineroCofla - 1) + " pesos.");
} else if (dineroCofla >= 1.6) {
    alert("Cofla puede comprar un helado de heladix.");
    alert("Y te sobrará: " + (dineroCofla - 1.6) + " pesos.");
} else if (dineroCofla  >= 1.7) {
    alert("Cofla puede comprar un helado de heladovich.");
    alert("Y te sobrará: " + (dineroCofla - 1.7) + " pesos.");
} else if (dineroCofla >= 1.8) {
    alert("Cofla puede comprar un helado de helardo.");
    alert("Y te sobrará: " + (dineroCofla - 1.8) + " pesos.");
} else if (dineroCofla >= 2.9) {
    alert("Cofla puede comprar un helado de maxi-kiosko.");
    alert("Y te sobrará: " + (dineroCofla - 2.9) + " pesos.");
} else {
    alert("Cofla no puede comprar ningún helado.");
}
# JavaScript - Conceptos Básicos

> Guía rápida con ejemplos prácticos sobre sintaxis y conceptos fundamentales de JavaScript.

---

## Índice

- [CamelCase](#camelcase)
- [Variables](#variables)
- [Tipos de Datos](#tipos-de-datos)
- [undefined, null y NaN](#undefined-null-y-nan)
- [Prompt](#prompt)
- [Alert](#alert)
- [Confirm](#confirm)
- [Concatenación](#concatenación)
- [Operadores Aritméticos](#operadores-aritméticos)
- [Operadores de Asignación](#operadores-de-asignación)
- [Operadores de Comparación](#operadores-de-comparación)
- [Operadores Lógicos](#operadores-lógicos)
- [Condicionales](#condicionales)
- [Arrays](#arrays)
- [Array Asociativo](#array-asociativo)
- [Bucles e Iteraciones](#bucles-e-iteraciones)

---

```js
// JavaScript - Conceptos Básicos

//CamelCase
/* Ejemplo de uso de CamelCase
   En JavaScript, es común usar CamelCase para nombrar variables y funciones.
   Se inicia con una letra minúscula y cada nueva palabra comienza con una letra mayúscula.
   Por ejemplo: nombreCompleto, calcularSuma, obtenerDatos.*/

//Variables
/*palabraClave nombreVariable = valor;*/
let variableQuePuedeCambiar = 1;
const variableQueNoPuedeCambiar = 0;

let declararVariable; // Se declara la varible pero no se inicializa
let declararIniciarVariable = "Hola" // Se declara la variable y se inicializa

//Tipos de Datos
String = "Cadena de texto";
Number = 123;
Boolean = true;

//undefined, null, NaN
let undefined; // Fue declarada pero no inicializada.
let Null = null // Para decir que la variable está vacía a propósito.
let Nan = "abc" / 2; // Ocurre cuando: intentas hacer operaciones matemáticas con algo que no es numérico.

//Promt
prompt("Mensaje de solicitud", "valor predeterminado");
let nombre = prompt("¿Cómo te llamas?", "Tu nombre acá"); // Lo guarda en la variable nombre

//Alert
alert("Mensaje de alerta"); // Muestra un mensaje emergente al usuario

//Confirm
let confirmacion = confirm("¿Estás seguro?"); // Muestra un mensaje de confirmación y guarda el resultado (true/false) en la variable confirmacion

//Concatenación
let saludo = "Hola" + " " + "Mundo"; // Une dos cadenas de texto
let numeroTexto = "El número es: " + 5; // Convierte el número a texto y lo concatena
let concatenacionCompleta = `Hola, ${saludo}, el número es: ${numeroTexto}`; // Usando comillas invertidas para una concatenación más legible

//Operadores Aritméticos
let suma = 5 + 3; // Suma
let resta = 5 - 3; // Resta
let multiplicacion = 5 * 3; // Multiplicación
let division = 5 / 3; // División
let modulo = 5 % 3; // Módulo (resto de la división)
incremento++; // Incrementa en 1
decremento--; // Decrementa en 1

//Operadores de Asignación
let asignacion = 10; // Asignación simple
asignacion += 5;
asignacion -= 5;
asignacion *= 2;
asignacion /= 2;
asignacion %= 2;
asignacion **= 2;

//Operadores de Comparación
let esIgual = (5 == 5);
let esIdentico = (5 === 5);
let esDiferente = (5 != 3);
let esNoIdentico = (5 !== 3);
let esMayor = (5 > 3);
let esMenor = (5 < 3);
let esMayorOIgual = (5 >= 3);
let esMenorOIgual = (5 <= 3);

//Operadores Lógicos
let and = (true && false);
let or = (true || false);
let not = !true;

//Condicionales
if (condicion) {
    // Código a ejecutar si la condición es verdadera
}
else if (otraCondicion) {
    // Código a ejecutar si la otra condición es verdadera
}
else {
    // Código a ejecutar si ninguna de las condiciones anteriores es verdadera
};

//arrays o listas
let arrayVacio = [];
let arrayNumeros = [0, 1, 2];
let arrayCadenas = ["cero", "uno", "dos"];
let arrayBooleanos = [true, false, true];

console.log(arrayNumeros);

let primerElemento = arrayNumeros[0];
let segundoElemento = arrayNumeros[1];

let arrayAsociativo = {
    "posicion0": "valor1",
    "posicion1": "valor2",
    "posicion2": "valor3"
};

let valor1 = arrayAsociativo["posicion0"];
let valor2 = arrayAsociativo["posicion1"];
let valor3 = arrayAsociativo["posicion2"];

//Bucles e Iteraciones
while (condicion) {
    // Código a ejecutar
};

contador = 0;
while (contador < 5) {
    contador++;
}

do {
    // Código a ejecutar
} while (condicion);

contador = 0;
do {
    contador++;
} while (contador < 5);

contador = 0;
while (contador < 10) {
    contador++;
    if (contador === 5) {
        break;
    }
};

for (let incremento = 0; incremento < 6; incremento++) {
    console.log(incremento);
};

contador = 0;
while (contador < 10) {
    contador++;
    if (contador === 5) {
        continue;
    }
};

let objeto = ["valor1", "valor2", "valor3"];
for (let i in objeto) {
    console.log(i);
}

let iterable = ["valor1", "valor2", "valor3"];
for (let valor of iterable) {
    console.log(valor);
}
```

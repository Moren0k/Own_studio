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
asignacion += 5; // Asignación con suma (equivalente a asignacion = asignacion + 5) Es decir: 10 + 5 = 15
asignacion -= 5; // Asignación con resta (equivalente a asignacion = asignacion - 5) Es decir: 10 - 5 = 5
asignacion *= 2; // Asignación con multiplicación (equivalente a asignacion = asignacion * 2) Es decir: 10 * 2 = 10
asignacion /= 2; // Asignación con división (equivalente a asignacion = asignacion / 2) Es decir: 10 / 2 = 5
asignacion %= 2; // Asignación con módulo (equivalente a asignacion = asignacion % 2) Es decir: 10 % 2 = 0
asignacion **= 2; // Asignación con exponenciación (equivalente a asignacion = asignacion ** 2) Es decir: 10 ** 2 = 100

//Operadores de Comparación devuelven un valor booleano (true o false)
let esIgual = (5 == 5); // Igualdad (valor)
let esIdentico = (5 === 5); // Identidad (valor y tipo)
let esDiferente = (5 != 3); // Diferencia (valor)
let esNoIdentico = (5 !== 3); // No identidad (valor y tipo)
let esMayor = (5 > 3); // Mayor que
let esMenor = (5 < 3); // Menor que
let esMayorOIgual = (5 >= 3); // Mayor o igual que
let esMenorOIgual = (5 <= 3); // Menor o igual que

//Operadores Lógicos
let and = (true && false); // AND lógico es verdadero si ambos son verdaderos (Devuelve: false)
let or = (true || false); // OR lógico es verdadero si al menos uno es verdadero (Devuelve: true)
let not = !true; // NOT lógico invierte el valor booleano (Devuelve: false)

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
/* Un array es una colección de elementos, que pueden ser de cualquier tipo de dato.*/
let arrayVacio = []; // Un array vacío
let arrayNumeros = [0, 1, 2]; // Un array con números
let arrayCadenas = ["cero", "uno", "dos"]; // Un array con cadenas de texto
let arrayBooleanos = [true, false, true]; // Un array con valores booleanos

//Mostrar un array en la consola
console.log(arrayNumeros); // Muestra el array en la consola

//Acceso a elementos del array
/* Las posiciones de los elementos en un array comienzan desde 0. 
   let array = [posición0, posición1, posición2];
   para acceder a un elemento, se usa el nombreDelArray[posición];*/
let primerElemento = arrayNumeros[0]; // Accede al primer elemento (0)
let segundoElemento = arrayNumeros[1]; // Accede al segundo elemento (1)

//Array asociativo
/* Un array asociativo es un array que usa cadenas de texto como índices en lugar de números. 
   Se usa un objeto en lugar de un array para crear un array asociativo.*/
let arrayAsociativo = {
    "posicion0": "valor1",
    "posicion1": "valor2",
    "posicion2": "valor3"
};

//Acceso a elementos del array asociativo
let valor1 = arrayAsociativo["posicion0"]; // Accede al valor de la posición "posicion0" y muestra "valor1"
let valor2 = arrayAsociativo["posicion1"]; // Accede al valor de la posición "posicion1" y muestra "valor2"
let valor3 = arrayAsociativo["posicion2"]; // Accede al valor de la posición "posicion2" y muestra "valor3"

//Bucles e Iteraciones
/* Los bucles se utilizan para repetir un bloque de código varias veces.
   Existen diferentes tipos de bucles, como for, while y do-while.*/

//while
/* Un bucle while ejecuta un bloque de código infinitamente mientras una condición sea verdadera. 
   La sintaxis básica es:*/
while (condicion) {
    // Código a ejecutar
};

contador = 0; // Inicializa un contador
while (contador < 5) { // Mientras el contador sea menor que 5
    contador++; // Incrementa el contador en 1
    // Si el contador llega a 5, el bucle se detiene
}

//do-while
/* Un bucle do-while ejecuta un bloque de código al menos una vez y luego verifica la condición. 
   La sintaxis básica es:*/
do {
    // Código a ejecutar
} while (condicion);

contador = 0; // Inicializa un contador
do {
    contador++; // Incrementa el contador en 1
} while (contador < 5); // Mientras el contador sea menor que 5
// El bucle se ejecuta al menos una vez, incluso si la condición es falsa desde el principio

//break
/* La instrucción break se utiliza para salir de un bucle antes de que se complete su iteración. 
   Se puede usar en cualquier tipo de bucle.
   La sintaxis básica es:*/
contador = 0; // Inicializa un contador
while (contador < 10) { // Mientras el contador sea menor que 10
    contador++; // Incrementa el contador en 1
    if (contador === 5) { // Si el contador es igual a 5
        break; // Sale del bucle
        // El bucle se detiene cuando el contador llega a 5, por lo que no se muestra el valor 5 en la consola
    }
};

//for
/* Un bucle for se utiliza para iterar sobre un rango de valores o elementos de un array. 
   La sintaxis básica es:

   declararVariable; // Inicializa una variable
   for (inicialización; condición; actualización) {
    // Código a ejecutar
   }
   */
for (let incremento = 0; incremento < 6; incremento++) {
    console.log(incremento); // Muestra los números del 0 al 5 en la consola
};

//continue
/* La instrucción continue se utiliza para saltar a la siguiente iteración de un bucle. 
   Se puede usar en cualquier tipo de bucle.
   La sintaxis básica es:*/
contador = 0; // Inicializa un contador
while (contador < 10) { // Mientras el contador sea menor que 10
    contador++; // Incrementa el contador en 1
    if (contador === 5) { // Si el contador es igual a 5
        continue; // Salta a la siguiente iteración del bucle
        // El valor 5 no se muestra en la consola, pero el bucle continúa con el siguiente valor
    }
};

//for..in
/* El bucle for..in se utiliza para iterar sobre las propiedades enumerables de un objeto. 
   La sintaxis básica es:
   for (variable in objeto) {
    // Código a ejecutar
   }
   */
let objeto = ["valor1", "valor2", "valor3"];
for (let i in objeto) {
    console.log(i); // Muestra las propiedades del objeto en la consola
    // Muestra los índices de los valores del objeto en la consola (0, 1, 2)
}

//for..of
/* El bucle for..of se utiliza para iterar sobre los valores de un objeto iterable, como un array. 
   La sintaxis básica es:
   for (variable of objetoIterable) {
    // Código a ejecutar
   }
   */
let iterable = ["valor1", "valor2", "valor3"];
for (let valor of iterable) {
    console.log(valor); // Muestra los valores del objeto iterable en la consola
    // Muestra los valores del iterable en la consola ("valor1", "valor2", "valor3")
}
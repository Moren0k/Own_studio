# JavaScript - Conceptos Básicos

## CamelCase

Ejemplo de uso de CamelCase  
En JavaScript, es común usar CamelCase para nombrar variables y funciones.  
Se inicia con una letra minúscula y cada nueva palabra comienza con una letra mayúscula.  
Por ejemplo: nombreCompleto, calcularSuma, obtenerDatos.

```js
var ejemploDeUsoDeCamelCase
```

## Variables

palabraClave nombreVariable = valor;

```js
let variableQuePuedeCambiar = 1;
const variableQueNoPuedeCambiar = 0;

let declararVariable; // Se declara la varible pero no se inicializa
let declararIniciarVariable = "Hola"; // Se declara la variable y se inicializa
```

## Tipos de Datos

```js
String = "Cadena de texto";
Number = 123;
Boolean = true;
```

## undefined, null, NaN

```js
let undefined; // Fue declarada pero no inicializada.
let Null = null // Para decir que la variable está vacía a propósito.
let Nan = "abc" / 2; // Ocurre cuando: intentas hacer operaciones matemáticas con algo que no es numérico.
```

## Promt

```js
prompt("Mensaje de solicitud", "valor predeterminado");
let nombre = prompt("¿Cómo te llamas?", "Tu nombre acá"); // Lo guarda en la variable nombre
```

## Alert

```js
alert("Mensaje de alerta"); // Muestra un mensaje emergente al usuario
```

## Confirm

```js
let confirmacion = confirm("¿Estás seguro?"); // Muestra un mensaje de confirmación y guarda el resultado (true/false) en la variable confirmacion
```

## Concatenación

```js
let saludo = "Hola" + " " + "Mundo"; // Une dos cadenas de texto
let numeroTexto = "El número es: " + 5; // Convierte el número a texto y lo concatena
let concatenacionCompleta = `Hola, ${saludo}, el número es: ${numeroTexto}`; // Usando comillas invertidas para una concatenación más legible
```

## Operadores Aritméticos

```js
let suma = 5 + 3; // Suma
let resta = 5 - 3; // Resta
let multiplicacion = 5 * 3; // Multiplicación
let division = 5 / 3; // División
let modulo = 5 % 3; // Módulo (resto de la división)
incremento++; // Incrementa en 1
decremento--; // Decrementa en 1
```

## Operadores de Asignación

```js
let asignacion = 10; // Asignación simple
asignacion += 5; // Asignación con suma
asignacion -= 5; // Asignación con resta
asignacion *= 2; // Asignación con multiplicación
asignacion /= 2; // Asignación con división
asignacion %= 2; // Asignación con módulo
asignacion **= 2; // Asignación con exponenciación
```

## Operadores de Comparación devuelven un valor booleano (true o false)

```js
let esIgual = (5 == 5); // Igualdad (valor)
let esIdentico = (5 === 5); // Identidad (valor y tipo)
let esDiferente = (5 != 3); // Diferencia (valor)
let esNoIdentico = (5 !== 3); // No identidad (valor y tipo)
let esMayor = (5 > 3); // Mayor que
let esMenor = (5 < 3); // Menor que
let esMayorOIgual = (5 >= 3); // Mayor o igual que
let esMenorOIgual = (5 <= 3); // Menor o igual que
```

## Operadores Lógicos

```js
let and = (true && false); // AND lógico
let or = (true || false); // OR lógico
let not = !true; // NOT lógico
```

## Condicionales

```js
if (condicion) {
    // Código si es verdadera
} else if (otraCondicion) {
    // Código si la otra condición es verdadera
} else {
    // Código si ninguna condición es verdadera
}
```

## arrays o listas

Un array es una colección de elementos, que pueden ser de cualquier tipo de dato.

```js
let arrayVacio = [];
let arrayNumeros = [0, 1, 2];
let arrayCadenas = ["cero", "uno", "dos"];
let arrayBooleanos = [true, false, true];
```

## Mostrar un array en la consola

```js
console.log(arrayNumeros);
```

## Acceso a elementos del array

Las posiciones de los elementos en un array comienzan desde 0.  
let array = [posición0, posición1, posición2];  
para acceder a un elemento, se usa el nombreDelArray[posición];

```js
let primerElemento = arrayNumeros[0];
let segundoElemento = arrayNumeros[1];
```

## Array asociativo

Un array asociativo es un array que usa cadenas de texto como índices.  
Se usa un objeto en lugar de un array para crearlo.

```js
let arrayAsociativo = {
    "posicion0": "valor1",
    "posicion1": "valor2",
    "posicion2": "valor3"
};
```

## Acceso a elementos del array asociativo

```js
let valor1 = arrayAsociativo["posicion0"];
let valor2 = arrayAsociativo["posicion1"];
let valor3 = arrayAsociativo["posicion2"];
```

## Bucles e Iteraciones

Los bucles se utilizan para repetir un bloque de código varias veces.  
Existen diferentes tipos como `for`, `while` y `do-while`.

## while

Un bucle `while` ejecuta el bloque mientras la condición sea verdadera.

```js
let contador = 0;
while (contador < 5) {
    contador++;
}
```

## do-while

Un bucle `do-while` se ejecuta al menos una vez.

```js
let contador = 0;
do {
    contador++;
} while (contador < 5);
```

## break

La instrucción `break` sale de un bucle antes de terminar.

```js
let contador = 0;
while (contador < 10) {
    contador++;
    if (contador === 5) {
        break;
    }
}
```

## for

Un bucle `for` itera sobre un rango de valores o un array.

```js
for (let incremento = 0; incremento < 6; incremento++) {
    console.log(incremento);
}
```

## continue

La instrucción `continue` salta a la siguiente iteración del bucle.

```js
let contador = 0;
while (contador < 10) {
    contador++;
    if (contador === 5) {
        continue;
    }
}
```

## for..in

Itera sobre las propiedades enumerables de un objeto.

```js
let objeto = ["valor1", "valor2", "valor3"];
for (let i in objeto) {
    console.log(i);
}
```

## for..of

Itera sobre los valores de un objeto iterable.

```js
let iterable = ["valor1", "valor2", "valor3"];
for (let valor of iterable) {
    console.log(valor);
}
```

## Funciones

Las funciones son bloques de código reutilizables.  
Se definen con `function` y pueden aceptar parámetros.

```js
function saludar() {
    let nombre = "Mundo";
    console.log("Hola, " + nombre);
}
saludar();
```

## Funciones con parámetros y retorno

Las funciones pueden devolver valores.

```js
function sumar() {
    let numero1 = 2;
    let numero2 = 3;
    let resultado = numero1 + numero2;
    return resultado;
}

let resultadoSuma = sumar();
console.log(resultadoSuma);
```

## Funciones con parámetros

```js
function multiplicar(numero1, numero2) {
    let resultado = numero1 * numero2;
    return resultado;
}

let resultadoMultiplicacion = multiplicar(4, 5);
console.log(resultadoMultiplicacion);

let otroResultadoMultiplicacion = multiplicar(2, 3);
console.log(otroResultadoMultiplicacion);
```

## Funciones flecha

Una forma concisa de definir funciones.

```js
const saludarFlecha = (nombre) => console.log("Hola, " + nombre);
saludarFlecha("Mundo");
```

## POO (Programación Orientada a Objetos)

La POO organiza el código en objetos con propiedades y métodos.

## Clases

Una clase es una plantilla para crear objetos.

```js
class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, Tengo ${this.edad} años y soy de color ${this.color}.`;
    }
}
let perro = new animal("perro", 5, "blanco");
console.log(perro.info);
``

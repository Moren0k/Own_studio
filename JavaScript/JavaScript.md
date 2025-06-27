# JavaScript - Conceptos Básicos

> Guía básica de JavaScript con ejemplos comentados, pensada para principiantes que quieran aprender la sintaxis, operadores, estructuras de control y lógica fundamental del lenguaje de forma clara y práctica.
>
> 🧠 **Prompt usado para generar esta guía con IA:**
>
> "Convierte este código en una guía Markdown bien estructurada, con títulos claros, comentarios preservados y formato listo para GitHub, explicando los conceptos de forma breve si es necesario."

---

## CamelCase

```javascript
/* Ejemplo de uso de CamelCase
   En JavaScript, es común usar CamelCase para nombrar variables y funciones.
   Se inicia con una letra minúscula y cada nueva palabra comienza con una letra mayúscula.
   Por ejemplo: nombreCompleto, calcularSuma, obtenerDatos.*/
```

---

## Variables

```javascript
/*palabraClave nombreVariable = valor;*/
let variableQuePuedeCambiar = 1;
const variableQueNoPuedeCambiar = 0;

let declararVariable; // Se declara la variable pero no se inicializa
let declararIniciarVariable = "Hola" // Se declara la variable y se inicializa
```

---

## Tipos de Datos

```javascript
String = "Cadena de texto";
Number = 123;
Boolean = true;
```

---

## undefined, null, NaN

```javascript
let undefined; // Fue declarada pero no inicializada.
let Null = null // Para decir que la variable está vacía a propósito.
let Nan = "abc" / 2; // Ocurre cuando: intentas hacer operaciones matemáticas con algo que no es numérico.
```

---

## Prompt

```javascript
prompt("Mensaje de solicitud", "valor predeterminado");
let nombre = prompt("¿Cómo te llamas?", "Tu nombre acá"); // Lo guarda en la variable nombre
```

---

## Alert

```javascript
alert("Mensaje de alerta"); // Muestra un mensaje emergente al usuario
```

---

## Confirm

```javascript
let confirmacion = confirm("¿Estás seguro?"); // Muestra un mensaje de confirmación y guarda el resultado (true/false)
```

---

## Concatenación

```javascript
let saludo = "Hola" + " " + "Mundo"; // Une dos cadenas de texto
let numeroTexto = "El número es: " + 5; // Convierte el número a texto y lo concatena
let concatenacionCompleta = `Hola, ${saludo}, el número es: ${numeroTexto}`; // Usando comillas invertidas para una concatenación más legible
```

---

## Operadores Aritméticos

```javascript
let suma = 5 + 3;
let resta = 5 - 3;
let multiplicacion = 5 * 3;
let division = 5 / 3;
let modulo = 5 % 3;
incremento++; // Incrementa en 1
decremento--; // Decrementa en 1
```

---

## Operadores de Asignación

```javascript
let asignacion = 10;
asignacion += 5;
asignacion -= 5;
asignacion *= 2;
asignacion /= 2;
asignacion %= 2;
asignacion **= 2;
```

---

## Operadores de Comparación

```javascript
let esIgual = (5 == 5);
let esIdentico = (5 === 5);
let esDiferente = (5 != 3);
let esNoIdentico = (5 !== 3);
let esMayor = (5 > 3);
let esMenor = (5 < 3);
let esMayorOIgual = (5 >= 3);
let esMenorOIgual = (5 <= 3);
```

---

## Operadores Lógicos

```javascript
let and = (true && false);
let or = (true || false);
let not = !true;
```

---

## Condicionales

```javascript
if (condicion) {
    // Código a ejecutar si la condición es verdadera
}
else if (otraCondicion) {
    // Código a ejecutar si la otra condición es verdadera
}
else {
    // Código a ejecutar si ninguna condición se cumple
}
```

---

## Arrays o Listas

```javascript
let arrayVacio = [];
let arrayNumeros = [0, 1, 2];
let arrayCadenas = ["cero", "uno", "dos"];
let arrayBooleanos = [true, false, true];

console.log(arrayNumeros);

let primerElemento = arrayNumeros[0];
let segundoElemento = arrayNumeros[1];
```

---

## Array Asociativo (Objeto)

```javascript
let arrayAsociativo = {
    "posicion0": "valor1",
    "posicion1": "valor2",
    "posicion2": "valor3"
};

let valor1 = arrayAsociativo["posicion0"];
let valor2 = arrayAsociativo["posicion1"];
let valor3 = arrayAsociativo["posicion2"];
```

---

## Bucles e Iteraciones

### while

```javascript
while (condicion) {
    // Código a ejecutar
}

let contador = 0;
while (contador < 5) {
    contador++;
}
```

### do-while

```javascript
let contador = 0;
do {
    contador++;
} while (contador < 5);
```

### break

```javascript
let contador = 0;
while (contador < 10) {
    contador++;
    if (contador === 5) {
        break;
    }
}
```

### for

```javascript
for (let incremento = 0; incremento < 6; incremento++) {
    console.log(incremento);
}
```

### continue

```javascript
let contador = 0;
while (contador < 10) {
    contador++;
    if (contador === 5) {
        continue;
    }
}
```

### for..in

```javascript
let objeto = ["valor1", "valor2", "valor3"];
for (let i in objeto) {
    console.log(i); // índices: 0, 1, 2
}
```

### for..of

```javascript
let iterable = ["valor1", "valor2", "valor3"];
for (let valor of iterable) {
    console.log(valor); // valores: "valor1", "valor2", "valor3"
}
```

### Labels

```javascript
etiqueta: {
    // Código a ejecutar
}
```

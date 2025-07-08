//JavaScript - Conceptos Básicos
/* JavaScript es un lenguaje de programación interpretado, de alto nivel y con tipado dinámico. */
/* Se utiliza principalmente para crear páginas web interactivas y dinámicas. */

//CamelCase
/* Ejemplo de uso de CamelCase
   En JavaScript, es común usar CamelCase para nombrar variables y funciones.
   Se inicia con una letra minúscula y cada nueva palabra comienza con una letra mayúscula.
   Por ejemplo: nombreCompleto, calcularSuma, obtenerDatos. */

var ejemploDeUsoDeCamelCase

//Variables
/* palabraClave nombreVariable = valor;. */
let variableQuePuedeCambiar = "Soy una variable que puede cambiar su valor"; // Se declara una variable que puede cambiar su valor
const variableQueNoPuedeCambiar = "Soy una variable que no puede cambiar su valor (constante)"; // Se declara una variable que no puede cambiar su valor (constante)
var variableGlobal = "Soy una variable global"; // Se declara una variable global (no se recomienda su uso en la actualidad)

let declararVariable; // Se declara la varible pero no se inicializa
let declararIniciarVariable = "Hola" // Se declara la variable y se inicializa

//Tipos De Datos
String = "Cadena de texto"; // Cadena de texto
Number = 123; // Número
Boolean = true; // Valor booleano (true o false)

//Undefined, Null, NaN
let undefined; // Fue declarada pero no inicializada
let Null = null // Para decir que la variable está vacía a propósito
let Nan = "abc" / 2; // Ocurre cuando: intentas hacer operaciones matemáticas con algo que no es numérico

//Prompt
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

//Operadores De Asignación
/* Los operadores de asignación se utilizan para asignar valores a variables. */
let asignacion = 10; // Asignación simple
asignacion += 5; // Asignación con suma (equivalente a asignacion = asignacion + 5) Es decir: 10 + 5 = 15
asignacion -= 5; // Asignación con resta (equivalente a asignacion = asignacion - 5) Es decir: 10 - 5 = 5
asignacion *= 2; // Asignación con multiplicación (equivalente a asignacion = asignacion * 2) Es decir: 10 * 2 = 10
asignacion /= 2; // Asignación con división (equivalente a asignacion = asignacion / 2) Es decir: 10 / 2 = 5
asignacion %= 2; // Asignación con módulo (equivalente a asignacion = asignacion % 2) Es decir: 10 % 2 = 0
asignacion **= 2; // Asignación con exponenciación (equivalente a asignacion = asignacion ** 2) Es decir: 10 ** 2 = 100

//Operadores De Comparación
/* Los operadores de comparación se utilizan para comparar valores y devuelven un valor booleano (true o false). */
let esIgual = (5 == 5); // Igualdad (valor)
let esIdentico = (5 === 5); // Identidad (valor y tipo)
let esDiferente = (5 != 3); // Diferencia (valor)
let esNoIdentico = (5 !== 3); // No identidad (valor y tipo)
let esMayor = (5 > 3); // Mayor que
let esMenor = (5 < 3); // Menor que
let esMayorOIgual = (5 >= 3); // Mayor o igual que
let esMenorOIgual = (5 <= 3); // Menor o igual que

//Operadores Lógicos
/* Los operadores lógicos se utilizan para combinar o invertir valores booleanos. */
let and = (true && false); // AND lógico es verdadero si ambos son verdaderos (Devuelve: false)
let or = (true || false); // OR lógico es verdadero si al menos uno es verdadero (Devuelve: true)
let not = !true; // NOT lógico invierte el valor booleano (Devuelve: false)

//Condicionales
/* La estructura básica de una sentencia if es: */
if (condicion) {
    // Código a ejecutar si la condición es verdadera
}
else if (otraCondicion) {
    // Código a ejecutar si la otra condición es verdadera
}
else {
    // Código a ejecutar si ninguna de las condiciones anteriores es verdadera
};

//Arrays o Listas
/* Un array es una colección de elementos, que pueden ser de cualquier tipo de dato. */
let arrayVacio = []; // Un array vacío
let arrayNumeros = [0, 1, 2]; // Un array con números
let arrayCadenas = ["cero", "uno", "dos"]; // Un array con cadenas de texto
let arrayBooleanos = [true, false, true]; // Un array con valores booleanos

//Mostrar Un Array En La Consola
console.log(arrayNumeros); // Muestra el array en la consola

//Acceso A Elementos Del Array
/* Las posiciones de los elementos en un array comienzan desde 0. 
   let array = [posición0, posición1, posición2];
   para acceder a un elemento, se usa el nombreDelArray[posición];. */
let primerElemento = arrayNumeros[0]; // Accede al primer elemento (0)
let segundoElemento = arrayNumeros[1]; // Accede al segundo elemento (1)

//Array Asociativo
/* Un array asociativo es un array que usa cadenas de texto como índices en lugar de números. 
   Se usa un objeto en lugar de un array para crear un array asociativo. */
let arrayAsociativo = {
    "posicion0": "valor1",
    "posicion1": "valor2",
    "posicion2": "valor3"
};

//Acceso A Elementos Del Array Asociativo
let valor1 = arrayAsociativo["posicion0"]; // Accede al valor de la posición "posicion0" y muestra "valor1"
let valor2 = arrayAsociativo["posicion1"]; // Accede al valor de la posición "posicion1" y muestra "valor2"
let valor3 = arrayAsociativo["posicion2"]; // Accede al valor de la posición "posicion2" y muestra "valor3"

//Bucles E Iteraciones
/* Los bucles se utilizan para repetir un bloque de código varias veces.
   Existen diferentes tipos de bucles, como for, while y do-while. */

//While
/* Un bucle while ejecuta un bloque de código infinitamente mientras una condición sea verdadera. 
   La sintaxis básica es:. */
while (condicion) {
    // Código a ejecutar
};

contador = 0; // Inicializa un contador
while (contador < 5) { // Mientras el contador sea menor que 5
    contador++; // Incrementa el contador en 1
    // Si el contador llega a 5, el bucle se detiene
}

//Do-While
/* Un bucle do-while ejecuta un bloque de código al menos una vez y luego verifica la condición. 
   La sintaxis básica es:. */
do {
    // Código a ejecutar
} while (condicion);

contador = 0; // Inicializa un contador
do {
    contador++; // Incrementa el contador en 1
} while (contador < 5); // Mientras el contador sea menor que 5
// El bucle se ejecuta al menos una vez, incluso si la condición es falsa desde el principio

//Break
/* La instrucción break se utiliza para salir de un bucle antes de que se complete su iteración. 
   Se puede usar en cualquier tipo de bucle.
   La sintaxis básica es:. */
contador = 0; // Inicializa un contador
while (contador < 10) { // Mientras el contador sea menor que 10
    contador++; // Incrementa el contador en 1
    if (contador === 5) { // Si el contador es igual a 5
        break; // Sale del bucle
        // El bucle se detiene cuando el contador llega a 5, por lo que no se muestra el valor 5 en la consola
    }
};

//For
/* Un bucle for se utiliza para iterar sobre un rango de valores o elementos de un array. 
   La sintaxis básica es:

   declararVariable; // Inicializa una variable
   for (inicialización; condición; actualización) {
    // Código a ejecutar
   }. */
for (let incremento = 0; incremento < 6; incremento++) {
    console.log(incremento); // Muestra los números del 0 al 5 en la consola
};

//Continue
/* La instrucción continue se utiliza para saltar a la siguiente iteración de un bucle. 
   Se puede usar en cualquier tipo de bucle.
   La sintaxis básica es:. */
contador = 0; // Inicializa un contador
while (contador < 10) { // Mientras el contador sea menor que 10
    contador++; // Incrementa el contador en 1
    if (contador === 5) { // Si el contador es igual a 5
        continue; // Salta a la siguiente iteración del bucle
        // El valor 5 no se muestra en la consola, pero el bucle continúa con el siguiente valor
    }
};

//For...In
/* El bucle for...in se utiliza para iterar sobre las propiedades enumerables de un objeto. 
   La sintaxis básica es:
   for (variable in objeto) {
    // Código a ejecutar
   }. */
let objeto = ["valor1", "valor2", "valor3"];
for (let i in objeto) {
    console.log(i); // Muestra las propiedades del objeto en la consola
    // Muestra los índices de los valores del objeto en la consola (0, 1, 2)
}

//For...Of
/* El bucle for...of se utiliza para iterar sobre los valores de un objeto iterable, como un array. 
   La sintaxis básica es:
   for (variable of objetoIterable) {
    // Código a ejecutar
   }. */
let iterable = ["valor1", "valor2", "valor3"];
for (let valor of iterable) {
    console.log(valor); // Muestra los valores del objeto iterable en la consola
    // Muestra los valores del iterable en la consola ("valor1", "valor2", "valor3")
}

//Funciones
/* Las funciones son bloques de código reutilizables que realizan una tarea específica.
   Se pueden definir con la palabra clave function, seguida del nombre de la función, paréntesis y llaves.
   La sintaxis básica es:
   function nombreFuncion(parametros) {
       // Código a ejecutar
   }. */
function saludar() {
    let nombre = "Mundo"; // Variable local dentro de la función
    console.log("Hola, " + nombre);
}
    // Llamada a la función
    saludar(); // Muestra "Hola, Mundo" en la consola

//Funciones Con Parámetros y Retorno
/* Las funciones pueden aceptar parámetros y devolver un valor.
   La sintaxis básica es:
   function nombreFuncion(parametros) {
       // Código a ejecutar
       return valor; // Devuelve un valor
   }. */
function sumar() {
    let numero1 = 2
    let numero2 = 3
    let resultado = numero1 + numero2; // Suma los dos Números
    return resultado; // Devuelve el resultado de la suma
}
    // Llamada a la función y almacenamiento del resultado
    let resultadoSuma = sumar(); // Llama a la función y guarda el resultado en la variable resultadoSuma
    console.log(resultadoSuma); // Muestra el resultado de la suma en la consola (5)

//Funciones Con Parámetros
/* Las funciones pueden aceptar parámetros para recibir valores externos.
   La sintaxis básica es:
   function nombreFuncion(parametro1, parametro2) {
       // Código a ejecutar
       return valor; // Devuelve un valor
   }. */
function multiplicar(numero1, numero2) {
    let resultado = numero1 * numero2; // Multiplica los dos números
    return resultado; // Devuelve el resultado de la multiplicación
}
    // Llamada a la función con parámetros
    let resultadoMultiplicacion = multiplicar(4, 5); // Llama a la función con los números 4 y 5
    console.log(resultadoMultiplicacion); // Muestra el resultado de la multiplicación en la consola (20)
    // Reutilización de la función con diferentes parámetros
    let otroResultadoMultiplicacion = multiplicar(2, 3); // Llama a la función con los números 2 y 3
    console.log(otroResultadoMultiplicacion); // Muestra el resultado de la multiplicación en la consola (6)

//Funciones Flecha
/* Las funciones flecha son una forma más concisa de definir funciones en JavaScript.
   La sintaxis básica es:
   const nombreFuncion = (parametros) => {
       // Código a ejecutar
       return valor; // Devuelve un valor
   }. */
const saludarFlecha = (nombre) => console.log("Hola, " + nombre);
    // Llamada a la función flecha
    saludarFlecha("Mundo"); // Muestra "Hola, Mundo" en la consola

//POO (Programación Orientada a Objetos)
/* La Programación Orientada a Objetos (POO) es un paradigma de programación que
   organiza el código en objetos que contienen propiedades y métodos.
   En JavaScript, los objetos se pueden crear utilizando la sintaxis de objeto literal o mediante
   la creación de clases. */

//Clases
/* Una clase es una plantilla para crear objetos. 
   Define las propiedades y métodos que tendrán los objetos creados a partir de ella.
   La sintaxis básica es:
   class NombreClase {
       constructor(parametros) {
           // Inicialización de propiedades
       }
       metodo() {
           // Código del método
       }
   }. */
class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, Tengo ${this.edad} años y soy de color ${this.color}.`;
    };
};
let perro = new animal("perro",5,"blanco");
console.log(perro.info);

//Metodos
/* Un método es una función definida dentro de una clase que puede ser llamada en los objetos creados a partir de esa clase.
   La sintaxis básica es:
   class NombreClase {
       constructor(parametros) {
           // Inicialización de propiedades
       }
       metodo() {
           // Código del método
       }
   }. */
class persona {
    constructor(nombre,edad,altura){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.info = `Hola! Soy ${this.nombre}, Tengo ${this.edad} años y mi altura es ${this.altura}.`;
    };
    verInfo(){ // Método para mostrar la información de la persona
        console.log(this.info)
    }
    caminar(){ // Método para simular que la persona camina
        console.log(`${this.nombre} está caminando.`)
    }
    ladrar(){
        if (this.nombre === "perro") {
            console.log(`${this.nombre} está ladrando.`)
        }
        else {
            console.log(`${this.nombre} no puede ladrar porque no es un perro.`)
        }
    }
}
let kevin = new persona("Kevin Moreno",20,"1.60cm") // Crea una instancia de la clase persona
kevin.verInfo(); // Muestra la información de la persona en la consola
kevin.caminar(); // Llama al método caminar de la persona
let perros = new persona("perro",5,"blanco"); // Crea una instancia de la clase persona con el nombre "perro"
kevin.ladrar(); // Llama al método ladrar de la persona devuelve "Kevin Moreno no puede ladrar porque no es un perro."
perros.ladrar(); // Llama al método ladrar de la persona devuelve "perro está ladrando."

//Herencia
/* La herencia permite que una clase herede propiedades y métodos de otra clase.
   La sintaxis básica es:
   class ClaseBase {
       constructor(parametros) {
           // Inicialización de propiedades
       }
       metodo() {
           // Código del método
       }
   }*/

class humano extends persona { // La clase humano hereda de la clase persona
    constructor(nombre,edad,altura){
        super(nombre,edad,altura); // Llama al constructor de la clase base
    }
    diceLaEdad(){
        console.log(`${this.nombre} tiene ${this.edad} años.`);
    }
}

let juan = new humano("Kevin Moreno",20,"1.60cm"); // Crea una instancia de la clase humano
juan.diceLaEdad(); // Llama al método diceLaEdad de la persona devuelve "Kevin Moreno tiene 20 años."


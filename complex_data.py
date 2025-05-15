#   Listas, Se crean con [], Se pueden modificar
lista = ["Jhos Kevin","Agudelo Moreno",True,20,1.60] #  Esto es una lista y puede almacenar varios tipos de datos
print(lista)#   Esto muestra lo que esta en la (lista)
    # TERMINAL: ['Jhos Kevin', 'Agudelo Moreno', True, 20, 1.6]
    
#   Mostrar un dato en especifico de la lista // Las listas incian desde 0
#   Acceder a un dato por el indice (lista[Num]) = (Dato del [NUM])
print(lista[1]) #   Esto muestra ['Agudelo Moreno'] ya que es el dato que esta en la pocicion numero 1
print(lista[0]) #   Esto muestra ['Jhos Kevin'] ya que es el dato que esta en la pocicion numero 0

#   Modificar un dato de la lista
lista[2] = False #  Cambialos lo que esta en la pocicion 2(TRUE) por (FALSE)
print(lista[2])# Esto muestra (FALSE) ya que la pocicion 2 ya no es (TRUE), ahora es (FALSE)

#   Tuplas, Se crean con (), No se pueden modificar
tupla = ("Jhos Kevin","Agudelo Moreno",True,20,1.60)
print(tupla)#   Esto muestra lo que esta en la (Tupla)
    #   Modificar una lista no es posible
    #   tupla[2] = False //Esto nos dara ¡ERROR
    
#   Conjuntos"
#   En un conjunto no pueden haber datos duplicados, y no se accede a sus datos por el indice[NUM]
conjunto = {"Jhos Kevin","Agudelo Moreno",True,20,1.60}

#   Diccionarios, Se crea con {}, Se pueden modificar
#   ESTRUCTURA > "clave": {valor}
#   Se accede por su "clave"
diccionario = {
    "nombre": "Jhos Kevin",
    "Apellido": "Agudelo Moreno",
    "fov": True,
    "edad": "20",
    "estatura": "1.60"
}
print(diccionario["nombre"]) #   Esto muestra lo que esta en el (diccionario) dentro de el valor ["nombre"] = Jhos Kevin

#   Operadores Aritmeticos/Matematicos
"""
+ Suma -> a + b = c
- Resta -> a - b = c
* Multiplicacion -> a * b = c
/ Division -> a / b = c #Siempore devuelve un dato (FLOAT)
% Modulo -> a % b = 0    #Devuelve el resto de la division
** Exponente -> a ** b = c   #Realiza exponencial
// Division baja -> a // b = c   #Devuelve el entero de la division en un (INT) redondeado hacia abajo 4.9 = 4 
"""
#   Variables con dos numeros
a = 2
b = 3
#   Operaciones
suma = a + b            #TERMINAL: 5
resta = a - b           #TERMINAL: -1 
multiplicacion = a * b  #TERMINAL: 6
division = a / b        #TERMINAL: 0.6666666666666666
modulo = a % b          #TERMINAL: 2
exponente = a ** b      #TERMINAL: 8
division_baja = a // b  #TERMINAL: 0
#  Mostrar los resultados
print(suma)
print(resta)
print(multiplicacion)
print(division)
print(modulo)
print(exponente)
print(division_baja)

#   Operadore de comparacion
"""
== es igual que -> a == b
!= es distinto que -> a != b

< es menor que # a < b
<= es menor o igual que # a < b

> es mayor que # a > b
>= es mayor o igual que # a > b
"""
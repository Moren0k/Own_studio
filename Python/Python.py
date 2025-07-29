# -----------------------
# VARIABLES Y TIPOS DE DATOS
# -----------------------

str = "Texto"
int = 10
float = 9.5
bool = True, False

# Variables
nombre_variable = "Dato para almacenar"

# camelCase
NombreCompleto = "Jhos Kevin Agudelo Moreno"
# snake_case (RECOMENDADO)
nombre_completo = "Jhos Kevin Agudelo Moreno"

# -----------------------
# OPERADORES ARITMÉTICOS
# -----------------------
"""
+ Suma -> a + b
- Resta -> a - b
* Multiplicación -> a * b
/ División -> a / b
% Módulo -> a % b
** Exponente -> a ** b
// División baja -> a // b
"""

a = 2
b = 3

suma = a + b
resta = a - b
multiplicacion = a * b
division = a / b
modulo = a % b
exponente = a ** b
division_baja = a // b

print(suma, resta, multiplicacion, division, modulo, exponente, division_baja)

# -----------------------
# STRINGS
# -----------------------

bienvenida = "Hola " + nombre_completo + " ¿Como estas?"
bienvenida = f"Hola {nombre_completo} ¿Como estas?"
print(bienvenida)

# Operadores de pertenencia
print("Kevin" in bienvenida)
print("Kevin" not in bienvenida)

chain = "jhos Kevin agudelo Moreno   "

mayus = chain.upper()
minus = chain.lower()
first_mayus = chain.capitalize()
search_find = chain.find("K")
# search_index = chain.index("X") # Devuelve ERROR si no encuentra
numeric = chain.isnumeric()
alphanumeric = chain.isalpha()
count_coincidences = chain.count("a")
count_characters = len(chain)
starts_with = chain.startswith("jhos")
end_with = chain.endswith(" ")
replace = chain.replace("jhos", "Hola")
separate = chain.split(",")

# -----------------------
# OPERADORES LÓGICOS
# -----------------------

# AND
True & True     # True
False & True    # False
True & False    # False
False & False   # False

# OR
True | True     # True
False | True    # True
True | False    # True
False | False   # False

# NOT
not True        # False
not False       # True

# -----------------------
# ESTRUCTURAS DE CONTROL
# -----------------------

age = 9
if age <= 18:
    print("Eres menor")
else:
    print("Eres mayor")

password = "123"
enter_password = "1234"
if enter_password == password:
    print("Contraseña correcta")
else:
    print("Contraseña incorrecta")

income = 200
bills = 200
if income >= 10000:
    print("Ganas muy bien 10k")
elif income >= 5000:
    print("Ganas bien 5k")
elif income >= 200:
    print("Ganas mal 200")
    if income - bills >= 0:
        print("Ganas poco y gastas mucho")
else:
    print("Ganas mal -5k")

# -----------------------
# LISTAS
# -----------------------

lista = ["Jhos Kevin", "Agudelo Moreno", True, 20, 1.60]
print(lista[1])  # Acceso por índice
lista[2] = False  # Modificar
print(lista[2])

list = list(["Element0", "Element1", "Element2"])
count_list = len(list)
list.append("NewElement3")
list.insert(2, "NewElementIn2Position")
list.extend(["NewElement4", "NewElement5"])

# -----------------------
# TUPLAS
# -----------------------

tupla = ("Jhos Kevin", "Agudelo Moreno", True, 20, 1.60)
print(tupla)
# tupla[2] = False  # ERROR: no se pueden modificar

# -----------------------
# CONJUNTOS
# -----------------------

conjunto = {"Jhos Kevin", "Agudelo Moreno", True, 20, 1.60}
# No índices, no duplicados

# -----------------------
# DICCIONARIOS
# -----------------------

diccionario = {
    "nombre": "Jhos Kevin",
    "Apellido": "Agudelo Moreno",
    "fov": True,
    "edad": "20",
    "estatura": "1.60"
}
print(diccionario["nombre"])

"String"
"""String"""

"""String
    String"""

str = "Texto"
int = 10
float = 9.5
bool = True, False

# Variables
nombre_variable = "Dato para almacenar"

#   Definir una variable con camelCase
NombreCompleto = "Jhos Kevin Agudelo Moreno"
#   Definir una variable con snake_case //RECOMENDACION OFICIAL POR PYTHON
nombre_completo = "Jhos Kevin Agudelo Moreno"

#   Concatenar con +
bienvenida = "Hola " + nombre_completo + " ¿Como estas?" #  Los espacios tambien cuentan como caractes dentro de el string
#   Concatenar con F-Strings
bienvenida = f"Hola {nombre_completo} ¿Como estas?"

#   Mostrar o imprimir un mensaje
print(bienvenida) # Muestra lo que esta en la variable (Bienvenida)
    # TERMINAL: Jhos Kevin Agudelo Moreno

#   Operadordes de pertenencia (in / not in)
print("Kevin" in bienvenida) # Muestra TRUE por qué "Kevin" esta en (bienvenida)
print("Kevin" not in bienvenida) # Muestra FALSE por qué "Kevin" no esta en (bienvenida)
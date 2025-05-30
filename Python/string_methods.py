chain = "jhos Kevin agudelo Moreno   "

mayus = chain.upper() #Convierte toda la cadena en mayusculas

minus = chain.lower() #Convierte toda la cadena en minusculas

first_mayus = chain.capitalize() #Convierte toda la cadena en minusculas y LA PRIMERA EN MAYUSCULA!

search_find = chain.find("K") #Busca una cadena en otra cadena (incia desde 0 y cuenta cada caracter y espacio de la cadena!) y devuelve la posición, SI NO = -1

search_index = chain.index("X") #Busca una cadena en otra cadena (incia desde 0 y cuenta cada caracter y espacios!) y devuelve la posición, SI NO = Error!

numeric = chain.isnumeric() #Deuelve TRUE si la cadena es numerica

alphanumeric = chain.isalpha() #Devuelve TRUE si la cadena es alfanumerica 

count_coincidences = chain.count("a") #Devuelve la cantidad de coincidencias que hay en la cadena! SI NO = 0 (TEXTO TAL CUAL)

count_characters = len(chain) #Devuelve la cantidad de caracteres que tiene la cadena

starts_with = chain.startswith() #Devuelve TRUE si incia con "X dato"

end_with = chain.endswith() #Devuelve TRUE si inicia con "X dato"

replace = chain.replace("jhos","Hola") #Remplaza el valor 1 dado por el valor 2 en la cadena! SI NO = cadena!

separate = chain.split(",") #Separa la cadena por el valor dado y devuelve una lista!

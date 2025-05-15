"""se utiliza para tomar decisiones en la programación. If -  Else"""

age = 9
if age <= 18:
    print("Eres menor")
else:
    print("Eres mayor")
    
    
# Comprabacion de strings
password = "123"
enter_password = "1234"
if enter_password == password:
    print("Contraseña correcta")
else:
    print("Contraseña incorrecta")
    
#Comprobacion varia con if-elif-else
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
    print("ganas mal -5k")
# Bases de datos NoSQL – Comandos MongoDB

---

### Comandos básicos

##### Crear o usar una base de datos  
Selecciona o crea una base de datos para trabajar en ella.
```js
use nombreBaseDeDatos
```

##### Crear una colección explícitamente  
Crea una colección (o tabla) vacía manualmente antes de agregar documentos.
```js
db.createCollection("nombreCollection")
```

##### Insertar un documento en una colección  
Agrega un solo documento a una colección existente.
```js
db.nombreCollection.insertOne({ clave: "valor" })
```

##### Insertar varios documentos  
Agrega múltiples documentos a la colección en una sola operación.
```js
db.nombreCollection.insertMany([
  { clave1: "valor1" },
  { clave2: "valor2" },
  { clave3: "valor3" }
])
```

##### Consultar todos los documentos  
Muestra todos los documentos guardados en la colección.
```js
db.nombreCollection.find()
```

##### Consultar documentos con filtro  
Recupera documentos que cumplen con una condición específica.
```js
db.nombreCollection.find({ clave: "valor" })
```

##### Modificar un documento  
Actualiza el primer documento que coincida con el filtro dado.
```js
db.nombreCollection.updateOne(
  { clave: "valor" },
  { $set: { claveModificar: "nuevoValor" } }
)
```

##### Modificar varios documentos  
Actualiza todos los documentos que cumplan el filtro especificado.
```js
db.nombreCollection.updateMany(
  { clave: "valor" },
  { $set: { claveModificar: "nuevoValor" } }
)
```

##### Eliminar un documento  
Elimina el primer documento que coincida con el filtro indicado.
```js
db.nombreCollection.deleteOne({ clave: "valor" })
```

##### Eliminar varios documentos  
Elimina todos los documentos que coincidan con el filtro dado.
```js
db.nombreCollection.deleteMany({ clave: "valor" })
```

##### Eliminar una colección  
Borra completamente una colección y sus documentos.
```js
db.nombreCollection.drop()
```

##### Eliminar una base de datos  
Elimina la base de datos actualmente seleccionada por completo.
```js
db.dropDatabase()
```

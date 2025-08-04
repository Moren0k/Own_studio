# Bases de datos NoSQL

---

### Comandos básicos

##### Crear o usar una base de datos
```bash
use nombreBaseDeDatos
```

##### Crear una colección (tabla) explícitamente
```bash
db.createCollection("nombreCollection")
```

##### Insertar documentos en la colección creada
```bash
db.nombreCollection.insertOne({clave: "valor");
```

##### Crear una colección insertando un documento (se crea si no existe)
```bash
db.nombreCollection.insertOne({clave: valor})

# Crear una colección con varios datos
db.nombreCollection.insertMany([
    {clave:valor},
    {clave2:valor},
    {calve3:valor}
])
```

##### Consultar documentos
```bash
db.nombreCollection.find({clave:valor})
```

##### Modificar documentos
```bash
db.nombreCollection.updateOne(
    {clave:valor},
    {$set:{claveModificar:nuevoValor}}

```

##### Eliminar documentos
```bash
db.nombreCollection.deleteOne({clave:valor})
-- Entrar a MySQL desde la terminal
mysql -u root -p

-- Crear una base de datos nueva
CREATE DATABASE nombre_de_la_base_de_datos;

-- Ver las bases de datos creadas
SHOW DATABASE;

-- Usar una base de datos
USE nombre_de_la_base_de_datos;

-- Eliminar una base de datos
DROP DATABASE nombre_de_la_base_de_datos;

-- Crear tablas
CREATE TABLE nombre_tabla (
    id INT AUTO_INCREMENT PRIMARY KEY,
    clave1 VARCHAR(50),
    clave2 VARCHAR(100)
);

-- Ver todas las tablas
SHOW TABLES;

-- Ver estructura de una tabla
DESCRIBE nombre_tabla;

-- Eliminar tabla
DROP TABLE nombre_tabla;

-- Insertar datos
INSERT INTO nombre_tabla (clave1, clave2) 
VALUES (valor1, valor2);

-- Multiples inserciones
INSERT INTO nombre_tabla (clave1, clave2)
VALUES
(valor1, valor2)
(valor1, valor2);

-- Consultar datos
SELECT * FROM nombre_tabla;

-- Actualizar datos
UPDATE nombre_tabla
SET clave1 = 'nuevo_dato'
WHERE id = 1;

-- Eliminar registro
DELETE FROM nombre_tabla WHERE id = 1;

-- Eliminar todos los registros
DELETE FROM nombre_tabla;

-- Llaves Primarias y Foráneas
CREATE TABLE nombre_tabla_2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    clave_1 INT,
    clave_2 INT,
    FOREIGN KEY (nombre_tabla_id) REFERENCES nombre_tabla(id)
)
# Guía Rápida de Instalación de MySQL Server

Este README proporciona una guía clara y estructurada para instalar **MySQL Server** en distintos sistemas operativos. Ideal para desarrolladores, estudiantes y profesionales que desean montar un entorno de bases de datos relacional robusto y funcional.

---

##  Requisitos Previos

- Acceso como administrador al sistema operativo.
- Conexión a Internet estable.

---

##  Instalación por Sistema Operativo

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
sudo systemctl enable mysql
```

**Verificar que el sistema está activado:**

```bash
sudo systemctl status mysql
```

**Asegurar la isntalación (Recomentado):**

```bash
sudo mysql_secure_installation
```

---+

### macOS (usando Homebrew)

```bash
brew update
brew install mysql
brew services start mysql
```

**Conectarse como usuario root (sin contraseña inicialmente):**

```bash
mysql -u root
```

---

### Windows

1. Descargar el instalador desde la página oficial:
   [MySQL Pagína Oficial](https://dev.mysql.com/downloads/installer/)
2. Ejecutar el instalador y seleccionar "Developer Default"
3. Configurar:
    - Puerto (3306 por defecto).
    - Usuario "root" con contaseña.

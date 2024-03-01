# technical_test_dsevilla

Este es el repositorio para guardar la prueba tecnica de NicCoders

Comando para correr el proyecto frontend.

para instalar las dependencias
-npm i

-npm run dev

Open [http://localhost:3000](http://localhost:8000) with your browser to see the result.

Comando para correr el proyecto backend.

-npm run dev

Open [http://localhost:3000] with your browser to see the result.


# Script para la base de datos
// Crear base de datos
CREATE  DATABASE db_Favorites;

// Tabla de personajes
CREATE TABLE personajes  (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
status VARCHAR(50),
species VARCHAR(50),
type VARCHAR(50),
gender VARCHAR(20),
image VARCHAR(255),
url VARCHAR(255),
created DATE,
createdAt date,
updatedAt date
);
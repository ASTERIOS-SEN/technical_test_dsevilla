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
-- DROP TABLE IF EXISTS roles, users, categories, books;

CREATE TABLE IF NOT EXISTS roles (
    role_id SERIAL NOT NULL,
    name VARCHAR(50),

    CONSTRAINT pk_roles PRIMARY KEY (role_id),
    CONSTRAINT uc_roles_name UNIQUE (name)
);

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role_id INTEGER NOT NULL,

    CONSTRAINT pk_users PRIMARY KEY (user_id),
    CONSTRAINT uc_email UNIQUE (email),
    CONSTRAINT fk_roles
        FOREIGN KEY (role_id)
        REFERENCES roles (role_id)
);

CREATE TABLE IF NOT EXISTS categories (
    category_id SERIAL NOT NULL,
    name VARCHAR(50),

    CONSTRAINT pk_categories PRIMARY KEY (category_id),
    CONSTRAINT uc_categories_name UNIQUE (name)
);

CREATE TABLE IF NOT EXISTS books (
    book_id SERIAL NOT NULL,
    name VARCHAR(500) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    description VARCHAR(2000),
    base64image TEXT,
    category_id INTEGER NOT NULL,

    CONSTRAINT pk_books PRIMARY KEY (book_id),
    CONSTRAINT fk_categories
        FOREIGN KEY (category_id)
        REFERENCES categories (category_id)
);

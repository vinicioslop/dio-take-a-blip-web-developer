CREATE TABLE pessoas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    nascimento DATE,
    altura INT
);

CREATE TABLE pessoa (
    nome VARCHAR(30),
    nascimento DATE
);

SELECT * FROM pessoas;

SELECT *
FROM `pessoa`;

INSERT INTO pessoa (nome, nascimento)
VALUES ('Nathaly', '1990-05-22');

INSERT INTO pessoas (nome, nascimento)
VALUES ('Nathaly', '1990-05-22');

INSERT INTO pessoas (nome, nascimento)
VALUES ('Pedro', '1995-07-17');

INSERT INTO pessoas (nome, nascimento)
VALUES ('Marcela', '2000-04-05');
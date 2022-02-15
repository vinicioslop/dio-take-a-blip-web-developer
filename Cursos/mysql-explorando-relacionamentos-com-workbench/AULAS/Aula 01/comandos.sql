SHOW DATABASES;

USE dio_mysql;

SHOW TABLES;

CREATE TABLE cursos(
    id_curso INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(10)
);

SHOW TABLES;

INSERT INTO cursos (nome) VALUES ('MySQL');
INSERT INTO cursos (nome) VALUES ('HTML');

SELECT * FROM cursos;

UPDATE cursos SET nome="HTML 5" WHERE id_curso=2;

SELECT * FROM cursos;

/* 
    RESULTA EM ERRO POR CAUSO DO NOME DO CURSO SER MAIOR
    QUE O VALOR DEFINIDO COMO TAMANHO MÁXIMO DA STRING
*/
INSERT INTO cursos (nome) VALUES ('Contabilidade');

/* NÃO INSERE NADA POR CAUSA DO ERRO ANTERIOR */
SELECT * FROM cursos;

INSERT INTO cursos (nome) VALUES ('Economia');

SELECT * FROM cursos;

SELECT * FROM cursos WHERE nome="Economia";
DELETE FROM cursos WHERE nome="Economia";

SELECT * FROM cursos;

/*
    NESTE COMANDO PODE SE UTILIZAR AFTER OU BEFORE PARA
    ESCOLHER A POSIÇÃO DA NOVA COLUNA, COM BASE EM UMA
    COLUNA EXISTENTE NA TABELA A SER ALTERADA.    
*/
ALTER TABLE cursos ADD carga_horaria INT(2);

SELECT * FROM cursos;

/*
    ALTERA TODOS OS CURSOS, POR NÃO TER SIDO ESPECIFICADO
    UMA LINHA EM ESPECÍFICO.
*/
UPDATE cursos SET carga_horaria=20;

UPDATE cursos SET carga_horaria=40 WHERE id_curso=2;

SELECT * FROM cursos;

SHOW TABLES;

DROP TABLE usuarios;

DROP DATABASE test;
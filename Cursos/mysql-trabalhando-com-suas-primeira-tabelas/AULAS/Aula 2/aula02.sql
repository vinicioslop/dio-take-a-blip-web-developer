DROP TABLE pessoa;

SELECT * FROM pessoas;

SELECT nome FROM pessoas;

SELECT nome, nascimento FROM pessoas;

/*
   ATUALIZA TODOS OS DADOS DA TABELA, PORQUE
   NÃO FOI ESPECÍFICADO UMA LINHA ESPECÍFICA
*/
UPDATE pessoas SET nome='Nathally Souza';

UPDATE pessoas SET nome = 'Nathally Souza' WHERE id = 1;

UPDATE pessoas SET nome = 'Pedro' WHERE id = 2;

UPDATE pessoas SET nome = 'Marcela' WHERE id = 3;

UPDATE pessoas SET nome = 'Flávio' WHERE id = 4;

DELETE FROM pessoas WHERE id = 1;

SELECT * FROM pessoas ORDER BY nome;

SELECT * FROM pessoas ORDER BY nome DESC;

ALTER TABLE `pessoas` ADD `genero` VARCHAR(1) NOT NULL AFTER `nascimento`;

UPDATE pessoas SET genero = 'F' WHERE id = 1;
UPDATE pessoas SET genero = 'M' WHERE id = 2;
UPDATE pessoas SET genero = 'F' WHERE id = 1;
UPDATE pessoas SET genero = 'm' WHERE id = 1;

SELECT COUNT(id), genero FROM pessoas GROUP BY genero;
SELECT COUNT(genero), genero FROM pessoas GROUP BY genero;

/*
INNER JOIN - DADOS QUE EXISTAM NAS 2 TABELAS */
SELECT  *
FROM pessoas
JOIN cursos
ON pessoas.fk_cursos = cursos.id_cursos; USE dio_mysql;

DROP TABLE videos;

DROP TABLE author;
CREATE TABLE videos( id_video INT PRIMARY KEY AUTO_INCREMENT, author VARCHAR(30), title VARCHAR(30), likes INT, dislikes INT );
INSERT INTO videos (author, title, likes, dislikes) VALUES ('Maria', 'MySQL', 10, 2);
INSERT INTO videos (author, title, likes, dislikes) VALUES ('João', 'HTML', 30, 1);
INSERT INTO videos (author, title, likes, dislikes) VALUES ('Maria', 'CSS', 18, 3);
INSERT INTO videos (author, title, likes, dislikes) VALUES ('Pedro', 'JavaScript', 15, 8);
INSERT INTO videos (author, title, likes, dislikes) VALUES ('Maria', 'Python', 50, 0);

SELECT  *
FROM videos;

CREATE TABLE author( id_author INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(30), born DATE );
INSERT INTO author(name, born) VALUES ('Maria', '1992-04-19');
INSERT INTO author(name, born) VALUES ('Pedro', '2000-10-12');
INSERT INTO author(name, born) VALUES ('João', '1998-03-09');
INSERT INTO author(name, born) VALUES ('Flávia', '2008-12-05');

SELECT  *
FROM author; /* ALTERA PELO WORKBENCH O TIPO DA COLUNA AUTHOR */ /* COMANDO */ ALTER TABLE `dio_mysql`.`videos` CHANGE COLUMN `author` `author` INT NULL DEFAULT NULL; UPDATE videos

SET author = 1
WHERE id_video = 1; UPDATE videos

SET author = 3
WHERE id_video = 2; UPDATE videos

SET author = 1
WHERE id_video = 3; UPDATE videos

SET author = 2
WHERE id_video = 4; UPDATE videos

SET author = 1
WHERE id_video = 5;

SELECT  *
FROM videos; /* ALTERANDO A TABELA VÍDEO PARA ADICIONAR UM FOREIGN KEY PELO PHPMYADMIN */ ALTER TABLE `videos` ADD CONSTRAINT `fk_author` FOREIGN KEY
(`id_author`
) REFERENCES `author`(`id_author`)
ON
DELETE CASCADE
ON UPDATE CASCADE; /*
INNER JOIN PADRÃO */
SELECT  *
FROM videos
JOIN author
ON videos.id_author = author.id_author; /*
INNER JOIN COM APELIDO
(ALIAS
) */
SELECT  v.id_video
       ,v.title
       ,a.name
FROM videos v
JOIN author a
ON v.id_author = a.id_author;

CREATE TABLE `dio_mysql`.`seo` ( `id_seo` INT NOT NULL AUTO_INCREMENT, `categoria` VARCHAR(30) NOT NULL, PRIMARY KEY (`id_seo`) ) ENGINE = InnoDB;
INSERT INTO videos (id_author, title, likes, dislikes) VALUES (2, 'PHP', 20, 8);
INSERT INTO seo (categoria) VALUES ('Frontend');
INSERT INTO seo (categoria) VALUES ('Backend'); ALTER TABLE `seo` CHANGE `categoria` `category` VARCHAR(30) CHARACTER

SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL; ALTER TABLE `videos` ADD `fk_seo` INT NOT NULL AFTER `title`; UPDATE videos
SET fk_seo = 1
WHERE id_video = 2; UPDATE videos

SET fk_seo = 1
WHERE id_video = 3; UPDATE videos

SET fk_seo = 1
WHERE id_video = 4; UPDATE videos

SET fk_seo = 2
WHERE id_video = 1; UPDATE videos

SET fk_seo = 2
WHERE id_video = 5; UPDATE videos

SET fk_seo = 2
WHERE id_video = 6; ALTER TABLE `videos` ADD CONSTRAINT `fk_seo` FOREIGN KEY (`fk_seo`) REFERENCES `seo`(`id_seo`)
ON
DELETE CASCADE
ON UPDATE CASCADE;

SELECT  *
FROM videos v
JOIN seo s
ON v.fk_seo = s.id_seo;

SELECT  v.title
       ,s.category
FROM videos v
JOIN seo s
ON v.fk_seo = s.id_seo; ALTER TABLE `videos` CHANGE `id_author` `fk_author` INT(11) NULL DEFAULT NULL;

SELECT  v.title
       ,a.name
       ,s.category
FROM videos v
JOIN seo s
ON v.fk_seo = s.id_seo
JOIN author a
ON v.fk_author = a.id_author;

CREATE TABLE `dio_mysql`.`playlist` ( `id_playlist` INT NOT NULL AUTO_INCREMENT , `name_pl` VARCHAR(30) NOT NULL , PRIMARY KEY (`id_playlist`)) ENGINE = InnoDB;
INSERT INTO playlist (name_pl) VALUES ('HTML + CSS');
INSERT INTO playlist (name_pl) VALUES ('HTML + PHP + JS');
INSERT INTO playlist (name_pl) VALUES ('Python + PHP');

CREATE TABLE `dio_mysql`.`videos_playlist` ( `id_vp` INT NOT NULL AUTO_INCREMENT , `fk_video` INT NOT NULL , `fk_playlist` INT NOT NULL , PRIMARY KEY (`id_vp`)) ENGINE = InnoDB;
INSERT INTO videos_playlist (fk_video, fk_playlist) VALUES (2, 1);
INSERT INTO videos_playlist (fk_video, fk_playlist) VALUES (3, 1);
INSERT INTO videos_playlist (fk_video, fk_playlist) VALUES (2, 2);
INSERT INTO videos_playlist (fk_video, fk_playlist) VALUES (6, 2);
INSERT INTO videos_playlist (fk_video, fk_playlist) VALUES (4, 2);
INSERT INTO videos_playlist (fk_video, fk_playlist) VALUES (5, 3);
INSERT INTO videos_playlist (fk_video, fk_playlist) VALUES (6, 3);

SELECT  *
FROM playlist p
JOIN videos_playlist vp
ON p.id_playlist = vp.fk_playlist
JOIN videos v
ON v.id_video = vp.fk_video;

/* PLAYLIST E VIDEO */
SELECT  p.name_pl
       ,v.title
FROM playlist p
JOIN videos_playlist vp
ON p.id_playlist = vp.fk_playlist
JOIN videos v
ON v.id_video = vp.fk_video;

/* PLAYLIST, VIDEO E AUTHOR */
SELECT  p.name_pl
       ,v.title
       ,a.name
FROM playlist p
JOIN videos_playlist vp
ON p.id_playlist = vp.fk_playlist
JOIN videos v
ON v.id_video = vp.fk_video
JOIN author a
ON v.fk_author = a.id_author;

UPDATE playlist SET fk_author=1 WHERE id_playlist=1;
UPDATE playlist SET fk_author=4 WHERE id_playlist=2;
UPDATE playlist SET fk_author=3 WHERE id_playlist=3;

/* NÃO FUNCIONA, N SEI PQ */
ALTER TABLE `playlist` ADD CONSTRAINT `fk_author` FOREIGN KEY (`fk_author`) REFERENCES `author`(`id_author`) ON DELETE CASCADE ON UPDATE CASCADE;
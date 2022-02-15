/* USAR O DATABASE DO CURSO ANTERIOR */
USE dio_mysql;

/* SEM AS */
SELECT * FROM videos_playlist JOIN videos ON videos_playlist.fk_video = videos.id_video;

/* COM AS */
SELECT * FROM videos_playlist AS vp JOIN videos AS V ON vp.fk_video = v.id_video;

/* ATUALIZANDO OS VÍDEOS */
UPDATE videos SET title = 'Introdução ao MySQL'
    WHERE id_video=1;
UPDATE videos SET title = 'Introdução ao HTML'
    WHERE id_video=2;
UPDATE videos SET title = 'Introdução ao CSS'
    WHERE id_video=3;
UPDATE videos SET title = 'Introdução ao JavaScript'
    WHERE id_video=4;
UPDATE videos SET title = 'Introdução ao Python'
    WHERE id_video=5;
UPDATE videos SET title = 'Introdução ao PHP'
    WHERE id_video=6;

SELECT * FROM videos_playlist AS vp JOIN videos AS v ON vp.fk_video = v.id_video JOIN author AS a ON v.fk_author = a.id_author;

SELECT p.name_pl, v.title, a.name, v.likes, v.dislikes FROM playlist AS p JOIN videos_playlist AS vp ON vp.fk_playlist = p.id_playlist JOIN author AS a ON p.fk_author = a.id_author JOIN videos AS v ON vp.fk_video = v.id_video;

SELECT p.name_pl, v.title, v.likes, v.dislikes, a.name, s.category FROM playlist AS p JOIN videos_playlist AS vp ON vp.fk_playlist = p.id_playlist JOIN author AS a ON p.fk_author = a.id_author JOIN videos AS v ON vp.fk_video = v.id_video JOIN seo AS s ON v.fk_seo = s.id_seo;

/* COM INNER JOIN */
SELECT * FROM videos_playlist AS vp INNER JOIN videos AS v ON vp.fk_video = v.id_video;

/* SEM INNER JOIN */
SELECT * FROM videos_playlist AS vp JOIN videos AS v ON vp.fk_video = v.id_video;
/* NESSE CASO OBTEM O MESMO RESULTADO */

/* EXEMPLO USANDO O OUTER JOIN A ESQUERDA E A DIREITA */
SELECT * FROM videos_playlist AS vp LEFT OUTER JOIN videos AS v ON vp.fk_video = v.id_video RIGHT OUTER JOIN author AS a ON v.fk_author = a.id_author;

/* EXEMPLO USANDO O OUTER JOIN A ESQUERDA */
SELECT * FROM videos_playlist AS vp RIGHT OUTER JOIN videos AS v ON vp.fk_video = v.id_video JOIN author AS a ON v.fk_author = a.id_author;

/* BRINCANDO COM O UNION */
SELECT v.id_video, v.title FROM videos AS v LEFT OUTER JOIN videos_playlist AS vp ON vp.fk_video = v.id_video
UNION
SELECT a.id_author, a.name FROM author AS a RIGHT OUTER JOIN videos AS v ON a.id_author = v.fk_author;

/* CHAMANDO UMA PLAYLIST ESPECÍFICA */
SELECT vp.name_pl, v.title FROM videos_playlist AS vp INNER JOIN videos AS v ON vp.fk_video = v.id_video WHERE v.title = 6;
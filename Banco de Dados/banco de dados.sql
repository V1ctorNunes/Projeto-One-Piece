create database projeto_individual;
use projeto_individual;

truncate table ranking;
truncate table usuario;

delete from usuario where idusuario = 1;
delete from ranking where idQuiz = 1;
delete from ranking where fkUsuario = 6;
update ranking set Tentativas = 5 where fkUsuario = 1;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(100),
nickname varchar(100),
email varchar(120),
senha char(45)
);

create table perfil (
idPerfil int auto_increment,
nickname varchar(100),
score int,
tentativas int,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
primary key (idPerfil, fkUsuario)
);

create table ranking (
idQuiz int primary key auto_increment,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
tentativas int,
score int,
acertos int
);
    
insert into usuario values 
	(null, 'Victor', 'Vitin', 'vitin@hotmail.com', '1234'),
	(null, 'Thiago', 'Tigas', 'tigas@hotmail.com', '1234'),
    (null, 'Vitor', 'Hugo', 'hugo@hotmail.com', '1234'),
    (null, 'Guto', 'Gutin', 'gutin@hotmail.com', '1234'),
	(null, 'Carmona', 'carminha', 'carminhan@hotmail.com', '1234'),
    (null, 'Jose', 'ze', 'jose@hotmail.com', '1234');

insert into ranking values 
	(1, '1', '3', '115', '3'),
	(2, '2', '1', 76, '2'),
	(3, '3', '2', '115', '3'),
	(4, '4', '3', '115', '3'),
	(5, '5', '1', '55', '1');

update ranking set Tentativas = 11 WHERE fkUsuario = 6;

select * from ranking;
select * from usuario;
    
SELECT usuario.nickname AS Nickname,
      sum(ranking.tentativas) AS Tentativas,
      max(ranking.score) AS Pontos,
      max(ranking.acertos) AS Acertos
      FROM usuario JOIN ranking
      on ranking.fkUsuario = usuario.idUsuario
      group by usuario.nickname 
      order by Pontos desc;
      
SELECT ranking.idQuiz AS idQuiz,
	   max(ranking.score) AS Pontos, 
	   sum(ranking.tentativas) AS Tentativas
       From ranking join usuario
       on ranking.fkUsuario = usuario.idUsuario
	   group by idQuiz
	   order by Pontos desc;
       
       SELECT usuario.nickname  AS Nickname,
      max(ranking.score) AS Pontos, 
      sum(ranking.tentativas) AS Tentativas
        From ranking join usuario
        on ranking.fkUsuario = usuario.idUsuario
      WHERE usuario.idUsuario = 1;
      
      select perfil.nickname AS Nickname,
			 max(perfil.score) AS Pontos, 
			 sum(perfil.tentativas)  AS Tentativas
		     from perfil join usuario
		     on fkUsuario = idUsuario
		     group by perfil.nickname;
      
      truncate table perfil;
      select * from perfil;
      
      
      SELECT usuario.nickname  AS Nickname,
      max(ranking.score) AS Pontos, 
      sum(ranking.tentativas)  AS Tentativas
        From ranking join usuario
        on ranking.fkUsuario = usuario.idUsuario
      WHERE ranking.fkUsuario = 8;
      
	select usuario.nickname  AS Nickname,
    ranking.tentativas AS Tentativas,
    ranking.score AS Pontos
    from ranking join usuario 
    on ranking.fkUsuario = usuario.idUsuario
    where usuario.idUsuario = 8;
    
    
      
    
    
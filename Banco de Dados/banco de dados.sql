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
acertos int,
dtRanking datetime default current_timestamp
);

drop table ranking;
    
insert into usuario values 
	(null, 'Victor', 'Vitin', 'vitin@hotmail.com', '1234'),
	(null, 'Thiago', 'Tigas', 'tigas@hotmail.com', '1234'),
    (null, 'Vitor', 'Hugo', 'hugo@hotmail.com', '1234'),
    (null, 'Guto', 'Gutin', 'gutin@hotmail.com', '1234'),
	(null, 'Carmona', 'carminha', 'carminhan@hotmail.com', '1234'),
    (null, 'Jose', 'ze', 'jose@hotmail.com', '1234');

insert into ranking values 
	(1, '1', '1', '115', '3', current_timestamp),
	(2, '2', '1', 76, '2', current_timestamp),
	(3, '3', '1', '115', '3', current_timestamp),
	(4, '4', '1', '115', '3', current_timestamp),
	(5, '5', '1', '55', '1', current_timestamp);
    

update ranking set Tentativas = 1 WHERE fkUsuario = 1;

select * from ranking;
select * from usuario;

update usuario set email = 'paulinho@hotmail.com' where idUsuario = 5;
    
    -- SELECT RANKING
SELECT usuario.nickname AS Nickname,
      sum(ranking.tentativas) AS Tentativas,
      max(ranking.score) AS Pontos,
      max(ranking.acertos) AS Acertos
      FROM usuario JOIN ranking
      on ranking.fkUsuario = usuario.idUsuario
      group by Nickname;		
      
      
      -- SELECT PERFIL
	select usuario.nickname  AS Nickname,
    ranking.tentativas AS Tentativas,
    ranking.score AS Pontos,
    ranking.dtranking AS Horario
    from ranking join usuario 
    on ranking.fkUsuario = usuario.idUsuario;
    
    select usuario.nickname  AS Nickname,
      count(ranking.tentativas) AS Tentativas,
      max(ranking.score) AS Pontos,
	  max(ranking.dtranking) AS Horario
      from ranking join usuario 
      on ranking.fkUsuario = usuario.idUsuario
      where usuario.idUsuario = 1
      order by Horario;
    

    
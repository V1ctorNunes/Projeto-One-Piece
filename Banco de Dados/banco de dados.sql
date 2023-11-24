create database projeto_individual;
use projeto_individual;

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

select * from usuario;

select idUsuario from usuario;

truncate table usuario;
delete from usuario where idusuario = 1;
drop table ranking;
drop table usuario;

create table ranking (
idQuiz int primary key auto_increment,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
tentativas int,
score int,
acertos int
);

select * from ranking;

delete from ranking where idQuiz = 1;
delete from ranking where fkUsuario = 6;


truncate table ranking;
      
SELECT usuario.nickname AS Nickname, 
	sum(ranking.tentativas) AS Tentativas,
    ranking.score AS Pontos,
    ranking.acertos AS Acertos
	from ranking join usuario
    on ranking.fkUsuario = usuario.idUsuario
    group by usuario.nickname;
    
      
insert into usuario values 
	(null, 'Victor', 'Vitin', 'vitin@hotmail.com', '1234'),
	(null, 'Thiago', 'Tigas', 'tigas@hotmail.com', '1234'),
    (null, 'Vitor', 'Hugo', 'hugo@hotmail.com', '1234'),
    (null, 'Guto', 'Gutin', 'gutin@hotmail.com', '1234'),
	(null, 'Carmona', 'carminha', 'carminhan@hotmail.com', '1234');
    

      
insert into ranking values 
(1, '1', '3', '115', '3'),
(2, '2', '1', 76, '2'),
(3, '3', '2', '115', '3'),
(4, '4', '3', '115', '3'),
(5, '5', '1', '55', '1');

insert into ranking values 
(6, 1, '6', '120', '4');

update ranking set Tentativas = 5 where fkUsuario = 1;
create table historico_tentativas (
    idHistorico int primary key auto_increment,
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario),
    fkQuiz int unique,
    foreign key (fkQuiz) references quiz(idQuiz),
    dataTentativa datetime,
    pontuacaoObtida int
);
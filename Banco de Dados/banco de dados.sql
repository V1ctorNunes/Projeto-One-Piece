create database projeto_individual;
use projeto_individual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(100),
nickname varchar(100),
email varchar(120),
senha char(45)
);

select * from usuario;

create table ranking (
idQuiz int primary key auto_increment,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
tentativas int,
score int,
acertos int
);

select * from ranking;

SELECT usuario.nickname AS nickname, SUM(score) AS score
      FROM ranking
      JOIN usuario ON fkUsuario = idUsuario
      GROUP BY fkUsuario
      ORDER BY score DESC;
      
SELECT usuario.nickname AS Nickname, 
	ranking.tentativas AS Tentativas,
    ranking.score AS Pontos,
    ranking.acertos AS Acertos
	from ranking join usuario
    on ranking.fkUsuario = usuario.idUsuario;
      
      
insert into ranking values 
(1, '2', '3', '115', '3');

insert into ranking values 
(null, 3, 3, 115, 3);

create table historico_tentativas (
    idHistorico int primary key auto_increment,
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario),
    fkQuiz int unique,
    foreign key (fkQuiz) references quiz(idQuiz),
    dataTentativa datetime,
    pontuacaoObtida int
);
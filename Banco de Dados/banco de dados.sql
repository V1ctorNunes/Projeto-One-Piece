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

insert into ranking values 
('2', '3', '115', '3')

create table historico_tentativas (
    idHistorico int primary key auto_increment,
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario),
    fkQuiz int unique,
    foreign key (fkQuiz) references quiz(idQuiz),
    dataTentativa datetime,
    pontuacaoObtida int
);
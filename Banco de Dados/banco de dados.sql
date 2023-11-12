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

create table quiz (
idQuiz int primary key auto_increment,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
tentativas int,
score int,
acertos int
);

select * from quiz;
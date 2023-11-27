var database = require("../database/config")

function entrar(email, senha) {
console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
var instrucao = `
    SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, nickname, email, senha) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO usuario (nome, nickname, email, senha) VALUES ('${nome}', '${nickname}', '${email}', '${senha}');`;
return database.executar(instrucao);
}

function mostrar() {
    var instrucao = `
    SELECT usuario.nickname AS Nickname,
    sum(ranking.tentativas) AS Tentativas,
    max(ranking.score) AS Pontos,
    max(ranking.acertos) AS Acertos
    FROM usuario JOIN ranking
    on ranking.fkUsuario = usuario.idUsuario
    group by usuario.nickname 
    order by Pontos desc;`;

    return database.executar(instrucao);
}

function validacao() {
    var instrucao = `
    select idUsuario from usuario;`;

    return database.executar(instrucao);
}

function perfil(nickname, score, tentativas, idUsuario) {

// Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//  e na ordem de inserção dos dados.
    var instrucao = `
    insert into perfil (nickname, score, tentativas,  fkUsuario) values ('${nickname}', '${score}', '${tentativas}', '${idUsuario}');`;
    return database.executar(instrucao);
    }




module.exports = {
entrar,
cadastrar,
mostrar,
validacao,
perfil
};

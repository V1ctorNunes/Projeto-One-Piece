var database = require("../database/config")

function usuario(usuario, tentativas, score, acertos) {
    var instrucao = `
        SELECT * FROM ranking ('${usuario}', '${tentativas}', '${score}', '${acertos}');`;
    return database.executar(instrucao);
}
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function ranking(usuario, tentativas, score, acertos) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO ranking (fkUsuario, tentativas, score, acertos) VALUES ('${usuario.nickname}', '${tentativas}', '${score}', '${acertos}');`;
    return database.executar(instrucao);
}

module.exports = {
    ranking,
    usuario
};
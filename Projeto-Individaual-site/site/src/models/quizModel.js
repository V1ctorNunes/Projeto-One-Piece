var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function ranking(idusuario, tentativas, score, acertos) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO ranking (fkUsuario, tentativas, score, acertos) VALUES ('${idusuario}', '${tentativas}', '${score}', '${acertos}');`;
    return database.executar(instrucao);
}



module.exports = {
    ranking
};
var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function quiz( tentativas, score, acertos) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO quiz (tentativa, score, acertos) VALUES ('${tentativas}', '${score}', '${acertos}');`;
    return database.executar(instrucao);
}

module.exports = {
    quiz
};
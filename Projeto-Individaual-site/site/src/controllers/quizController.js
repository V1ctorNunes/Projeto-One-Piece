var quizModel = require("../models/quizModel");

function ranking(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idusuario = req.body.usuarioServer
    var tentativas = req.body.tentativasServer;
    var score = req.body.scoreServer;
    var acertos = req.body.acertosServer;

    

    // Faça as validações dos valores
    if (idusuario == undefined) {
        res.status(400).send("Seu nick está undefined!");
    } else if (tentativas == undefined) {
        res.status(400).send("Sua tentativa está undefined!");
    } else if (score == undefined) {
        res.status(400).send("Seu score está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Seus acertos está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.ranking(idusuario, tentativas, score, acertos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    ranking
}
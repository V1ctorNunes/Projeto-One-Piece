var quizModel = require("../models/quizModel");

function quiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var tentativas = req.body.tentativas;
    var score = req.body.score;
    var acertos = req.body.acertos;

    // Faça as validações dos valores
    if (tentativas == undefined) {
        res.status(400).send("Seu nick está undefined!");
    } else if (score == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(fkUsuario, tentativas, score, acertos)
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
    quiz
}
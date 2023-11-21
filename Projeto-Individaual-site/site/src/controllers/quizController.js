var quizModel = require("../models/quizModel");

function ranking(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var usuario = req.body.usuarioServer
    var tentativas = req.body.tentativasServer;
    var score = req.body.scoreServer;
    var acertos = req.body.acertosServer;
    

    // Faça as validações dos valores
    if (usuario == undefined) {
        res.status(400).send("Seu nick está undefined!");
    } else if (tentativas == undefined) {
        res.status(400).send("Sua tentativa está undefined!");
    } else if (score == undefined) {
        res.status(400).send("Seu score está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Seus acertos está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.ranking(usuario, tentativas, score, acertos)
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

function usuario(res, req) {

    quizoModel.usuario(usuario, tentativas, score, acertos)
    .then(
        function (resultado) {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

            if (resultado.length == 1) {
                console.log(resultado);
                res.json(resultado[0]);
            } else if (resultado.length == 0) {
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    ranking,
    usuario
}
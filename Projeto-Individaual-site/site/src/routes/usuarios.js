var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
var quizController = require("../controllers/quizController")

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/mostrar", function (req, res) {
    usuarioController.mostrar(req, res);
});

router.get("/validacao", function (req, res) {
    usuarioController.validacao(req, res);
});

router.post("/perfil", function (req, res) {
    usuarioController.perfil(req, res);
});

module.exports = router;
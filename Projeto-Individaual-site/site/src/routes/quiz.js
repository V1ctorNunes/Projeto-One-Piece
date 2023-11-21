var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController")

router.post("/ranking", function (req, res) {
    quizController.ranking(req, res);
});

router.post("/puxaRanking", function (req, res) {
    quizController.usuario(req, res);
});
module.exports = router;
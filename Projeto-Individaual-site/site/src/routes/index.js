var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/", function (req, res) {
    res.render("TelaQuiz.html");
});

router.get("/", function (req, res) {
    res.render("TelaLogin.html");
});

module.exports = router;
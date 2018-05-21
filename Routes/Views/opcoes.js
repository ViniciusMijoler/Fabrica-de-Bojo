var express = require('express');
var router = express.Router();

// consultar investimentos no banco
router.get('/opcoes', function (req, res) {
    res.render("./public/front/Views/opcoes.html");
});

module.exports = router;
var express = require('express');
var router = express.Router();

// consultar investimentos no banco
router.get('/cadastroCustoMateriaPrima', function (req, res) {
    res.render("./public/front/Views/cadastroCustoMateriaPrima.html");
});

router.get('/custosMateriaPrima', function (req, res){
    res.render("./public/front/Views/custosMateriaPrima.html");
});

module.exports = router;
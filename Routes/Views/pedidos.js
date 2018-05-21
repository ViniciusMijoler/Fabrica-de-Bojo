var express = require('express');
var router = express.Router();

// consultar investimentos no banco
router.get('/pedidos', function (req, res) {
    res.render("./public/front/Views/pedidos.html");
});

router.get('/cadPedido', function (req, res) {
    res.render("./public/front/Views/cadastroPedido.html");
});

module.exports = router;
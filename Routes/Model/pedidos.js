var express = require('express');
var router = express.Router();

var connection = require("../../pgConfig");

// consultar investimentos no banco
router.get('/getPedidos', (req, res) => {
	// conexão com o banco de dados
	connection.connect((err, client, done) => {
		if (err) {
			console.error(err);
			res.status(400).send(`Bad Request - ${err}`).end();
		}
		// consulta o banco de dados
		var sql = `
			SELECT id_pedido, dt_pedido, num_pedido, cor, quantidade
			  FROM tb_pedido;
		`;
		// retorna resultado
		client.query(sql, function (err, result) {
			done();
			if (err) {
				console.error(err);
				res.status(400).send(`Bad Request - ${err}`).end();
			}
			result.rows.map((element) => {element.custo = parseFloat(element.custo)});
			res.send(result.rows).end();
		});
	});
});
router.post('/inserirPedidos', (req, res) => {
	// conexão com o banco de dados
	connection.connect((err, client, done) => {
		if (err) {
			console.error(err);
			res.status(400).send(`Bad Request - ${err}`).end();
		}
		// consulta o banco de dados
		console.log(req.body.dt_pedido.toString());
		var sql = `
			INSERT INTO tb_pedido (dt_pedido, num_pedido, cor, quantidade)
			VALUES ('${req.body.dt_pedido}', ${req.body.num_pedido}, '${req.body.cor}', ${req.body.quantidade});
		`;
		// retorna resultado
		client.query(sql, function (err, result) {
			done();
			if (err) {
				console.error(err);
				res.status(400).send(`Bad Request - ${err}`).end();
			}
			res.status(200).end();
		});
	});
});
router.put('/atualizarPedido/', (req, res) => {
	// conexão com o banco de dados
	connection.connect((err, client, done) => {
		if (err) {
			console.error(err);
			res.status(400).send(`Bad Request - ${err}`).end();
		}
		// consulta o banco de dados
		var sql = `
			UPDATE tb_pedidos 
			   SET dt_pedido = ${req.body.dt_pedido}, 
				   num_pedido = ${req.body.num_pedido}, 
				   cor = ${req.body.cor}, 
				   quantidade = ${req.body.quantidade}
			 WHERE id_pedido = ${req.body.id_pedido}
		`;
		// retorna resultado
		client.query(sql, function (err, result) {
			done();
			if (err) {
				console.error(err);
				res.status(400).send(`Bad Request - ${err}`).end();
			}
			res.status(200);
		});
	});
});
router.delete('/excluirPedido/:id_pedido', (req, res) => {
	// conexão com o banco de dados
	connection.connect((err, client, done) => {
		if (err) {
			console.error(err);
			res.status(400).send(`Bad Request - ${err}`).end();
		}
		// consulta o banco de dados
		var sql = `
			DELETE FROM tb_pedido
			 WHERE id_pedido = ${req.params.id_pedido};
		`;
		// retorna resultado
		client.query(sql, function (err, result) {
			done();
			if (err) {
				console.error(err);
				res.status(400).send(`Bad Request - ${err}`).end();
			}
			res.status(200).end();
		});
	});
});

module.exports = router;
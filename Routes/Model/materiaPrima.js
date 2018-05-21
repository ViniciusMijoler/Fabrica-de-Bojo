var express = require('express');
var router = express.Router();

var connection = require("../../pgConfig");

// consultar investimentos no banco
router.get('/getMateriaPrima', (req, res) => {
	// conexão com o banco de dados
	connection.connect((err, client, done) => {
		if (err) {
			console.error(err);
			res.status(400).send(`Bad Request - ${err}`).end();
		}
		// consulta o banco de dados
		var sql = `SELECT id_mp, nome, custo
				     FROM tb_custo_materia_prima;`;
		// retorna resultado
		client.query(sql, function (err, result) {
			done();
			if (err) {
				console.error(err);
				res.status(400).send(`Bad Request - ${err}`).end();
			}
			result.rows.map((element) => {element.custo = parseFloat(element.custo)});
			res.json(result.rows).end();
		});
	});
});
router.put('/putMateriaPrima', (req, res) => {
	// conexão com o banco de dados
	connection.connect((err, client, done) => {
		if (err) {
			console.error(err);
			res.status(400).send(`Bad Request - ${err}`).end();
		}
		// consulta o banco de dados
		var sql = "";
		
		req.body.forEach(element => {
			sql += `UPDATE tb_custo_materia_prima
					   SET custo = ${element.custo}
					 WHERE id_mp = ${element.id_mp};`;
		});
		// retorna resultado
		client.query(sql, function (err, result) {
			done();
			if (err) {
				console.error(err);
				res.status(400).send(`Bad Request - ${err}`).end();
			}
			res.status(200).end();;
		});
	});
});

router.get('/custoMateriaPrima', (req, res) => {
	// conexão com o banco de dados
	connection.connect((err, client, done) => {
		if (err) {
			console.error(err);
			res.status(400).send(`Bad Request - ${err}`).end();
		}
		// consulta o banco de dados
		var sql = `
			  SELECT COR,
				 TOTAL, 
				 TOTAL_PLACAS, 
				 TOTAL_PLACAS*1.2 AS ESPUMA, 
				 TOTAL_PLACAS*0.4 AS TECIDO, 
				 ROUND(TOTAL_PLACAS*1.2 * (SELECT CUSTO FROM TB_CUSTO_MATERIA_PRIMA WHERE NOME LIKE 'Espuma'), 2) AS CUSTO_ESPUMA,
				 ROUND(TOTAL_PLACAS*0.4 * (SELECT CUSTO FROM TB_CUSTO_MATERIA_PRIMA WHERE NOME LIKE 'Tecido'), 2) AS CUSTO_TECIDO
			    FROM (
						SELECT COR, TOTAL, ROUND(((TOTAL_MARGEM - MOD(TOTAL_MARGEM, 8)) / 8 + 1), 0) AS TOTAL_PLACAS
						  FROM (
								  SELECT COR, TOTAL, (TOTAL*1.1) AS TOTAL_MARGEM
								    FROM (
									       SELECT COR, SUM(CAST(QUANTIDADE AS NUMERIC)) AS TOTAL
									         FROM TB_PEDIDO
									        GROUP BY COR
								    ) AS PEDIDO
						  ) AS PLACAS
				) AS CUSTO 
			   ORDER BY COR;
			`;

		// retorna resultado
		client.query(sql, function (err, result) {
			done();
			if (err) {
				console.error(err);
				res.status(400).send(`Bad Request - ${err}`).end();
			}
			res.json(result.rows).end();;
		});
	});
});

module.exports = router;
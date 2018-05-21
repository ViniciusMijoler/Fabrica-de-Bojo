var pg = require('pg');

// configuração para conexão com o banco
var connPostgreSQL = {
	user: "postgres",
	database: "Fabrica_bojo",
	password: "99710688",
	port: 5432,
	max: 10,
	idleTimeoutMills: 30000
};

var connection = new pg.Pool(connPostgreSQL);

module.exports = connection;

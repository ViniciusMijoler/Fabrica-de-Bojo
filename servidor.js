var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express()

app.use(cors());

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname);
app.set('view engine', 'html');

// todo caminho chamado nos arquivo HTML é verificado na pasta public
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// rotas - API
app.use('/api', require('./Routes/Model/materiaPrima'));
app.use('/api', require('./Routes/Model/pedidos'));
// rotas - View
app.use('/sisMRP', require('./Routes/Views/opcoes'));
app.use('/sisMRP', require('./Routes/Views/materiaPrimaView'));
app.use('/sisMRP', require('./Routes/Views/pedidos'));

app.get('/', function (req, res){
	res.render('index.html');
});

app.listen(3000, () => {
	console.log("Server listening on http://localhost:3000.");
});
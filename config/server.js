/* Importação o modulo do framework express */
var express = require('express');

/* Importação o modulo do consign */
var consign = require('consign');

/* Importação o modulo do body-parser */
var bodyParser = require('body-parser');

/* Importação o modulo do express-validator */
var expressValidator = require('express-validator');

/* Inicia o objeto do express */
var app = express();

/* setar as variaveis 'view engine' e 'views' do express */
app.set('view engine','ejs');
app.set('views','./app/views');

/* Configuráção dos middleware */
/* express.static */
app.use(express.static('./app/public'));

/* express.static */
app.use(bodyParser.urlencoded({extended : true}));

/* express.expressValidator */
app.use(expressValidator());

/* Efetua o autoload das rotas, dos models e dos controllers para o objeto */
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

/* Exportação do objeto app */
module.exports = app;
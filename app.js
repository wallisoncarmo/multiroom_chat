/* Importação das configurações do servidor */
var  app = require('./config/server');

/* Parametrização para a porta de escuta */
app.listen(80, function (){
	console.log('Servidor OK');
});
/* Importação das configurações do servidor */
var  app = require('./config/server');

/* Parametrização para a porta de escuta */
var server = app.listen(80, function (){
	console.log('Servidor OK');
});

/* chama do websocket */
var io = require('socket.io').listen(server);

app.set('io',io);

/* criar conexão para o websocket */
io.on('connection', function(socket){
	console.log('Usuário conectou');

	socket.on('disconnect', function(socket){
		console.log('Usuário desconectou');
	});

	socket.on('disconnect', function(socket){
		console.log('Usuário desconectou');
	});


});
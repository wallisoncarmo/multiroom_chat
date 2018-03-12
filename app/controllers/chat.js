module.exports.iniciaChat = function(application, req,res){

	var form = req.body;

	req.assert('apelido','Nome ou apelido é obrigatório!').notEmpty();
	req.assert('apelido','Nome ou apelido deve conter de 3 a 5 caracter!').len(3,15);

	var erros = req.validationErrors();

	if(erros){
		res.render('index',{validacao : erros});
		return;
	}

	application.get('io')
	.emit(
		'msgParaCliente',
		 { apelido: form.apelido, mensagem: " acabou de entrar no chat" }
		);

	res.render('chat');
}
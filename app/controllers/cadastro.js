module.exports.cadastro = function (application, req, res){
    res.render('cadastro', {erros: {}, dadosCadastro: {}});
}

module.exports.cadastrar = function (application, req, res){
    var dadosCadastro = req.body;

    req.assert('nome', 'Nome não pode ser vazio.').notEmpty();
    req.assert('usuario', 'Nome de usuário não pode ser vazio.').notEmpty();
    req.assert('passwd', 'Nome não pode ser vazio.').notEmpty();
    req.assert('casa', 'Você precisa escolher uma casa para jogar.').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('cadastro', {erros: erros, dadosCadastro: dadosCadastro});
        return;
    }

    res.send('Dados válidos')
}
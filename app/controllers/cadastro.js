module.exports.cadastro = function (application, req, res){
    res.render('cadastro', {erros: {}, dadosCadastro: {}});
}

module.exports.cadastrar = function (application, req, res){
    let dadosCadastro = req.body;
    let usuariosDAO = require('../models/usuariosDAO');

    req.assert('nome', 'Nome não pode ser vazio.').notEmpty();
    req.assert('usuario', 'Nome de usuário não pode ser vazio.').notEmpty();
    req.assert('passwd', 'Nome não pode ser vazio.').notEmpty();
    req.assert('casa', 'Você precisa escolher uma casa para jogar.').notEmpty();

    let erros = req.validationErrors();

    if(erros){
        res.render('cadastro', {erros: erros, dadosCadastro: dadosCadastro});
        return;
    }
    usuariosDAO.inserirUsuario(dadosCadastro)
    .then(()=>{
        res.send('Usuário cadastrado')
    })
    .catch((err) =>{
        console.error(`Erro ao inserir na base de dados de usuários ${err}`)
    });

    
}
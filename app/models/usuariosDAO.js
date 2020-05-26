let db = require('../../config/dbConnection');
let ObjectID = require('mongodb').ObjectID;

class usuariosDAO {
    static inserirUsuario(usuario) {
        return new Promise(function (resolve, reject) {
            let usuarios = db.get().collection('usuarios');
            usuarios.insert(usuario, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response);
                }
            });
        })
    }
}

module.exports = usuariosDAO;
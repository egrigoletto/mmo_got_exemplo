/* importar as configurações do servidor */
var app = require('./config/server');
var db = require('./config/dbConnection')


db.connect(function (err) {
	if (err) {
		console.error('Erro ao conectar no mongoDB');
		process.exit(1);
	} else {
		console.log('MongoDB Conectado');
		/* parametrizar a porta de escuta */
		app.listen(80, function () {
			console.log('Servidor online');
		})
	}
});
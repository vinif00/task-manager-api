// Esse arquivo só serve pra se conectar  com a database, os modelos do mongoose ficarão em arquivos separados na pasta models
const mongoose = require("mongoose");

// Ligar a database com esse comando:
// /Users/vinic/mongodb/bin/mongod.exe --dbpath=/Users/vinic/mongodb-data

// conecta o código com a database
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

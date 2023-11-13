const express = require('express');
const app = express();
const articlesController = require('./controllers/articles/ArticlesController');

const db = require('./database/db');

db
  .authenticate()
  .then(() => console.log('conexão realizada'))
  .catch((err) => console.log('ERROR_INTO_DATABASE_CONECTION: ' + err))

app.use('/', articlesController);

app.get('/', (req, res) => {
  res.send('working');
})

app.listen(3001, () => console.log('server working port 3001'))
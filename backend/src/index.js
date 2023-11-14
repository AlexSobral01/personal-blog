const express = require('express');
const app = express();
const router = require('./routes/routes');
const cors = require('cors');

const db = require('./database/db');
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

db
  .authenticate()
  .then(() => console.log('conexão realizada'))
  .catch((err) => console.log('ERROR_INTO_DATABASE_CONECTION: ' + err))

app.use('/', router);


app.listen(3001, () => console.log('server working port 3001'))
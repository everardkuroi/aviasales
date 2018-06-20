const pg = require('pg');
const express = require('express');
const port = 3000;
// const connectionString = 'postgres://localhost:5432/';

// const client = new pg.Client(connectionString);
const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'users',
  password: '4321',
  port: 5432,
});
client.connect();
const query = client.query('SELECT NOW()', (err, res) => {
  console.log(err);
  client.end();
});

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', (req, res) => {
  console.log(req.headers['cookie']);
  console.log(req.body);
  res.send(JSON.stringify('Hello world'));
});

app.listen(port, () => console.log('listening on port ' + port));
const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;


const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static('./dist'));
app.use(bodyParser.json());


app.post('/userId', (req, res, next) => {
  if (req.body.userId) {
    // поиск данных по id
    client.query(`SELECT * FROM public."usersData" WHERE id IN ('${req.body.userId}')`, (err, resp) => {
      res.send(JSON.stringify(resp.rows[0]));
    });
  } else {
    // проверка на наличие id и присвоение оного, если искомый отсутствует
    const id = genId();
    res.send({id});
    client.query(`INSERT INTO public."usersData" (id, shared, email) VALUES ('${id}', false, '')`);
  }
});

app.post('/shared', (req, res, next) => {
  client.query(`UPDATE public."usersData" SET shared = true WHERE id = '${req.body.userId}'`, (err, resp) => {
    res.end();
  });
});

app.post('/email', (req, res, next) => {
  client.query(`UPDATE public."usersData" SET email = '${req.body.email}' WHERE id = '${req.body.userId}'`, (err, resp) => {
    res.end();
  });
});

app.listen(port, () => console.log('listening on port ' + port));


// генератор id
const genId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// подключение к базе
const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'users',
  password: '4321',
  port: 5432,
});

client.connect();
const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;


const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static('./dist'));
app.use(bodyParser.json());


app.post('/userId', (req, res, next) => {
  console.log(req.body.userId)
  if (req.body.userId) {
    console.log('1')
    client.query(`SELECT * FROM public."usersData" WHERE id IN ('${req.body.userId}')`, (err, resp) => {
      console.log(resp.rows[0]);
      res.send(JSON.stringify(resp.rows[0]));
    });
  } else {
    console.log('2');
    const userId = genId();
    res.send({userId});
    client.query(`INSERT INTO public."usersData" (id, shared, email) VALUES ('${userId}', false, '')`);
  }
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
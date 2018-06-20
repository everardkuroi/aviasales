const pg = require('pg');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const port = 3000;

const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   return next();
// });

// app.use(cookieParser());
// app.use(session({
//   secret: 'Aviasales',
//   resave: true,
//   saveUninitialized: true,
//   cookie: {httpOnly: false, secure: true},
//   genid: function (req) {
//     return genId();
//   }
// }));
// app.use(express.static('./dist'));

// проверка id
app.post('/',  (req, res, next) => {
  res.cookie('name', 'Evgen');
  res.send('text');
  res.end();
});

app.listen(port, () => console.log('listening on port ' + port));


// генератор id
const genId = () => {
  return Math.random().toString(36).substr(2, 9);
};













// const connectionString = 'postgres://localhost:5432/';

// const client = new pg.Client(connectionString);
// const client = new pg.Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'users',
//   password: '4321',
//   port: 5432,
// });
//
// client.connect();
// const query = client.query('SELECT NOW()', (err, res) => {
//   // console.log(err);
//   client.end();
// });
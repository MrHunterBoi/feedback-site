const express = require('express');
const db = require('./api/api')

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/', async (req, res) => {
  const result = await db.addToDb(req.body);
  res.status(201).json({result});
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
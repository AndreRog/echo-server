'use strict'

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text({ type: 'text/*' }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send(req.body.message);
})

app.listen(port, () => {
  console.log(`Echo server listening at http://localhost:${port}`)
})
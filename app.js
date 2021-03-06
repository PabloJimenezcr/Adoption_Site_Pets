const express = require('express');
const path = require('path');
const mongodb = require('./database/mongodbUtils.js');
const app = express();
const port = 3000;


// Importando mi home js
const home = require('./routes/home.js');
const pets = require('./routes/pets.js');

// ayuda a buscar archivos estaticos
app.use(express.static('public'));
// el parse lee los datos
app.use(express.urlencoded({ extended: true }));


mongodb.connect(err => {
  if (err) console.error(err);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/home.html'));
});

// cada vez que alguien llame a /pets se le envie lo que esta en el modulo pets
app.use('/home', home);
app.use('/pets', pets);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
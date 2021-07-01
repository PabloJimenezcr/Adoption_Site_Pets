const express = require('express');
const app = express();
const port = 3000;


// Importando mi home js
const home = require('./routes/home.js');
const pets = require('./routes/pets.js');

// ayuda a buscar archivos estaticos
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// cada vez que alguien llame a /pets se le envie lo que esta en el modulo pets
app.use('/home', home);
app.use('/pets', pets);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

const Pet = require('../models/pet.js');

let pets = [
    new Pet('Rocket', 2, 'dog', 'Golden Retriever', '/dogs/rocket.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus pulvinar eros non euismod. Aliquam egestas felis ac semper vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'),
    new Pet('Sigmund', 1, 'dog', 'Cairn Terrier', '/dogs/sigmund.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus pulvinar eros non euismod. Aliquam egestas felis ac semper vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'),
    new Pet('Pluto', 3, 'dog', ' Collie', '/dogs/pluto.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus pulvinar eros non euismod. Aliquam egestas felis ac semper vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'),
    new Pet('Phoenix', 3, 'dog', ' Labradoodle', '/dogs/phoenix.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus pulvinar eros non euismod. Aliquam egestas felis ac semper vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'),
    new Pet('Kelso', 1, 'dog', 'Shih Tzu', '/dogs/kelso.webp', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus pulvinar eros non euismod. Aliquam egestas felis ac semper vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'),
];

router.get('/', function (req, res) {

    // ?? nulish = si esto es nulo asigne el 1 
    const page = req.query.page ?? 1;
    const limit = req.query.limit ?? 3;

    // aca me da de 0 a 8
    let paginatedResults = pets.slice(page - 1 * limit, page * limit);

    res.json(paginatedResults);
});

router.post('/', function (req, res) {
    const name = req.body.name;
    const age = req.body.age;
    const especies = req.body.especies;
    const race = req.body.race;
    const picture = req.body.picture;
    const description = req.body.description;

    const pet = new Pet(name, age, especies, race, picture, description);
    pets.push(pet);

    res.sendStatus(200);

});

router.get('/:name', function(req, res){
    const name = req.params.name;

    // find, busca cuando la mascota tenga el mismo nombre y si pasa lo retorna 
    const pet = pets.find(pet => pet.name === name)
        res.json(pet);
});

router.delete('/:name', function(req, res){
    const name = req.params.name;

    // filter es para filtrar 
    pets = pets.filter(pet => pet.name !== name);
    res.sendStatus(200);
});

module.exports = router;
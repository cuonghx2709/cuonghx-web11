const express = require('express');
const Rounter = express.Router();
const fileController = require('../filecontroller');


Rounter.get('/', (req, res) => {

    let question = [...fileController.readFile('./data.json')];
    let id = Math.floor(Math.random()* question.length);

    res.render('home', {
        question : question[id],
        id : id +1
    });
});
module.exports = Rounter;
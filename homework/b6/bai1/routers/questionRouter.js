const express = require('express');
const Router = express.Router();
const fileController = require('../filecontroller.js');

Router.get('/:id', (req, res) => {
    let id = req.params.id;
    let data = [...fileController.readFile('./data.json')];
    let question = data[id - 1];

    res.render('question', {
        question: question.question,
        vote: question.yes + question.no,
        yes: "Có " + question.yes,
        no: "Không " + question.no
    });
});

module.exports = Router;

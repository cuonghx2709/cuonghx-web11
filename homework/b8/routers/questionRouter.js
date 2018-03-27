const express = require('express');
const Router = express.Router();
const questionController = require('../controllers/questionController');

Router.post('/', (req, res) => {
    let id = req.body.id;
    questionController.findbyID(id, (doc) => {
        res.send(doc);
    });
});



Router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.render('question', {
        id: id
    });
});

module.exports = Router;

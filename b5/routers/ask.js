const express = require('express');
const Router = express.Router();
const questionController = require('../controllers/questionController');

Router.get('/', (req, res) => {
    res.render('ask');
});

Router.post('/', (req, res) => {
    questionController.create(req.body.question);
});

module.exports = Router;
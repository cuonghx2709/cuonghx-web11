const express = require('express');
const Router = express.Router();
const questionController = require('../controllers/questionController');

Router.get('/:id', (req, res) => {
    let id = req.params.id;

    questionController.findbyID(id, (doc) => {
        let sum = doc.yes + doc.no;
        let left = doc.no / sum * 100;

        if (sum == 0) {
            left = 50;
        }
        let right = 100 - left;

        res.render('question', {
            question: doc.question,
            vote: doc.yes + doc.no,
            yes:  right.toFixed(2) + "%",
            no: left.toFixed(2) + "%",
            left : left + '%',
            right: right +'%'
        });
    });

});

module.exports = Router;

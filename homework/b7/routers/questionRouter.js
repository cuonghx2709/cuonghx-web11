const express = require('express');
const Router = express.Router();
const questionController = require('../controllers/questionController');

Router.get('/:id', (req, res) => {
    let id = req.params.id;

    questionController.findbyID(id, (doc) => {
        let left = (doc.no) / (doc.yes + doc.no) * 100;

        if (doc.no == 0) {
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

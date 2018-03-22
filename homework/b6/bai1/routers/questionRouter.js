const express = require('express');
const Router = express.Router();
const fileController = require('../filecontroller.js');

Router.get('/:id', (req, res) => {
    let id = req.params.id;
    let data = [...fileController.readFile('./data.json')];
    let question = data[id - 1];

    
    let left = (question.no) / (question.yes + question.no) * 100;
   
    if(question.no == 0){
        left = 50;
    }
    let right = 100 - left;

    console.log(left);
    res.render('question', {
        question: question.question,
        vote: question.yes + question.no,
        yes: "Có " + question.yes,
        no: "Không " + question.no,
        left : left + '%',
        right: right +'%'
    });
});

module.exports = Router;

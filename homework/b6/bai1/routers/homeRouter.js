const express = require('express');
const Router = express.Router();
const fileController = require('../filecontroller.js');

Router.get('/', (req, res) => {
    let data = [...fileController.readFile('./data.json')];
    let randomNumber = Math.floor(Math.random() * data.length);

    let question;
    if (data.length == 0) {
        question = "Ahihi .... nhập câu hỏi!";
    } else {
        question = data[randomNumber].question;
    }


    if (data.length == 0) {
        res.render('home1', {question : question});
    } else {
        res.render('home', {
            question: question,
            id: randomNumber + 1
        });
    }
});

module.exports = Router;
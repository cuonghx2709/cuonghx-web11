const express = require('express');
const Router = express.Router();
const fileController = require('../filecontroller.js');

Router.get('/', (req, res) => {
    res.render('ask');
});

Router.post('/', (req, res) => {
    let data = [...fileController.readFile('./data.json')];
    let id = data.length + 1;
    let newQuestion = {
        id,
        question: req.body.question,
        yes: 0,
        no: 0
    }

    data.push(newQuestion);

    fileController.writeFile('./data.json', data, (err) => {
        if (err) console.log(err)
        res.redirect('/question/' + id);
    });
});
module.exports = Router;

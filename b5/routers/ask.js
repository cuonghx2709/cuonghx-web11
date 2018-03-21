const express = require('express');
const Router = express.Router();
const fileController = require('../filecontroller');

Router.get('/', (req, res) => {
    res.render('ask');
});

Router.post('/', (req, res) => {

    let data = [ ...fileController.readFile('./data.json')];
    let id = data.length + 1;
    let newQ = {
        id: data.length + 1,
        question : req.body.question,
        yes : 0,
        no : 0
    };
    data.push(newQ);
    fileController.writeFile('./data.json', data, (err) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('/question/' + id);
        }
    });
});

module.exports = Router;
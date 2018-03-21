const express = require('express');
const Router = express.Router();
const fileController = require('../filecontroller');

Router.post('/:id', (req, res) => {
    let questionList = [...fileController.readFile('./data.json')];

    if(req.body.answer == 'yes'){
        questionList[req.params.id - 1].yes += 1;
    }else {
        questionList[req.params.id - 1].no += 1;
    };

    fileController.writeFile('./data.json', questionList, (err) =>{
        if(err) console.log(err);
        res.redirect('/question/'+ req.params.id);
    });

});
module.exports = Router;


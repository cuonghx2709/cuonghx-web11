const express = require('express');
const Router = express.Router();
const fileController = require('../controllers/filecontroller');
const questionController = require('../controllers/questionController');

Router.get('/', (req, res) => {
    res.render('ask',  {
        quickask: 'active'
    });
});

Router.post('/', (req, res) => {
    if(req.body.question.length == 0){
        res.redirect('/ask');
    }else{
        questionController.creat(req.body.question, (doc) =>{
            res.redirect('/question/'+ doc._id);
        });
    }
    
});
module.exports = Router;

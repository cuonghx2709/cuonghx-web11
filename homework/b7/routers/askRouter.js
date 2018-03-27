const express = require('express');
const Router = express.Router();
const fileController = require('../controllers/filecontroller');
const questionController = require('../controllers/questionController');

Router.get('/', (req, res) => {
    res.render('ask',  {
        quickask: 'active'
    });
});
Router.post('/createquestion',(req, res) =>{
    console.log(req.body.question);
    res.redirect('/question/'+ doc._id);
});
Router.post('/', (req, res) => {
    console.log(req.body.question);

    questionController.creat(req.body.question, (doc) =>{
        res.redirect('/question/'+ doc._id);
    });
    // if(req.body.question.length == 0){
    //     // res.redirect('/ask');
    // }else{
    //     questionController.creat(req.body.question, (doc) =>{
    //         res.redirect('/question/'+ doc._id);
    //     });
    // }
    
});
module.exports = Router;

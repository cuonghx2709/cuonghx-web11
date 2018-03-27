const express = require('express');
const Router = express.Router();
const questionController = require('../controllers/questionController');

Router.get('/', (req, res) => {

    res.render('home');
});

Router.get('/randomquestion', (req, res)=>{
    questionController.findAll((docs)=>{
        let randomNumber = Math.floor(Math.random()*docs.length);
        res.send(docs[randomNumber]);
        // if (docs.length == 0) {
        //     question = "Ahihi .... nhập câu hỏi!";
        // } else {
        //     question = docs[randomNumber].question;
        // }
    
    
        // if (docs.length == 0) {
        //     res.render('home1', {question : question});
        // } else {
        //     res.render('home', {
        //         question: question,
        //         id: docs[randomNumber]._id,
        //         home :'active'
        //     });
        // }
    });
});

module.exports = Router;
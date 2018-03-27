const express = require('express');
const Router = express.Router();
const questionController = require('../controllers/questionController');

Router.get('/yes/:id', (req, res) => {
    let id = req.params.id;
    questionController.updateYesNo(true, id, (err) =>{
        if(err) console.log(err);
        console.log("success!");
        res.redirect('/question/' + id);
    });
});
Router.get('/no/:id', (req, res) => {
    let id = req.params.id;
    questionController.updateYesNo(false, id, (err) =>{
        if(err) console.log(err);
        console.log("success!");
        res.redirect('/question/' + id);
    });
});
 module.exports = Router;
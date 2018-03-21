const express = require('express');
const Router = express.Router();
const fileController = require('../filecontroller.js');

Router.get('/yes/:id', (req, res) => {
    let data = [...fileController.readFile('./data.json')];
    let id = req.params.id;
    data[id - 1].yes += 1;
    fileController.writeFile('./data.json', data, (err) => {
        if (err) console.log(err)

        res.redirect('/question/' + id);
    });
});
Router.get('/no/:id', (req, res) => {
    let data = [...fileController.readFile('./data.json')];
    let id = req.params.id;
    data[id - 1].no += 1;
    fileController.writeFile('./data.json', data, (err) => {
        if (err) console.log(err)
        res.redirect('/question/' + id);
    });
});
 module.exports = Router;
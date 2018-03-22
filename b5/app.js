const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const homeRouter = require('./routers/home.js');
const askRouter = require('./routers/ask.js');
const answerRouter = require('./routers/answer.js');
const mongoose = require('mongoose');
const fileController = require('./controllers/filecontroller');


// home6

let app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.engine('handlebars', handlebar({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', homeRouter);
app.use('/ask', askRouter);
app.use('/answer', answerRouter);



app.get('/question/:id', (req, res) => {
    let id = req.params.id;
    let data = [ ...fileController.readFile('./data.json')];
    let question = data[id - 1];

    res.render('question', {
        question : question.question
    });
});

mongoose.connect('mongodb://localhost/mongodb', (err) =>{
    if(err) console.log(err);
    console.log("Database connect success!");
});

app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }else {
        console.log("app is starting at port 3000");
    }
});

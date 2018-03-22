const express = require('express');
const expressHandler = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const homeRouter = require('./routers/homeRouter.js');
const answerRouter = require('./routers/answerRouter.js');
const questionRouter = require('./routers/questionRouter.js');
const askRouter = require('./routers/askRouter.js');

var app = express();

app.engine('handlebars', expressHandler({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/question', (err) =>{
    if(err) console.log(err);
    console.log(" Database connect success!");
});

app.use('/', homeRouter);
app.use('/submit', answerRouter);
app.use('/ask', askRouter);
app.use('/question', questionRouter);

app.use(express.static('public'));


app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log('App is starting at port 3000');
});
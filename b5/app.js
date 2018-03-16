const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const fileController = require('./filecontroller');

let app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.engine('handlebars', handlebar({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
    res.render('home', {
        number :{
            a: Math.floor(Math.random() * 2000 - 1000),
        },
        htmlData: '<h2> Render HTML</h2>'
    });
});

app.get('/ask', (req, res) => {
    res.render('ask');
});

app.post('/ask', (req, res) => {

    let data = [ ...fileController.readFile('./data.json')];
    let id = data.length + 1;
    let newQ = {
        id: data.length + 1,
        question : req.body.question
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


app.get('/question/:id', (req, res) => {
    let id = req.params.id;
    let data = [ ...fileController.readFile('./data.json')];
    let question = data[id - 1];

    res.render('question', {
        question : question.question
    })
});


app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }else {
        console.log("app is starting at port 3000");
    }
});

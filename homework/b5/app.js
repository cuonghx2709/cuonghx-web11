const express = require('express');
const expressHandler = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const fileController = require('./filecontroller');

var app = express();

app.engine('handlebars', expressHandler({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    let data = [...fileController.readFile('./data.json')];
    let randomNumber = Math.floor(Math.random() * data.length);

    let question;
    if (data.length == 0) {
        question = "Ahihi .... nhập câu hỏi!";
    } else {
        question = data[randomNumber].question;
    }


    if (data.length == 0) {
        res.render('home1', {question : question});
    } else {
        res.render('home', {
            question: question,
            id: randomNumber + 1
        });
    }
});

app.get('/ask', (req, res) => {
    res.render('ask');
});

app.post('/ask', (req, res) => {
    let data = [...fileController.readFile('./data.json')];
    let id = data.length + 1;
    let newQuestion = {
        id,
        question: req.body.question,
        yes: 0,
        no: 0
    }

    data.push(newQuestion);

    fileController.writeFile('./data.json', data, (err) => {
        if (err) console.log(err)
        res.redirect('/question/' + id);
    });
});

app.get('/submit/yes/:id', (req, res) => {
    let data = [...fileController.readFile('./data.json')];
    let id = req.params.id;
    data[id - 1].yes += 1;
    fileController.writeFile('./data.json', data, (err) => {
        if (err) console.log(err)

        res.redirect('../../question/' + id);
    });
});
app.get('/submit/no/:id', (req, res) => {
    let data = [...fileController.readFile('./data.json')];
    let id = req.params.id;
    data[id - 1].no += 1;
    fileController.writeFile('./data.json', data, (err) => {
        if (err) console.log(err)
        res.redirect('../../question/' + id);
    });
});


app.get('/question/:id', (req, res) => {
    let id = req.params.id;
    let data = [...fileController.readFile('./data.json')];
    let question = data[id - 1];

    res.render('question', {
        question: question.question,
        vote: question.yes + question.no,
        yes: "Có " + question.yes,
        no: "Không " + question.no
    });
});

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static('views/layouts'));


app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log('App is starting at port 3000');
});
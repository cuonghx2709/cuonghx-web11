const express = require('express');
const path = require('path');

let app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/profile.html'));
});

app.get('/frontendpractice', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/helloworld.html'));
});

app.get('/flexbox', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './public/index1.html'));
});

app.listen(3000, (err)=> {
    if(err) {
        console.log(err);
    }else{
        console.log('App is starting at port 3000');
    }
})
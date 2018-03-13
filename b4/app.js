// const fs = require('fs');

// // fs.readFile

// // let datafrom = fs.readFileSync('./package.json', {encoding: 'utf-8'});

// // console.log(datafrom);




// let dataWrite = {
//     a: "cuonghx" ,
//     b: 5
// };
// fs.writeFile('test.txt', JSON.stringify( dataWrite), (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("write file success");
//     }
// });

// fs.readFile('./test.txt','utf8', (err, data) => {
//     if(err){
//         console.log(err);
//     }else{
//         // let d = JSON.parse(data);
//         console.log(JSON.parse(data));
//     }
// });

// var fs = require('./fileController.js');
// console.log(fs);

// let data = fs.readFile('test.txt');
// console.log(data);


// fs.readFileWithCallBack('test.txt', (filedata) => {
//     console.log(filedata);
// });

const express = require('express');
const path = require('path');

let app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    
    // console.log(path.resolve(__dirname + '../public/index.html'));
    res.sendFile(path.resolve(__dirname , './public/index.html'));
});

// app.get('/index.css', function(req, res) {
//     res.sendFile(path.resolve(__dirname + "/public/index.css") );
// });

app.listen(5238, (err) => {
    if (err) {
        console.log(err);
    }else {
        console.log("app is starting at port 5238");
    }
});


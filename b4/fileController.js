const fs = require('fs');

let readFile = (path) =>{
    return fs.readFileSync(path, 'utf-8');
}

let writeFile = (path, writeData) => {
    fs.writeFile(path, JSON.stringify(writeData, (err) =>{
        if(err) {console.log(err)}
        console.log("success");
    }));
}

let readFileWithCallBack= (path, callback) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if(err){
            console.log(err);
        }else{
            callback(data);
        }
    });
}

module.exports = {
    readFile, 
    writeFile,
    readFileWithCallBack
};
const QuestionSchema = require('../models/questionSchema');


let creat = (question, callback)=>{
    let newQuestion = {
        question: question
    };
    QuestionSchema.create(newQuestion, (err, doc) =>{
        if(err) console.log(err);
        callback(doc);
    })
};

let findbyID = (id, callback) =>{
    QuestionSchema.findOne({"_id": id}, (err, doc) =>{
        if(err) console.log(err);
        callback(doc);
     });
};

let findAll = (callback) =>{
    QuestionSchema.find((err, docs) =>{
        if (err) return console.error(err);
        callback(docs);
    });
}
let updateYesNo = (yes, id, callback)=>{
    if(yes){
        findbyID(id, (doc) =>{
            QuestionSchema.findByIdAndUpdate(id, {yes: doc.yes + 1}, (err) =>{
                callback(err);
            });
        });
    }else{
        findbyID(id, (doc) =>{
            QuestionSchema.findByIdAndUpdate(id, {no: doc.no + 1}, (err) =>{
               callback(err);
            });
        });
    }
   
}

module.exports = {
    creat,
    findbyID,
    findAll,
    updateYesNo
};
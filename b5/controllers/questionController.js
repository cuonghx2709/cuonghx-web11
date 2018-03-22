const QuestionSchema = require('../models/questionSchema');

let create = (question) =>{
    let newQuestion = {
        question: question
    }
    QuestionSchema.create(newQuestion);
};

module.exports = {
    create
}
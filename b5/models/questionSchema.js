const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question : {type: String, require : true},
    yes : {type :Number, default: 0},
    no : {type: Number, default: 0}
},{
    timestamps: true,
    // _id : false k auto tao id
});

module.exports = mongoose.model("Question", questionSchema);


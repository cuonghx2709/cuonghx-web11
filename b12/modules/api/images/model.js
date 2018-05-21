
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comentModel = new Schema({
    createdBy : {type : Schema.Types.ObjectId, ref :"users",  required: true},
    contennt : {type: String, required: true}
}, {
    timestamps: true
})

const imageModel = new Schema({
    imageUrl: {type : String, required : true},
    title: {type : String, required: true},
    description : {type : String, default : ''},
    createdBy: {type : Schema.Types.ObjectId,ref: "users" , required : true},
    view : {type : Number , default: 0},
    like: {type: Number, default: 0},
    comment: {type: [comentModel], default: []},
    active: {type: Boolean, default: true}
}, {
    timestamps : {
        createdAt : "createdAt"
    }
})


module.exports = mongoose.model("images", imageModel)
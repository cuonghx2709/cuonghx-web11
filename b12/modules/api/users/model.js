const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const userModel = new Schema({
    avatar : {type: String, default: ' '},
    username : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    email : {type: String, default: ' ', unique: true, required: true, validate: {
        validator: function(value){
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
        },
        message: "Err form email"
    }},
    active : {type: Boolean, default: true} 
}, {
    timestamps: true
})

userModel.pre('save', function(next) {
    console.log("save")
    if(!this.isModified('password')){
        return next()
    }

    bcrypt.genSalt(12)
    .then(salt => bcrypt.hash(this.password, salt))
    .then(hash => {
        this.password = hash
        next()
    })
    .catch(err => next(err))
})

module.exports = mongoose.model('users', userModel);
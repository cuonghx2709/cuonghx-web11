const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json({urlencoded: true}))

mongoose.connect("mongodb://localhost:27017/tk-hotgirls", err =>{
    if (err) console.log(err)
    console.log("Database connet successful")
})

const port = process.env.port || 3000

app.listen(port, (err) =>{
    if (err)  console.log(err)
    console.log("Sever started at port " + port)
})


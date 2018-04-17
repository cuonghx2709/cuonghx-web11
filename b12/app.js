const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()

const imageRouter = require('./modules/api/images/route')
const userRouter = require('./modules/api/users/route')

app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/images', imageRouter)
app.use('/api/users', userRouter)

app.use('/', (req, res) => {
    res.send("OK")
})


mongoose.connect("mongodb://localhost:27017/tk-hotgirls", err =>{
    if (err) console.log(err)
    console.log("Database connet successful")
})

const port = process.env.port || 3000

app.listen(port, (err) =>{
    if (err)  console.log(err)
    console.log("Sever started at port " + port)
})


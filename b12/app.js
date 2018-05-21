
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const axios = require('axios')

const config = require('./config-local.json')



const app = express()

const imageRouter = require('./modules/api/images/route')
const userRouter = require('./modules/api/users/route')
const authRouter = require('./modules/api/auth/route')


app.use(session({
    secret: config.secret,
    resave: false, // true -> khi vao chua bi xoa se cap nhat gia han thoi gian // note: co the bi ghi de 2 cookie neu mo 2 tab
    saveUninitialized: false, // save after login \\ true -> save 
    cookie: {
        secure: config.secureCookie,
        maxAge: 12 * 60 * 60 * 1000} // khong co -> k luu
}))

app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/images', imageRouter)
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

app.use('/', (req, res) => {
    axios.get('https://api.themoviedb.org/3/movie/337167/credits?api_key=7345489e9522a18a9b84bbc90f4d7758').then(respon => {
            console.log(respon.data.id)
        })
})


mongoose.connect(config.mongoPath, err =>{
    if (err) console.log(err)
    console.log("Database connet successful")
})

const port = process.env.port || 3000

app.listen(port, (err) =>{
    if (err)  console.log(err)
    console.log("Sever started at port " + port)
})


const express = require('express')
const router = express.Router()

const authController = require('./controller')

router.post("/", (req, res) => {
    authController.login(req.body).then(userInfo => {
        req.session.userInfo = userInfo;
        res.send("logged in.")
    }).catch(err =>{
        res.status(err.status).send(err.err)
    })
})

router.delete('/', (req, res)  =>{
    req.session.destroy();
    res.send("logout")
})
module.exports = router
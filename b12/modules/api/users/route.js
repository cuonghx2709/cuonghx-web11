const express = require('express')
const router = express.Router()
const userController = require('./controller')

router.get('/', (req, res) => {
    userController.getAllUser(req.query.page || 1).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

router.post('/', (req, res) => {
    userController.createUser(req.body).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

router.get('/:idUser', (req, res) => {
    userController.getOne(req.params.idUser).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

router.delete('/:idUser', (req, res) => {
    userController.deleteUser(req.params.idUser).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

router.put('/:idUser/email', (req, res) => {
    userController.updateUserEmail(req.params.idUser, req.body.email).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

router.put('/:idUser/username', (req, res) => {
    userController.updateUserName(req.params.idUser, req.body.username).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})
router.put('/:idUser/avatar', (req, res) => {
    userController.updateUserAvatar(req.params.idUser, req.body.avatar).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})
router.put('/:idUser/password', (req, res) => {
    userController.updateUserPassword(req.params.idUser, req.body.password).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

module.exports = router
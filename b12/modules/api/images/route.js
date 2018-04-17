const express = require('express')
const router = express.Router()
const imageController = require('./controller')

router.get('/', (req, res) =>{
    imageController.getAllImage(req.query.page || 1)
    .then(image => res.send(image))
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

router.post('/', (req, res) => {

    imageController.createImage(req.body)
    .then(result => res.send(result)) // result is {id: _id}

    .catch(err => res.send(err))
})

router.get('/:id', (req, res) =>{
    imageController.getImage(req.params.id)
    .then(image => res.send(image))
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

router.post('/:imageId/comments', (req, res) =>{
    imageController.addComment(req.params.imageId, req.body)
    .then(id => res.send(id))
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

router.put('/:imageId', (req, res) => {
    imageController.updateImage(req.params.imageId, req.body).then(data => {
        res.send(data)
    }).catch(err =>{
        console.log(err)
        res.status(500).send(err)
    }) 
})

router.delete('/:imageId', (req, res) => {
    imageController.deleteImage(req.params.imageId).then(id => {
        res.send(id)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

router.delete('/:imageId/:commentId', (req, res) => {
    imageController.deleteComment(req.params.commentId, req.params.imageId).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

router.put('/:imageId/like', (req, res) =>{
    imageController.likeImage(req.params.imageId).then(data =>{
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

router.put('/:imageId/unlike', (req, res) => {
    imageController.unlikeImage(req.params.imageId).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

module.exports = router
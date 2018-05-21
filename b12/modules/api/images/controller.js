
const imageModel = require('./model')

// chi lay imageUrl, title, des, created trong 1 object truyen vao
const createImage = ({imageUrl, title, descreption, id}) => new Promise((resolve, reject) =>{
    imageModel.create({
        imageUrl,
        title,
        descreption,
        createdBy: id
    })
    .then(data => resolve({id: data._id}))
    .catch(err => reject(err)) 
})

const getAllImage = page => new Promise((resolve, reject) =>{
    imageModel.find({"active": true})
    .sort({createdAt: -1}) // -1 giam dan
    .skip((page - 1) * 20)
    .limit(20)
    .select("_id imageUrl title createdAt createdBy view like")
    .exec() // bat dau chay luu data
    .then(data => resolve(data))
    .catch(err => reject(err))
})

const getImage = id => new Promise((resolve, reject) =>{
    imageModel.findOne({"active": true, "_id": id})
    .select("_id imageUrl title createdAt createdBy view like comment")
    .exec() // bat dau chay luu data
    .then(data => resolve(data))
    .catch(err => reject(err))
})

const updateImage = (id, {imageUrl, title, descreption, createdBy}) => new Promise((resolve, reject)=>{
    imageModel.update({_id: id}, {imageUrl, title, descreption, createdBy})
    .then(data => resolve(data))
    .catch(err => reject(err))
})

const deleteImage = (id) => new Promise((res, rej) =>{
    imageModel.update({_id : id}, {
        active: false
    }).then(data => res(data))
    .catch(err => reject(err))
})

const addComment = (imageId, {createdBy, content}) => new Promise((res, rej) =>{
        imageModel.update({_id : imageId}, {
            $push: {comment: {createdBy, content}}
        }).then(data => res(data))
        .catch(err => rej(err)) 
    }
)

const likeImage = imageId => new Promise((resolve, reject) => {
    getImage(imageId).then(data => {
        imageModel.update({_id: imageId}, {
            like : data.like + 1
        }).then(data => resolve(data))
        .catch(err => reject(err))
    }).catch(err => {
        reject(err)
    })
})

const unlikeImage = imageId => new Promise((resolve, reject) => {
    getImage(imageId).then(data => {
       
        imageModel.update({_id: imageId}, {
            like : Math.max(data.like - 1, 0) 
        }).then(data => resolve(data))
        .catch(err => reject(err))
    }).catch(err => {
        reject(err)
    })
})

const deleteComment = (commentId, imageId) => new Promise((resolve, reject) =>{
    imageModel.update({_id : imageId}, {
        $pull: {comment: {_id: commentId}}
    }).then(data => resolve(data))
    .catch(err => reject(err)) 
})


module.exports = {
    createImage,
    getAllImage,
    updateImage,
    deleteImage,
    getImage,
    addComment,
    likeImage,
    unlikeImage,
    deleteComment
}
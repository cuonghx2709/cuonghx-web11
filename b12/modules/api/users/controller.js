const modelUser = require('./model')

const createUser = ({username, password}) => new Promise((resolve, reject) => {
    modelUser.create({
        username,
        password
    }).then(data => { resolve(data._id)
    }).catch(err => reject(err))
})

const getAllUser = page => new Promise((resolve, reject) => {
    modelUser.find({"active": true})
    .sort({createdAt: -1})
    .skip((page - 1) * 20)
    .limit(20)
    .select("_id avatar username password email createdAt")
    .exec()
    .then(data => resolve(data))
    .catch(err => reject(err))
})

const getOne = id => new Promise((resolve, reject) => {
    modelUser.findOne({_id: id, active: true})
    .select("_id avatar username password email active")
    .exec()
    .then(data => resolve(data))
    .catch(err => reject(err))
})

const updateUserName = (idUser, name) => new Promise((resolve, reject) => {
    modelUser.update({_id: idUser}, {username: name}).then(data => resolve(data))
    .catch(err => reject(err))
}) 
const updateUserEmail = (idUser, email) => new Promise((resolve, reject) => {
    modelUser.update({_id: idUser, email: email}).then(data => resolve(data))
    .catch(err => reject(err))
})
const updateUserAvatar = (idUser, avatar) => new Promise((resolve, reject) => {
    modelUser.update({_id: idUser}, {avatar: avatar}).then(data => resolve(data))
    .catch(err => reject(err))
})
const updateUserPassword = (idUser, password) => new Promise((resolve, reject) => {
    modelUser.update({_id: idUser}, {password : password}).then(data => resolve(data))
    .catch(err => reject(err))
})

const deleteUser = id => new Promise((resolve, reject) => {
    modelUser.update({_id: id}, {active: false}).then(data => resolve(data))
    .catch(err => reject(err))
})

module.exports = {
    createUser,
    updateUserAvatar,
    updateUserEmail,
    updateUserName,
    updateUserPassword,
    deleteUser,
    getAllUser,
    getOne
}
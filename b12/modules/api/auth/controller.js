
const userController = require('../users/controller')
const bcrypt = require('bcryptjs')

const login = ({username, password}) => new Promise((res, rej) => {
    // Success, Incorrect Username, password, sever err
    userController.getUserForAuth(username).then(user => {
        if (!user || !user.password){
            rej({
                status: 401, // bad request,
                err: "Incorrect userName"
            })
        }else{
            bcrypt.compare(password, user.password).then(result => {
                if(result){
                    // success 
                    res({username: user.username, id: user._id})
                }else{
                    rej({
                        status: 401,
                        err: "incorrect password"
                    });
                }
            })
            .catch(err => {
                rej({
                    status: 501,
                    err: err
                })
            })
        }
    }).catch(err => {
        rej({
            status: 501,
            err: err
        })
    })
})

module.exports= {
    login
}
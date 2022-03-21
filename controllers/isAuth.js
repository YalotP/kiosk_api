const { sendStatus } = require('express/lib/response');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = (request,response,next) => {

    const bearerHeader = request.headers['authorization'];
    if(bearerHeader){

        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        

        jwt.verify(bearerToken,'A6cXZ9Mj5hM4As2wiIugIz5DHNO3q1VF', (err,authData) => {
                if(err){
                    return response.sendStatus(403);
                }else{
                    User.findById(authData._id)
                    .then(account => {
                        request.token = bearerToken;
                        request.account= account;
                        next();

                    })
                    .catch(err => {
                        return response.sendStatus(403);
                    })
                }
        })

    }else{
        return response.sendStatus(403);
    }
    //console.log(bearerHeader);

}
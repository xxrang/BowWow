const {sign, verify} = require('jsonwebtoken');
const {user} = require('../../models');
require('dotenv').config();

module.exports = {

    generateAccessToken: (data) => {
        let token = sign(data, process.env.ACCESS_SECRET, {expiresIn: "15s"})
        return token;
    },

    sendAccessToken: (res, accessToken) => {
        res.cookie('accessToken',accessToken,{
            sameSite:'none',httpOnly:true,secure:true,path:'/'
        })
    },

    sendRefreshToken : async (res, refreshToken) => {
       await user.create({
           refreshToken : refreshToken
       }).then(()=> {
           res.send({message: 'ok'})
       })
    },

    isAuthorized: (req) => {
        const authorization = req.headers['cookie']

        if(!authorization){
            return null
        }
        const token = authorization.split(' ')[1];
        try {
            return verify(token, process.env.ACCESS_SECRET);
        } catch (err) {
            return null;
        }
    }
}
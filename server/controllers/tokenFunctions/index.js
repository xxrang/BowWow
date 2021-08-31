const {sign, verify, TokenExpiredError} = require('jsonwebtoken');
const {user} = require('../../models');
require('dotenv').config();

module.exports = {

    generateAccessToken: (data) => {
        let token = sign(data, process.env.ACCESS_SECRET, { expiresIn: "5m" })
        return token;
    },

    generateRefreshToken: (data) => {
        let token = sign(data, process.env.REFRESH_SECRET, { expiresIn: "10m" })
        return token
    },

    sendAccessToken: (res, accessToken) => {
        
        res.cookie('accessToken', accessToken, {
            sameSite:'none',httpOnly:true,secure:true,path:'/'
        })
    },

    sendRefreshToken : async (res, refreshToken) => {
       res.cookie('refreshToken', refreshToken, {
           sameSite:'none', httpOnly:true, secure:true, path: '/'
       })
    },

    isAuthorized: (req) => {
        const authorization = req.headers['cookie']
        console.log("********** auth ***********",authorization)
        if(!authorization){
            return null
        }
        const token = authorization.split('accessToken=')[1].split(';')[0]
            try {
            const data = verify(token, process.env.ACCESS_SECRET);
            console.log("********** data ******",data)
            return data
            } catch {
                const token = authorization.split('refreshToken=')[1].split(';')[0]
                if(checkRefresh(token)){
                    generateAccessToken()
                }
            }
            
    },

    checkRefresh: (refreshToken) => {
        try {
            return verify(refreshToken, process.env.REFRESH_SECRET);
        } catch (err) {
            return null;
        }
    },

}
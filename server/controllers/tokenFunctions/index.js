const {sign, verify} = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    generateAccessToken: (data) => {
        let token = sign(data, process.env.ACCESS_SECRET, { expiresIn: "3s" })
        return token;
    },

    generateRefreshToken: (data) => {
        let token = sign(data, process.env.REFRESH_SECRET, { expiresIn: "5s" })
        return token
    },

    sendAccessToken: (res, accessToken) => {
        res.cookie('accessToken', accessToken, {
            sameSite:'none',httpOnly:true,secure:true, path:'/'
        })
    },

    sendRefreshToken : (res, refreshToken) => {
       res.cookie('refreshToken', refreshToken, {
           sameSite:'none', httpOnly:true, secure:true, path: '/'
       })
    },

    checkRefresh: (refreshToken) => {
        try {
            return verify(refreshToken, process.env.REFRESH_SECRET);
        } catch (err) {
            return null;
        }
    },

    checkAccess: (accessToken) => {
        try {
            return verify(accessToken, process.env.ACCESS_SECRET);
        } catch (err) {
            return null;
        }
    }
}
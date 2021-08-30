const { user } = require('../../models');
const crypto = require('crypto');
const {generateAccessToken, sendAccessToken, sendRefreshToken } = require('../tokenFunctions')

module.exports = async (req, res) => {
    
 const { email, password } = req.body;
 const hashpassword = crypto.createHash('sha512').update(password).digest('hex');
 
 user.findOne({ where: {email, password: hashpassword}})
 .then((data) => {
     if(!data){
         res.status(404).send({message: 'invalid user'})
     } else {
        //  delete data.dataValues.hashpassword;
        //  const accessToken = generateAccessToken(data.dataValues);
        //  const refreshToken = generateAccessToken(data.dataValues);
        //  sendAccessToken(res, accessToken)
        //  sendRefreshToken(res, refreshToken);
         res.status(200).send({message: 'login ok', data: {accesstoken: data.id}})
     }
 })

}
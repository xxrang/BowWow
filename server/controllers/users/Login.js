const { user } = require('../../models');
const crypto = require('crypto');
const {generateAccessToken, sendAccessToken, sendRefreshToken, generateRefreshToken } = require('../tokenFunctions')

module.exports = async (req, res) => {
    
 const { email, password } = req.body;
 const hashpassword = crypto.createHash('sha512').update(password).digest('hex');
 const data = await user.findOne({
        where: { email, password: hashpassword }})
    
    if(!data){
        res.status(404).send({message: 'invalid user'})
    } else {
        delete data.dataValues.password
        // delete data.dataValues.image
        // delete data.dataValues.introduce
        // delete data.dataValues.updatedAt
        // delete data.dataValues.nickname
        const accesstoken = generateAccessToken(data.dataValues); //id, email, createdAt
        const refreshtoken = generateRefreshToken(data.dataValues);
        sendAccessToken(res, accesstoken);
        sendRefreshToken(res, refreshtoken);
        res.status(200).send({message: 'login ok', data: {userinfo: data.dataValues}})
    }

}
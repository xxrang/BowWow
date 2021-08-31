const { verify } = require('crypto');
const { isAuthorized, checkRefresh } = require('../../controllers/tokenFunctions');
const { user } = require('../../models');

module.exports = async (req, res) => {
    // console.log("********req********",req.headers['cookie'].split('accessToken=')[1].split(';')[0])
    // console.log("********accessTokenData********",accessTokenData)
    const accessToken = req.headers['cookie'].split('accessToken=')[1].split(';')[0]
    if(accessToken){
        
    }
    const accessTokenData = isAuthorized(req);
    
    if(!accessTokenData){
    res.status(401).send({message: 'not authorized'})
    }
    
        const { email } = accessTokenData;
        await user.findOne({
            where: { email: email }})
            .then((data) => {
                if(!data){
                    res.status(401).send({message: 'access token has been tempered'})
                } else {
                    delete data.dataValues.password
                    delete data.dataValues.image
                    delete data.dataValues.introduce
                    delete data.dataValues.updatedAt
                    delete data.dataValues.nickname
                    res.status(200).send({message: 'ok', data: { userInfo: data.dataValues }})
                }
            })

}
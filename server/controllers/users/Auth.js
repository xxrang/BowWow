const { checkRefresh, generateAccessToken, sendAccessToken, checkAccess } = require('../../controllers/tokenFunctions');
const { user } = require('../../models');

module.exports = async (req, res) => {
    const access = req.headers['cookie'].split('accessToken=')[1].split(';')[0]
    const refresh = req.headers['cookie'].split('refreshToken=')[1].split(';')[0]
    

    //액세스토큰이 유효하면 -> 메세시 성공
    //액세스토큰이 유효하지 않으면 -> 리프레쉬 토큰이 있는지, 있으면 검증해보고 검증되면
    //액세스 토큰 재 발급
    const check = checkAccess(access);

    if(check){ //액세스 토큰이 유효하면
        res.status(200).send({message: 'token ok'})
    } else { //액세스 토큰이 유효하지 않으면
        const userdata = checkRefresh(refresh); //리프레쉬 토큰 검증
        // console.log("*********** userdata ************",userdata)
        const userInfo = await user.findOne({
            where: { email: userdata.email }
        })
        // console.log("*********** userInfo ************",userInfo)
        if(!userInfo){
            res.status(404).send({ message : 'fail'})
        } else {
            delete userInfo.dataValues.password
            const accessToken = generateAccessToken(userInfo.dataValues);
            sendAccessToken(res, accessToken);
            res.status(200).send({message: 'token request ok', data: { userInfo: userInfo.dataValues}})
        }
    }
}
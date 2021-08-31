const { checkRefresh, generateAccessToken, sendAccessToken, checkAccess, generateRefreshToken, sendRefreshToken } = require('../../controllers/tokenFunctions');
const { user } = require('../../models');

module.exports = async (req, res) => {
    const access = req.headers['cookie'].split('accessToken=')[1].split(';')[0]
    const refresh = req.headers['cookie'].split('refreshToken=')[1].split(';')[0]
    
    const check = checkAccess(access);

    if(check){ //액세스 토큰이 유효하면
        res.status(200).send({message: 'token ok'})
    } else { //액세스 토큰이 유효하지 않으면
        const userdata = checkRefresh(refresh); //리프레쉬 토큰 검증
        // console.log("*********** userdata ************",userdata)
        if(!userdata){
            console.log("****************")
            res.status(401).send({ message : 'fail'})
            //클라이언트쪽에서 메세지 캐치해서 메인 화면으로 이동 시키기
        } else {
            delete userdata.password
            const accessToken = generateAccessToken(userdata);
            sendAccessToken(res, accessToken);
            res.status(200).send({message: 'token request ok', data: { userInfo : userdata}})
        }
    }
  
}
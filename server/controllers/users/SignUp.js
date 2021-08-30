const { user } = require('../../models');
const crypto = require('crypto');
// const upload = require('../../module/multer');

module.exports = async (req, res) => {

//  router.post('/', upload.array('image',4), async (req, res) => { })
const { email, nickname, password, introduce} = req.body;
const image = req.files.location;

 if(!email || !password ){
     return res.status(422).json({message: 'insufficient parameters supplied'});
     //클라이언트에서 이메일하고 비번 안 넘어온다면
 }

 await user.findOne({ where: { email }})
    .then((duplicate_User) => {
        if(duplicate_User){
            res.status(409).send({message: 'email exists'}) //계정 중복 가입
        } else {

            const hashpassword = crypto.createHash('sha512').update(password).digest('hex');

            user.create({
                email: email,
                nickname: nickname,
                password: hashpassword,
                introduce: introduce,
                image: image,
            }).then((user) => {
               if(user){
                   res.status(201).send({message: 'ok'})
               }
            })
        }
    })
}
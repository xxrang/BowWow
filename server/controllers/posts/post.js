const { post, user, comment} = require('../../models');
const nickname = require('../check/nickname');

module.exports = async (req, res) => {

            const { id } = req.query
            await post.findOne({ where : { id: id },
             include: [{
                 model: user,
             }, {model: comment, attribute: nickname, email, image}]
            }).then((data) => {
                if(data){
                    res.status(200).send({message: 'load success', service : {data}})
                } else {
                    res.status(404).send({message: 'load fail'})
                } //아이디, 닉네임, 유저 이미지
            })
        }
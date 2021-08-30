const { post, user, comment} = require('../../models');

module.exports = async (req, res) => {
        
            const data1 = await post.findOne({ where : { id: req.query.id },
             include: [{
                 model: user,
             }]}).then( async () => {
                await comment.findOne({ where : { posts_id: req.query.id}})
            }).then((data2) => {
                if(data2){
                    res.status(200).send({message: 'load success', service : {data1, data2}})
                } else {
                    res.status(404).send({message: 'load fail'})
                } //아이디, 닉네임, 유저 이미지
            })
        }
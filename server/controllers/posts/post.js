const { post, user, comment} = require('../../models');
const nickname = require('../check/nickname');

module.exports = async (req, res) => {

            const { id } = req.query
            // await post.findOne({ where : { id: id },
            //  include: [{
            //      model: user,
            //  }, {model: comment, include: [{ model: user}, 
            //     where : {}] }]
            // }).then((data) => {
            //     if(data){
            //         res.status(200).send({message: 'load success', service : {data}})
            //     } else {
            //         res.status(404).send({message: 'load fail'})
            //     } //아이디, 닉네임, 유저 이미지
            // })
            const data1 = await post.findOne({ where: { id: id } ,
                include : [{ model: user }, {model: comment}]})
            const comment = await comment.findOne({ where: { posts_id: id },
                include: [{ model: user }]})
            
                res.status(200).send({message: 'ok', data : { posts: data1, comment}})
            

                
        }
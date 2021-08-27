module.exports = async (req, res) => {
    const { post } = require("../../models");
    /* 클라이언트 axios request.body에 category(dogs || volunteer)로 담겨 들어오니까
        category === 'dogs'로 들어오면 */ 

    await post.destroy({where : {id : req.query.id}})
        .then((data) => {
            if(data){
            res.status(200).send({message: 'ok'})
        } else {
            res.status(404).send({message: 'invalid page'})
        }
        })
        
}
const { post } = require('../../models');

module.exports = async (req, res) => {
        
            await post.findOne({ where : { id: req.query.id }})
            //req.query(URI?req.query)로 받아올건지 req.params(URI/:id)로 받아올건지 axios 요청시 의견조율해야함
            .then((data) => {
                if(data){
                    res.status(200).send({message: 'load success', service : data})
                } else {
                    res.status(404).send({message: 'load fail'})
                } 
            })
        }
module.exports = (app) => {

    const { post } = require('../../models')
    const { category_content } = require('../../models');
    const { category } = require('../../models');
    const upload = require('../../module/multer')
    const router = require('express').Router();
    const application = app;

    
     router.get('/', async (req, res) => {
            category_content.findAll({
                include : [{
                    model: post
                }], where : { category_id : 1}
            })
            .then((data) => {
            if(data){
                res.status(200).send({message: 'ok', data : { posts: data }})
            } else {
                res.status(404).send({message: 'load fail'})
            }
            })
        })

    return router;
}
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
                }], where : { categoy_id : 1}
            })
            .then((data) => {
            if(data){
                res.status(200).send({message: 'ok', data : { posts: data }})
            } else {
                res.status(404).send({message: 'load fail'})
            }
            })
        })

    /*router.patch('/', async (req, res) => {
        await comment.update({
            content: req.body.content
        }, {where : {id : req.query.id}})
        .then((data) => {
            if(data){
                res.status(200).send({message: 'success to update'})
            } else {
                res.status(404).send({message: 'fail to update'})
            }
        })
    })*/

    return router;
}
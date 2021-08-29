module.exports = (app) => {

    const { comment } = require('../../models');
    const { user } = require('../../models');
    const { post } = require('../../models');
    const router = require('express').Router();
    const application = app;


    router.get('/', async (req, res) => {

    }),
    
    router.post('/', async (req, res) => {
        await comment.create({
            content: req.body.content,
            user_id: req.body.user_id,
            //user_id 관계키 시퀄라이즈 수정하기
            posts_id: req.body.posts_id
            }).then((data) => {
            res.status(201).send({message: 'ok', data})
        })
    })

    router.delete('/', async (req, res) => {
        await comment.destroy({
            where: {id: req.query.id}
        }).then((data) => {
            if(data){
                res.status(200).send({message: 'success to delete'})
            } else {
                res.status(404).send({message: 'fail to delete'})
            }
        })
    })

    router.patch('/', async (req, res) => {
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
    })

    return router;
}


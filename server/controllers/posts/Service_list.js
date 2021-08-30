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
        }),
    
    router.post('/', upload.single('input-image'), async (req, res) => {
        const { email, title, mobile, user_id, content} = req.body;
        const image = req.files.location;
        /* 클라이언트 axios request.body에 category(dogs || volunteer)로 담겨 들어오니까
        category === 'dogs'로 들어오면 */ 
        if(!email || !title || !mobile || !content || !user_id){
            res.status(422).send({message: 'insufficient parameters supplied'})
        } else {
        post.create({
            email: email,
            image: image,
            title: title,
            mobile: mobile,
            content: content,
            user_id: user_id
        }).then( async () => {
            await category_content.create({
                posts_id: req.body.posts_id,
                categoy_id: req.body.category_id
            }).then((data) => res.status(201).send({message: 'post write success', data}))
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

    }});
    return router;
}
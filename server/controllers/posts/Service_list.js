module.exports = (app) => {

    const { post } = require('../../models')
    const { category_content } = require('../../models');
    const { category } = require('../../models');
    const upload = require('../../module/multer')
    const router = require('express').Router();
    const application = app;

    router.get('/', (req,res) => {
        if(req.query.id){
            post.findOne({ where : { id: req.query.id }})
            //req.query(URI?req.query)로 받아올건지 req.params(URI/:id)로 받아올건지 axios 요청시 의견조율해야함
            .then((data) => {
                if(data){
                    res.status(200).send({message: 'load success', service : data})
                } else {
                    res.status(404).send({message: 'load fail'})
                } 
            })
        } else {
            post.findAll({})
            .then((data) => {
            if(data){
                res.status(200).send({message: 'ok', service : data })
            } else {
                res.status(404).send({message: 'load fail'})
            }
        })
        }
    })
    
    router.post('/', upload.single('input-image'), async (req, res) => {
        const { email, image, title, mobile, user_id, content} = req.body;
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
    }});
    return router;
}
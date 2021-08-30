module.exports = (app) => {

    const { post } = require('../../models')
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
    
    router.post('/', upload.single('input-image'), (req, res) => {
        const { user_id, title, date, location, mobile, content } = req.body;
        const image = req.files.location;
        if(!user_id || !title || !date || !location || !mobile || !content){
            res.status(422).send({message: 'insufficient parameters supplied'})
        } else {
        post.create({
            user_id: user_id,
            image: image,
            title: title,
            date: date,
            location: location,
            mobile: mobile,
            content: content
        }).then( async () => {
            await category_content.create({
                posts_id: req.body.posts_id,
            }).then( async () => {
                await category.create({
                    categoy_id: req.body.category_id
                }).then((data) => res.status(201).send({message: 'post write success', data}))
            })
        })
    }});
    return router;
}
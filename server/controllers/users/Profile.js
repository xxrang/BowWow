module.exports = (app) => {

    const { user, post } = require('../../models')
    const router = require('express').Router();
    const upload = require('../../module/multer');
    const crypto = require('crypto');
    const application = app;

    router.get('/', async (req, res) => {

        await user.findAll({ 
            where : { id: req.query.id },
        include: [{
            model: post
        }]})
            .then((data) => {
                if(data) {
                    //createdAt, updatedAt 삭제하고 보여주기
                    //delete data.dataValues.password
                    res.status(200).send({message: 'ok', data: data})
                } else {
                    res.status(401).send({message: 'fail'})
                }
            })
    })

    router.patch('/', upload.single('input-image'), async (req, res) => {
        
        
            const { nickname, password } = req.body;
            const image = req.file.location
            const hashpassword = crypto.createHash('sha512').update(password).digest('hex');
            await user.update({ 
                nickname: nickname,
                password: hashpassword,
                image: image
                 },
                { where : {id : req.query.id }} 
                ).then((data) => {
                    if(data){
                        res.status(200).send({message: 'success to update'})
                    } else {
                        res.status(403).send({message: 'fail to update'})
                    }
                })
        })

    return router;
}
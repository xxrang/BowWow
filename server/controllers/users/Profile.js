module.exports = (app) => {

    const { user } = require('../../models')
    const router = require('express').Router();
    const upload = require('../../module/multer');
    const crypto = require('crypto');
    const application = app;

    router.get('/', async (req, res) => {

        await user.findAll({ 
            where : { email: req.query.id }})
            .then((data) => {
                if(data) {
                    //createdAt, updatedAt 삭제하고 보여주기
                    res.status(200).send({message: 'ok', data})
                } else {
                    res.status(401).send({message: 'fail'})
                }
            })
    })

    router.patch('/', async (req, res) => {
        
        if(req.query.id){
            const { nickname, password } = req.body
            const hashpassword = crypto.createHash('sha512').update(password).digest('hex');
            await user.update({ 
                nickname: nickname,
                password: hashpassword },
                { where : {id : req.query.id }} 
                ).then((data) => {
                    if(data){
                        res.status(200).send({message: 'success to update'})
                    } else {
                        res.status(403).send({message: 'fail to update'})
                    }
                })
        }
    })

    return router;
}
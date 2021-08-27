const { user } = require('../../models');
const crypto = require('crypto');

module.exports = async (req, res) => {
    
 const { email, password } = req.body;
 const hashpassword = crypto.createHash('sha512').update(password).digest('hex');
 
 user.findOne({ where: {email, password: hashpassword}})
 .then((data) => {
     if(!data){
         res.status(404).send({message: 'invalid user'})
     } else {
         res.status(200).send({message: 'login ok'})
     }
 })

}
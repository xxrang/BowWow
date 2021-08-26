const { user } = require('../../models');

module.exports = async (req, res) => {
    
 const { email, password } = req.body;

 user.findOne({ where: {email, password}})
 .then((data) => {
     if(!data){
         res.status(404).send({message: 'invalid user'})
     } else {
         res.status(200).send({message: 'login ok'})
     }
 })
 
}
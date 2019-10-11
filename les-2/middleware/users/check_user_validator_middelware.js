const {userValidtor}= require('../../validators')

module.exports = (req, res, next) =>{
    try {
        const user = req.body;

        userValidtor.newUserValidator(user);
        next();
    }catch (e) {
        res.status(400).json(e.message);
    }

};
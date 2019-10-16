const {userValidtor} = require('../../validators');

module.exports = (req, res, next) =>{
    try {
        const updateUser = req.body;

        userValidtor.newUserValidator(updateUser);
        next();
    }catch (e) {
        res.status(404).json(e.message);
    }
};
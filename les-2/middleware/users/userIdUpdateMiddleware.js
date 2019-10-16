const {provider} = require('../../dataBase');

module.exports = async (req, res, next) =>{
    try{
        const {userID}= req.body;
        const query = `select * from user where id ='${userID}'`;
        const [findUser] = await provider.promise().query(query);

        if(!findUser.length){
            throw new Error('not user');
        }
        next();
    }catch (e) {
        res.status(404).json(e.message);
    }
};
const {provider} = require('../../dataBase');

module.exports = async (req, res, next) =>{
    try{
        const {houseID}= req.body;
        const query = `select * from house where id ='${houseID}'`;
        const [findUser] = await provider.promise().query(query);

        if(!findUser.length){
            throw new Error('not house');
        }
        next();
    }catch (e) {
        res.status(404).json(e.message);
    }
};
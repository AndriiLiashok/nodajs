const {provider} = require('../../dataBase');

module.exports = async (req, res) =>{
    try{
        const {houseID, street, city, prise} = req.body;
        const query = `update house set street = ?, city = ?, prise = ? where  id = '${houseID}'`;

        const [updatedUser] = await provider.promise().query(query, [street, city, prise]);

        res.redirect(`/houses/${houseID}`)
    }catch (e) {
        res.status(404).json(e.message);
    }
};
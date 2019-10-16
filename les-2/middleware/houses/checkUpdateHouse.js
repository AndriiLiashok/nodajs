const {houseValidtor} = require('../../validators');

module.exports = (req, res, next) =>{
    try {
        const updateHouse = req.body;

        houseValidtor.newHouseValidator(updateHouse);
        next();
    }catch (e) {
        res.status(404).json(e.message);
    }
};
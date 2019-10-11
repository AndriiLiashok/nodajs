const {provider} = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {house_id} = req.params;
        const query = `SELECT * FROM house WHERE id = ${house_id}`;

        const [isHousePressent] = await provider.promise().query(query);

        if (!isHousePressent.length) {
            throw new Error(`House with ${house_id} is not present`)
        }

        req.house = isHousePressent;

        next();

    } catch (e) {
        res.status(404).json(e.message)
    }
};
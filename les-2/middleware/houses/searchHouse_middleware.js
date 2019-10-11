const {provider} = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {city} = req.body;
        const query = `SELECT * FROM house WHERE city = '${city}'`;

        const [searchHouse] = await provider.promise().query(query);

        if (!searchHouse) {
            throw new Error('Not houses')
        }
        req.house = searchHouse;
        next()
    }catch (e) {
        res.status(404).json(e.message);
    }
};
const {provider} = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {user_id} = req.params;

        const [isUserPresent] = await provider.promise().query(`SELECT * FROM user WHERE id = ${user_id}`);

        if (!isUserPresent.length) {
            throw new Error(`User with ${user_id} is not present`)
        }

        req.user = isUserPresent;

        next();

    } catch (e) {
        res.status(404).json(e.message)

    }
};
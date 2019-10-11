const {provider} = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const query = `SELECT * FROM user WHERE email = '${email}' and password = '${password}'`;

        const [checkInUser] = await provider.promise().query(query);

        if (!checkInUser.length) {
            throw new Error('Incorrect password or email');
        }
        req.user = checkInUser;
        next();
    } catch (e) {
        res.status(404).json(e.message);
    }
};
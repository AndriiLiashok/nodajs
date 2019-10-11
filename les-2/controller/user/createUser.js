const {provider} = require('../../dataBase');

module.exports = async (req, res) => {
    const {userName, email, password} = req.body;

    const query = `INSERT INTO user(name, email, password) VALUES (?, ?, ?)`;

    await provider.promise().query(query, [userName, email, password]);
    res.render('loginn')
};
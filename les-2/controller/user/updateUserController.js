const {provider} = require('../../dataBase');

module.exports = async (req, res) =>{
    try{
        const {userID, email, password, userName} = req.body;
        const query = `update user set email = ?, name = ?, password = ? where  id = '${userID}'`;

        const [updatedUser] = await provider.promise().query(query, [email, userName, password]);

        res.redirect(`/users/${userID}`)
    }catch (e) {
        res.status(404).json(e.message);
    }
};
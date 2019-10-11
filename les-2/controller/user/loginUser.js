module.exports = (req, res) => {
    const [user] = req.user;
    res.redirect(`/user/${user.id}`);
};
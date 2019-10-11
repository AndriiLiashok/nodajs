module.exports = userObject => {
    const {userName, email, password} = userObject;
    if (!userName || !email || !password) {
        throw new Error('Is user object is not valid')
    }
};
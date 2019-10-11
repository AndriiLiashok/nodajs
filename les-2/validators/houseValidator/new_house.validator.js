module.exports = houseObject => {
    const {city, prise, street} = houseObject;
    if (!city || !prise || !street) {
        throw new Error('Is user object is not valid')
    }
};

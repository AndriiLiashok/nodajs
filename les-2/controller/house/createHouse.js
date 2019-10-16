const {provider} = require('../../dataBase');

module.exports = async (req, res)=>{
    try {
        const {city, prise, street} = req.body;

        const query = `INSERT INTO house (city, prise, street) VALUES (?, ?, ?)`;

        await provider.promise().query(query, [city, prise, street]);

        res.render('house')
    }catch (e) {
        res.json(e.message);
    }
};




/*
(req, res) => {
    const house = req.body;
    house.hous_id = houses.length + 1;
    houses.push(house);
    console.log(house);
    res.redirect('house');
}*/

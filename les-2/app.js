const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expressHbs({
    extname: '.hbs',
    defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let users = [];
let houses = [];

app.get('/', (req, res) => {
    res.render('main')
});

app.get('/house', (req, res) => {
    res.render('house')
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.get('/login', (req, res) => {
    res.render('loginn')
});

app.get('*', (req, res) => {
    res.render('404')
});

app.post('/register', (req, res) => {
    const user = req.body;
    user.user_id = users.length + 1;
    users.push(user);
    console.log(user);
    res.render('loginn');
});

app.post('/house', (req, res) => {
    const house = req.body;
    house.hous_id = houses.length + 1;
    houses.push(house);
    console.log(house);
    res.redirect('house');
});

app.get('/user/:user_id', (req, res) => {
    const userID = users.find(user => +req.params.user_id === user.user_id);

    userID ? res.json(userID) : res.render('404');

});

app.get('/house/:house_id', (req, res) => {
    const houseID = houses.find(house => +req.params.hous_id === house.hous_id);

    houseID ? res.json(houseID) : res.render('404');

});

app.post('/login', (req, res) => {
    const {password, email, userName} = req.body;
    const userArr = users.find(user => password === user.password && email === user.email && userName === user.userName);

    userArr ? res.json(userArr) : res.render('404');
});

app.listen(3000, () => {
    console.log(3000);
});



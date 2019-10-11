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

let {user, house, render} = require('./controller');
let {user: userMiddleware, house: houseMiddleware} = require('./middleware');

app.get('/', render.main);
app.get('/house', render.house);
app.get('/register', render.register);
app.get('/login', render.login);
app.get('/searchHouse', render.searchHouse);

app.post('/register', userMiddleware.checkUserValidatorMiddleware, user.createUser);
app.post('/house', houseMiddleware.checkHouseValidatorMiddleware, house.createHouse);


app.get('/user/:user_id',userMiddleware.isUsersMiddleware, user.getById);
app.get('/house/:house_id', houseMiddleware.housePressentMiddleware, house.getByIdHouses);

app.post('/login', userMiddleware.checkLoginUserMiddleware, user.loginUser);
app.post('/searchHouse', houseMiddleware.searchHouseMiddleware, house.searchHouse);

app.get('*', render.error404);


app.listen(3000, () => {
    console.log(3000);
});



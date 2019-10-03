const {createdDir, createStudent} = require('./StudentMK');
const {Photo} = require('./images')

createdDir('jscx-1800');
createdDir('jscx-2000');

createStudent('jscx-2000', 'Slavik_Bilyk', 'SlavikBilyk20',
    {FirstName: 'Slavik', LastName: 'Bilyk', age: 22});
createStudent('jscx-1800', 'Andrii_Liashok', 'AndriiLiashok20',
    {FirstName: 'Andrii', LastName: 'Liashok', age: 22});

Photo( 'jscx-2000/Slavik_Bilyk/orol.jpg', 'photo/orol.jpg');
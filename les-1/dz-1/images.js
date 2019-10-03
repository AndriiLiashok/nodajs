const fs = require('fs');

exports.Photo = (dir1, dir2) => {
    fs.createReadStream(`./${dir2}`).pipe(fs.createWriteStream(`./${dir1}`));
    console.log('Created!!!!!');
};
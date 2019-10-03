const fs = require('fs');

exports.createdDir =  (dir) => {
    fs.mkdir(`./${dir}`, {}, (err) => {
        if (!err) {
            console.log('Created!!!!!');
        }
    })
};

exports.createStudent = (Dir, nameDirStudents, nameFile, Students) => {
    fs.mkdir(`./${Dir}/${nameDirStudents}`, {}, err => {
        if (!err) {
            console.log('Created!!!!!');
        }
    });
    let writeStream = fs.createWriteStream(`./${Dir}/${nameDirStudents}/${nameFile}.txt`, err => {
        if (!err) {
            console.log('Created!!!!!');
        }
    });
    writeStream.write(JSON.stringify(Students));
};

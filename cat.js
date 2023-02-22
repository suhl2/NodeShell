const fs = require("fs");

module.exports = (fileName) => {
    fs.readFile(fileName, 'utf8', (err, file) => {
        if (err) {
            throw err;
        } else {
            console.log(file);
        }
    })
}
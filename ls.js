const fs = require('fs');

module.exports = () => {
    console.log("you typed ls woohoo");
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(files.join('\n'));
            process.stdout.write('prompt > ');
        }
    })
}
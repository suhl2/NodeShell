const request = require("request");

module.exports = (url) => {
    request(url, (err, response, body) => {
        if(err) {
            throw err;
        } else {
            console.log(body);
        }
    })
}
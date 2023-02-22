
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if(cmd === 'pwd') {
        pwd();
    } else if(cmd === 'ls') {
        ls();
    } else if(cmd.includes('cat')) {
        const fileName = cmd.slice(4);
        cat(fileName);
    } else if(cmd.includes('curl')) {
        const url = cmd.slice(5);
        curl(url);
    } else {
        process.stdout.write("You typed: " + cmd);
    }

    process.stdout.write('\nprompt > ');
});
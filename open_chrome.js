const opn = require('opn');
const isWsl = require('is-wsl');

// Application name
let name;
if (process.platform === 'darwin') {
    name = 'Google Chrome';
} else if (process.platform === 'win32' || isWsl) {
    name = 'Chrome';
} else if (process.platform === 'linux') {
    name = 'google-chrome';
}

//  Application target
const target = __dirname + '/static/index.html';

// Application arguments
const args = ['--kiosk'];

// Open target with application and arguments
opn(target, {wait: false, app: [name].concat(args)})
    .then(() => {console.log('Success: ' + target)})
    .catch(() => {console.log('Error: ' + target)});

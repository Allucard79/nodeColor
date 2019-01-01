const os = require('os');
const colors = require('colors');
const time = require('../modules/timeTransform.js');

function getOSinfo() {
    const type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    const release = os.release();
    const cpu = os.cpus()[0].model;
    const uptime = os.uptime();
    const userInfo = os.userInfo();
    console.log('System:'.grey, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.magenta, cpu);
    console.log('Uptime:'.green, time.print());
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;
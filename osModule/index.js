const os = require('os');


// To check the architecture of a System

console.log(os.arch());

const data = os.freemem();
console.log(`${data/1024/1024/1024}`);

const totalmem = os.totalmem();
console.log(`${totalmem/1024/1024/1024} `);

console.log(os.platform());
console.log(os.hostname ());
console.log(os.type ());
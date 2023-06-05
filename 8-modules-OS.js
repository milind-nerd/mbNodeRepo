//OS Module => interacts with server and OS
const os = require('os');

//info about User
console.log(os.userInfo());
console.log(os.uptime());

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs);


let moment = require('moment-timezone');
// console.log((new Date.now().getMonth() + 1) + "/" + new Date.now().getDate() + "/" + new Date().getFullYear()).toString()
// console.log(((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear()).toString())
console.log(moment().tz('America/Los_Angeles').format())
// console.log((Date.now()))
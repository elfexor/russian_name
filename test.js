const names = require('./index.js');

console.log(names.one('male'));
console.log(names.one('female'));
console.log(names.many(3, 'male'));
console.log(names.many(3, 'female'));

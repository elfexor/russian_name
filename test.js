const russianName = require('./lib/index.js');

console.log(russianName.one('male'));
console.log(russianName.one('female'));
console.log(russianName.many(3, 'male'));

console.log(russianName.many(15, 'female'));

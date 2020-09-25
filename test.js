const { russianName } = require('./lib/index.js');

console.log(russianName.one());
console.log(russianName.one('male'));
console.log(russianName.one('female'));
console.log(russianName.many(2));
console.log(russianName.many(15, 'female'));

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.russianName = void 0;
var names_male = require('../json/names_male.json');
var names_female = require('../json/names_female.json');
var surnames_male = require('../json/surnames_male.json');
var surnames_female = require('../json/surnames_female.json');
var genders = ['male', 'female'];
var getRandomGender = function () {
    return genders[Math.round(Math.random())];
};
var getRandomNumber = function (max) {
    if (max === void 0) { max = 100; }
    return Math.floor(Math.random() * (Math.floor(max) - 1)) + 1;
};
var transliteration = function (str) {
    var characters = new Map([
        ['а', 'a'],
        ['б', 'b'],
        ['в', 'v'],
        ['г', 'g'],
        ['д', 'd'],
        ['е', 'e'],
        ['ж', 'g'],
        ['з', 'z'],
        ['и', 'i'],
        ['й', 'y'],
        ['к', 'k'],
        ['л', 'l'],
        ['м', 'm'],
        ['н', 'n'],
        ['о', 'o'],
        ['п', 'p'],
        ['р', 'r'],
        ['с', 's'],
        ['т', 't'],
        ['у', 'u'],
        ['ф', 'f'],
        ['ы', 'i'],
        ['э', 'e'],
        ['А', 'A'],
        ['Б', 'B'],
        ['В', 'V'],
        ['Г', 'G'],
        ['Д', 'D'],
        ['Е', 'E'],
        ['Ж', 'G'],
        ['З', 'Z'],
        ['И', 'I'],
        ['Й', 'Y'],
        ['К', 'K'],
        ['Л', 'L'],
        ['М', 'M'],
        ['Н', 'N'],
        ['О', 'O'],
        ['П', 'P'],
        ['Р', 'R'],
        ['С', 'S'],
        ['Т', 'T'],
        ['У', 'U'],
        ['Ф', 'F'],
        ['Ы', 'I'],
        ['Э', 'E'],
        ['ё', 'yo'],
        ['х', 'h'],
        ['ц', 'ts'],
        ['ч', 'ch'],
        ['ш', 'sh'],
        ['щ', 'shch'],
        ['ъ', ''],
        ['ь', ''],
        ['ю', 'yu'],
        ['я', 'ya'],
        ['Ё', 'Yo'],
        ['Х', 'H'],
        ['Ц', 'TS'],
        ['Ч', 'Ch'],
        ['Ш', 'Sh'],
        ['Щ', 'Shch'],
        ['Ъ', ''],
        ['Ь', ''],
        ['Ю', 'Yu'],
        ['Я', 'Ya'],
    ]);
    return str.replace(/[А-яёЁ]/g, function (character) { return characters.get(character) || ''; });
};
var create = function (gender) {
    var currentGender;
    if (gender) {
        if (genders.includes(gender)) {
            currentGender = gender;
        }
        else {
            currentGender = getRandomGender();
            console.warn('Incorrect gender specified');
        }
    }
    else {
        currentGender = getRandomGender();
    }
    var name = currentGender === 'male'
        ? names_male[getRandomNumber(names_male.length - 1)].name
        : names_female[getRandomNumber(names_female.length - 1)].name;
    var surname = currentGender === 'male'
        ? surnames_male[getRandomNumber(surnames_male.length - 1)].surname
        : surnames_female[getRandomNumber(surnames_female.length - 1)].surname;
    var fullname = name + " " + surname;
    return {
        name: name,
        surname: surname,
        fullname: fullname,
        gender: currentGender,
        transliteration: {
            name: transliteration(name),
            surname: transliteration(surname),
            fullname: transliteration(fullname),
        },
    };
};
var many = function (amount, gender) {
    if (amount === void 0) { amount = 10; }
    var counter = 0;
    var names = [];
    do {
        names = __spreadArrays(names, [create(gender)]);
        counter = counter + 1;
    } while (amount > counter);
    return names;
};
var russianName = {
    one: function (gender) { return create(gender); },
    many: function (amount, gender) { return many(amount, gender); },
    JSON: {
        male: {
            name: names_male,
            surname: surnames_male,
        },
        female: {
            name: names_female,
            surname: surnames_female,
        },
    },
};
exports.russianName = russianName;
//# sourceMappingURL=index.js.map
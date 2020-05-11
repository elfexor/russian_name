const names_male = require('./json/names_male.json');
const names_female = require('./json/names_female.json');
const surnames_male = require('./json/surnames_male.json');
const surnames_female = require('./json/surnames_female.json');

class Names {
  one = (gender = null) => this.#generate(gender);

  many = (count = 10, gender= null) => {
    return new Array(Number(count)).fill('').map(_ => this.one(gender));
  }

  #generate = (g) => {
    const gender = ['male', 'female'].includes(g) ? g : ['male', 'female'][Math.round(Math.random())];

    const name = gender === 'male' ? names_male[this.#random(names_male.length)].name : names_female[this.#random(names_female.length)].name
    const surname = gender === 'male' ? surnames_male[this.#random(surnames_male.length)].surname : surnames_female[this.#random(surnames_female.length)].surname;

    const fullname = `${name} ${surname}`

    const transliteration = {
      name: this.#transliteration(name),
      surname: this.#transliteration(surname),
      fullname: this.#transliteration(fullname)
    }

    return { gender, name, surname, fullname, transliteration }
  }

  #random = (max = 100) => {
    return Math.floor(Math.random() * (Math.floor(max) - 1)) + 1;
  }

  #transliteration = (str) => {
    const arr = { 'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ж':'g', 'з':'z', 'и':'i', 'й':'y', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o', 'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'ы':'i', 'э':'e', 'А':'A', 'Б':'B', 'В':'V', 'Г':'G', 'Д':'D', 'Е':'E', 'Ж':'G', 'З':'Z', 'И':'I', 'Й':'Y', 'К':'K', 'Л':'L', 'М':'M', 'Н':'N', 'О':'O', 'П':'P', 'Р':'R', 'С':'S', 'Т':'T', 'У':'U', 'Ф':'F', 'Ы':'I', 'Э':'E', 'ё':'yo', 'х':'h', 'ц':'ts', 'ч':'ch', 'ш':'sh', 'щ':'shch', 'ъ':'', 'ь':'', 'ю':'yu', 'я':'ya', 'Ё':'Yo', 'Х':'H', 'Ц':'TS', 'Ч':'Ch', 'Ш':'Sh', 'Щ':'Shch', 'Ъ':'', 'Ь':'', 'Ю':'Yu', 'Я':'Ya' };
    const replacer = a => arr[a] || '';
    return str.replace(/[А-яёЁ]/g, replacer)
  }
}

module.exports = new Names();

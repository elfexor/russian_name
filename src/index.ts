type GenderType = 'male' | 'female';
type NullableType<T> = T | null;

export interface IRussianName {
  name: string;
  surname: string;
  fullname: string;
  gender: GenderType;
  transliteration: {
    name: string;
    surname: string;
    fullname: string;
  };
}

interface IModuleRussianName {
  one(gender?: GenderType): IRussianName;
  many(amount: number, gender?: GenderType): IRussianName[];
  JSON: {
    male: {
      name: string;
      surname: string;
    };
    female: {
      name: string;
      surname: string;
    };
  };
}

const names_male = require('../json/names_male.json');
const names_female = require('../json/names_female.json');
const surnames_male = require('../json/surnames_male.json');
const surnames_female = require('../json/surnames_female.json');

const genders: ['male', 'female'] = ['male', 'female'];

const getRandomGender = (): GenderType => {
  return genders[Math.round(Math.random())];
};

const getRandomNumber = (max: number = 100): number => {
  return Math.floor(Math.random() * (Math.floor(max) - 1)) + 1;
};

const transliteration = (str: string): string => {
  const characters = new Map([
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

  return str.replace(/[А-яёЁ]/g, (character: string) => characters.get(character) || '');
};

const create = (gender?: NullableType<GenderType>): IRussianName => {
  let currentGender: GenderType;

  if (gender) {
    if (genders.includes(gender)) {
      currentGender = gender;
    } else {
      currentGender = getRandomGender();
      console.warn('Incorrect gender specified');
    }
  } else {
    currentGender = getRandomGender();
  }

  const name =
    currentGender === 'male'
      ? names_male[getRandomNumber(names_male.length - 1)].name
      : names_female[getRandomNumber(names_female.length - 1)].name;

  const surname =
    currentGender === 'male'
      ? surnames_male[getRandomNumber(surnames_male.length - 1)].surname
      : surnames_female[getRandomNumber(surnames_female.length - 1)].surname;

  const fullname: string = `${name} ${surname}`;

  return {
    name,
    surname,
    fullname,
    gender: currentGender,
    transliteration: {
      name: transliteration(name),
      surname: transliteration(surname),
      fullname: transliteration(fullname),
    },
  };
};

const many = (amount: number = 10, gender?: GenderType): IRussianName[] => {
  let counter: number = 0;
  let names: IRussianName[] = [];

  do {
    names = [...names, create(gender)];
    counter = counter + 1;
  } while (amount > counter);

  return names;
};

const russianName: IModuleRussianName = {
  one: (gender?: GenderType) => create(gender),
  many: (amount: number, gender?: GenderType) => many(amount, gender),
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

export { russianName };

This package perfect for prototyping stuff or examples of real russian names in production apps.

## Usage

Install the package using [npm](https://www.npmjs.com) and save it to the dependency list:

```bash
npm install --save russian-names
```

Usage example:

```js
import names from 'russian_names';
// or
const names = require('russian_names');

names.one('female');
// or
names.many(10, 'male');
```

Result example:

```json
{
    "gender": "male",
    "name": "Евельян",
    "surname": "Митронин",
    "fullname": "Евельян Митронин",
    "transliteration": {
      "name": "Evelyan",
      "surname": "Mitronin",
      "fullname": "Evelyan Mitronin"
    }
}

```

## Configuration

```js
names.one(gender); 
names.many(amount, gender);
```

Here's the full list of all available options:

| Name | Description | Type |
| ---- | ----------- | ---- |
| gender | Limit results to the `male` or `female` gender | String |
| amount | Amount of names to return (only for .many method) | Integer |


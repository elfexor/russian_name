This package perfect for prototyping stuff or examples of real russian names.

## Usage

Install the package using [npm](https://www.npmjs.com) and save it to the dependency list:

```bash
npm install --save russian_name
```

Usage example:

```js
import { russianName } from 'russian_name';
// or
const { russianName } = require('russian_name');

russianName.one('female');
// or
russianName.many(10, 'male');
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
russianName.one(gender); 
russianName.many(amount, gender);
```

Here's the full list of all available options:

| Name | Description | Type |
| ---- | ----------- | ---- |
| gender | Limit results to the `male` or `female` gender | String |
| amount | Amount of names to return (only for .many method) | Integer |

## Test

```bash
npm run test
```

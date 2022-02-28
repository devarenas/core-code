# Challenges week 6 - Typescript

## Monday 2/14/22

#### 1. Read [this](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week6/Example/Input.md)

### Input Class (get documentation [here](https://github.com/devarenas/core-code/blob/bb196f48ba142b8e83e704d23891230340a61653/src/source_links/input.ts))
We can get different inputs from user
* Input
* Form
* Select
* Select By Id
* Confirm

## Input

* Function: getInput
* Arguments:
  * message (string)
* Output: Object

Example Code:
```
import { Input } from './Input';
export class Main {
  async start() {
    // Get a single input prompt
    let input = await Input.getInput('Where are you from?');
    console.log(input);
  }
}
```

Output:
```
{
  data: 'Guatemala',
}
```

## Form

* Function: getForm
* Arguments:
  * message (string)
  * choices (Choices[])
* Output: Object

Example Code:
```
import { Input } from './Input';
export class Main {
  async start() {
    // Get a form prompt
    const formChoices = [
      { name: 'age', message: 'What is your age' },
      { name: 'lastName', message: 'What is your last name' },
      { name: 'movie', message: 'What is your favorite movie' },
    ];
    let input = await Input.getForm('Personal Information', formChoices);
    console.log(input);
  }
}
```

Output:
```
{
  data: { age: '26', lastName: 'Maldonado', movie: 'Back to the future' }
}
```
## Select
* Function: getSelect
* Arguments:
  * message (string)
  * choices (SelectChoice[])
* Output: Object

Example code:
```
import { Input } from './Input';
export class Main {
  async start() {
    // Get a select prompt
    const selectChoices = [
      { option: 1, message: 'Pizza' },
      { option: 2, message: 'Sandwich' },
      { option: 3, message: 'Cofee' },
      { option: 4, message: 'Lasagna' },
    ];
    let input = await Input.getSelect('Menu', selectChoices);
    console.log(input);
  }
}
```
Otuput:
```
{
  data: 3,
}
```

## Select By ID
* Function: getSelectById
* Arguments:
  * message (string)
  * choices (Choices[])
* Output: Object

Example code:
```
import { Input } from './Input';
export class Main {
  async start() {
    // Get a select by id prompt
    const selectByIdChoices = [
      { name: '#64b5f6', message: 'Blue Lighten 2' },
      { name: '#009688', message: 'Purple Lighten 1' },
      { name: '#ec407a', message: 'Pink Lighten 1' },
      { name: '#f44336', message: 'Red' },
    ];
    let input = await Input.getSelectById('Select a color', selectByIdChoices);
    console.log(input);
  }
}
```

Output:
```
{
  data: '#009688',
}
```

## Confirm
* Function: getConfirm
* Arguments:
  * message (string)
* Output: Object

Example code:
```
import { Input } from './Input';
export class Main {
  async start() {
    // Get a confirmation prompt
    let input = await Input.getConfirm('Are you a developer');
    console.log(input);
  }
}
```
Output:
```
{
  data: true,
}
````


***
#### 2. [Menu](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week6/Exercices/E0/desc/ED0W6.md) Using ``Typescript``

[My solution](https://github.com/devarenas/menu_typescript)

***
## Tuesday 2/15/22

#### 1. [Movies](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week6/Exercices/E1/desc/ED1W6.md) Using ``Typescript``

```
```

***
#### 2. [Readme](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week6/Exercices/E2/desc/ED2W6.md)


***
#### 3. [Interfaces](https://docs.microsoft.com/en-us/learn/modules/typescript-implement-interfaces/)


***
## Wednesday 2/16/22

#### 1. [Build Tower](https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/typescript) Using ``Typescript``

```
```


***
#### 2. [Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/typescript) Using ``Typescript``

```
```


***
#### 3. [Equal Sides Of An Array](https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/typescript) Using ``Typescript``

```
```


***
#### 4. [Meeting](https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/typescript) Using ``Typescript``

```
```


***
#### 5. [Street Fighter 2 - Character Selection](https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/typescript) Using ``Typescript``

```
```


***
## Thursday 2/17/22

#### 1. Watch [Object Oriented Programming - The Four Pillars of OOP](https://www.youtube.com/watch?v=1ONhXmQuWP8)


***
#### 2. Watch [Abstract Classes vs Interfaces](https://www.youtube.com/watch?v=Lnqmde9LP74)


***
#### 3. Read [Abstract Classes](https://sbcode.net/typescript/abstract_classes/)


***
***






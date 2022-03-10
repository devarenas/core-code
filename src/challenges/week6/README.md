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

[My solution](https://github.com/devarenas/movie_typescript)

***
#### 2. [Readme](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week6/Exercices/E2/desc/ED2W6.md)


***
#### 3. [Interfaces](https://docs.microsoft.com/en-us/learn/modules/typescript-implement-interfaces/)

## Implement interfaces in TypeScript

JavaScript doesn't support interfaces. In TypeScript, you can use interfaces as you would in traditional object-oriented programming. You can also use interfaces to define object types.

To install Typescript use
```
npm install -g typescript
```
## Overview of interfaces in TypeScript

### What is an interface

You can use interfaces to describe an object, naming and parameterizing the object's types, and to compose existing named object types into new ones.

This simple interface defines the two properties and a method of an ``Employee`` object.

```
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}
```

Notice that the interface doesn't initialize or implement the properties declared within it. That's because the only job of an interface is to describe a type.

This example implements the interface by declaring a variable of the type ``Employee```.

```

let employee: Employee = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'

```

Type checking ensures that the number ``10`` is not assignable to ``employee.firstName`` because it is expecting a ``string``.

Because TypeScript has a [structural](https://www.typescriptlang.org/play#example/structural-typing) type system, an interface type with a particular set of members is considered identical to, and can be substituted for, another interface type or object type literal with an identical set of members.

### Reasons for using an interface in TypeScript

Interfaces are often the key point of contact between any two pieces of TypeScript code
You can use an interface to:
* Create shorthand names for commonly used types.
* Drive consistency across a set of objects because every object that implements the interface operates under the same type definitions. 
* Describe existing JavaScript APIs and clarify function parameters and return types.

### How is an interface different from a type alias?

The ``Employee`` interface above can also be expressed as a type alias using the ``type`` keyword:
````
type Employee = {
    firstName: string;
    lastName: string;
    fullName(): string;
}
````
The key distinction is that a type alias cannot be reopened to add new properties whereas an interface is always extendable. Also, you can only describe a union or tuple using a type alias.

## Declare and instantiate an interface in TypeScript

Properties can be required, optional, or read only.
* Required: ``firstName: string;``
* Optional: ``firstName?: string;``
* Read Only: ``readonly firstName: string;``

## Extend an interface in TypeScript

Interfaces can extend each other. This enables you to copy the members of one interface into another, giving you more flexibility in how you separate your interfaces into reusable components.

When extending an interface with one or more interfaces, these rules apply:
* You must implement all the required properties from all interfaces.
* Two interfaces can have the same property if the property has the exact same name and type.
* If two interfaces have a property with the same name but different types, you must declare a new property such that the resulting property is a subtype of both interfaces.

## Other ways to use interfaces in Typescript

### Create indexable types

You can use interfaces that describe array types that you can index into.

Indexable types have an index signature that describes the type you can use to index into the object, along with the corresponding return types when indexing.

For example, the ``IceCreamArray`` interface declares an index signature as a ``number`` and returns a ``string`` type. This index signature states that ``IceCreamArray`` is indexed with a number and it will return a string.

````
interface IceCreamArray {
    [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr);
````

### Describe a JavaScript API using an interface
A common pain point for JavaScript and TypeScript developers alike is working with external JavaScript libraries. You can use an interface to describe existing JavaScript APIs and clarify function parameters and return types. The interface provides you with a clear understanding of what an API is expecting and what it will return.

The fetch API is a native JavaScript function that you can use to interact with web services. This example declares an interface called Post for the return types in a JSON file and then uses fetch with async and await to generate a strongly typed response.

```
const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();
```

``async``/``await`` helpful links:
* [Beginner's Series to JavaScript](https://docs.microsoft.com/en-us/shows/Beginners-Series-to-JavaScript/?WT.mc_id=beginner-c9-niner)
* [Using async/await in JavaScript with long running operations](https://www.youtube.com/watch?v=CjOVvs61zAQ&feature=youtu.be)
* [async/await for managing promises](https://www.youtube.com/watch?v=YwmlRkrxvkk)
* [Demo: async/await for managing promises](https://www.youtube.com/watch?v=XLxIqq3HlL8)





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






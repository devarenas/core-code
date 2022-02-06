# Challenges week 4 - npm,npx & Typescript


## Monday 1/31/22

#### 1. Check [this](https://www.youtube.com/watch?v=sXQxhojSdZM) video
* Talked about Regular Expressiones or Regex
* Great website to learn and test https://regexr.com/

***
#### 2. Follow [this](https://www.youtube.com/watch?v=909NfO1St0A) video
* Video about Regular expressions
* Provided a website https://regex101.com/ to test and learn about Regex

***
#### 3. Follow [this](https://dev.to/codebubb/javascript-regex-exercises-01-5078) guide
* Provided some exercises with regular expressions
```
let ex1 = "The quick brown fox jumped over the lazy dog";
let regex1 = /(^|\s)[a-zA-Z]{3}($|\s)/g;
console.log(ex1.match(regex1));

//remove all numbers from string
let ex2 = "A1B2C3D4E5F6G7H8I9J10";
let regex2 = /[0-9]/g;
console.log(ex2.replace(regex2,""));

//find the price value
let ex3 = "The salad costs $9.99";
let regex3 = /\$\d{1,3}\.\d\d/;
console.log(ex3.match(regex3)[0]);

//find phone number in the string
let ex4 = "Contact customer support on 0800 300 500";
let regex4 = /(\d{3,4}\s?){3}/g;
console.log(ex4.match(regex4));

//get email address from string
let ex5 = "You contact me on Twitter @codehubb or james@juniordevelopercentral.com";
let regex5 = /\S+@\S+\.\S+/;
console.log(ex5.match(regex5)[0]);
```

***
#### 4. Check [this](https://www.youtube.com/watch?v=RvYYCGs45L4) video
* Promise: Manages a async value that can be used in the future
```
//create
const ride = new Promise((resolve, reject) => {
    if (arrived) {
        resolve('driver arrived');
    } else {
        reject ('driver bailed');
    }

});

//consume
ride
    .then(value => {
        console.log(value);
        //driver arrived
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('all settled!')
    });
```

***
#### 5. Follow [this](https://www.youtube.com/watch?v=DHvZLI7Db8E) video
* Talked about promies
* Shows to useful options Promise.all() and Promise.race()

```
let p = new Promise((resolve, reject) => {
    let a = 1+1;
    if(a == 2){
        resolve("Success")
    }else{
        reject("Failed")
    }
})

p.then((message) => {
    console.log("this is in the then "+ message);
})
.catch((message) => {
    console.log("this is in the catch "+ message);
})
```

```

//OTHER EXAMPLE
const recordVideoOne = new Promise ((resolve, reject) =>{
    resolve("Video 1 Recorded")
});

const recordVideoTwo = new Promise ((resolve, reject) =>{
    resolve("Video 2 Recorded")
});

const recordVideoThree = new Promise ((resolve, reject) =>{
    resolve("Video 3 Recorded")
});


Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
});


Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
});

```


***
#### 6. Check [this](https://www.youtube.com/watch?v=rKK1q7nFt7M) video
* Promises
* Async
* Await

```
//PROMISES, ASYNC Y AWAIT
const datos =[{
    id: 1,
    title: 'Iron Man',
    year: 2008
},{
    id: 2,
    title: 'Spiderman: Homecoming',
    year: 2017
},{
    id: 3,
    title: 'Avengers: Endgame',
    year: 2019
}];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(datos);
        }, 1500);
    })
}

getDatos().then((datos) => console.log(datos));

async function fetchingData () {
    try {
        const datosFetched = await getDatos();
        console.log(datosFetched);
    } catch (error) {
        console.log(error);
        
    }
}

fetchingData();
```

***

## Tuesday 2/1/22

#### 1. [This](https://www.typescriptlang.org/docs/handbook/intro.html) link is nice to have and read
* Saved it



***
#### 2. [Typescript object type](https://typescript-exercises.github.io/#exercise=1)

```

export interface User {
    name: string;
    age: number;
    occupation: string;
};

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);

```

***
#### 3. Read [this](https://blog.logrocket.com/types-vs-interfaces-in-typescript/)
Differences between interface and type
* interface:
    * Declaration merging
    * extends and implements

* type:
    * can create intersection with 2 interfaces (use &)
    * can create union with 2 interfaces (use |)
    * Tuples using []


***
#### 4. [Typescript union types](https://typescript-exercises.github.io/#exercise=2)

```

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);

```


***
#### 5. [Typescript in operator](https://typescript-exercises.github.io/#exercise=3)

```
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string;
    if ("role" in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
```

***
#### 6. [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836)

```
function findOdd(A) {
    let text = A;
    const charCounter = {};

    text.forEach( (char) => {
        charCounter[ char ] = ( charCounter[ char ] || 0 ) + 1;
    });

    let odd = 0;
    for ( let counter in charCounter){
        if ( charCounter[counter]%2 !== 0) odd = counter;
    }
    
    return Number(odd);
}
```


***
#### 7. [Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001)

```
function spinWords(string){
    text = string.split(" ")
    result = "";
    text.forEach( (char, i) => {
        if (char.length >= 5){
            char = char.split("");
            char = char.reverse();
            text[i] = char
            let reverseWord = "";
            char.forEach( (reverse) => {
                reverseWord = reverseWord+reverse; 
            })
        text [i] = reverseWord;
        reverseWord = "";

        }

    })  

    text.forEach((join) => {
        result =  `${result} ${join}`;
    })
    return result.trim();
}

```


***

## Wednesday 2/2/22

#### 1. [Array.diff](https://www.codewars.com/kata/523f5d21c841566fde000009)
```
function arrayDiff(a, b) {
    let text = a
    for( var i = 0; i < a.length; i++){ 
        for (var j = 0; j < b.length; j++){
            if ( a[i] === b[j]) {
            text.splice(i, 1);
            i--;
            }
        }  
    }
    return text;
}

```

***
#### 2. [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83)

```
function createPhoneNumber(numbers){
    let phoneNumber = "";
    let number = numbers;
    number.splice(0,0, "(");
    number.splice(4,0, ") ");
    number.splice(8,0, "-");

    number.forEach( (char) => {phoneNumber = phoneNumber+char})
    return phoneNumber;
}
```

***
#### 3. Watch [this](https://www.youtube.com/watch?v=m_MQYyJpIjg)

##### Object Oriented Programming (OOP) 

* Object: A thing from the real world Also name as entity.
    * Abstraction: simplify reality
        * Class: a template for creating objects
        * Attributes, Fields, Properties
        * Operations, Methods = actions
        * Object is an instance of a Class => instantiation
        * Method New is called constructor
    * Encapsulation: Hiding data and complexity
    * Inheritance: A class can derive ts methods and properties from another class
        * Base class
        * Super Class > Subclass
    * Polymorphism: A class can implement and inherited method in its own way


***
#### 4. Watch [this](https://www.youtube.com/watch?v=08CWw_VD45w)

FP vs OOP

##### FP
* Can be named almost anything
* Any number of parameters can be passed
* Can return almost anything

* Functions only
* No side effects
* Fixed control flow

* Functional Programming is a method of problem solving
* Pure Functions
* Strict control flow (input>Output)


##### OOP
* Claess
	* Contain Attibutes & Methods
	* Produce "objects"

It depends what is the better to use based on the type of solution/project you need to build

***
#### 5. Read [this](https://medium.com/from-the-scratch/oop-everything-you-need-to-know-about-object-oriented-programming-aee3c18e281b)


OOP: Everything you need to know about Object Oriented Programming

Basic Terminologies:
* Object: It’s the instance of a class/ it’s the working entity of a class.
* Class: It is a template or blue print about the capability of what an object can do.
* Method: The behaviours of a class. It tells what a method can do.
* Instance: Object and Instance both are same with small difference.

OOPs Concepts:
* Encapsulation
* Abstraction
* Polymorphism
* Inheritance

***
#### 6. Read [this](https://naveenkumarkoppala.medium.com/typescript-oops-c327678744b0)

##### TypeScript — OOP’s Concepts

It is the process of representing the real time entities into programming to provide a solution for a problem in the form of application.
* Classes : A class is a blueprint for creating objects.
```
class class_name { 
   //class scope 
}

```

* Object: Real time entity is nothing but an Object.
* Inheritance: It is the process of a class extends another class to reuse the existing resource. The class whose features are inherited is known as superclass.
The class that inherits the other class is known as a subclass.
* constructor: If we want to create an object, then we have to use constructor. If we don’t have a constructor, then a default constructor will provide by typescript.
* Polymorphism: It is the ability of an entity to provide multiple functionalities based on different inputs is know as polymorphism.
	* In TS we implement polymorphism method overloading, method overriding.
	* Method Overloading : Methi overloading is a mechanism or ability to create multiple methods with the same name but different parameter types and return type.
	* Method Overriding : Method Overriding is a process of overthrowing a method of super class by method of same name and parameters in sub class.
Method Overriding is useful when sub class wants to modify the behavior of super class for certain tasks.
* Abstraction:
It is the process of providing only required details. We implement abstraction using interface and abstract class.
* Interface: An interface is a collection of static variables and unimplemented methods.
* Encapsulation: It is the process of binding the data its code together into a single unit.


***
#### 7. Read [this](https://rambabupadimi.medium.com/typescript-object-oriented-programming-7a6fd905d90e)

##### TypeScript — Object Oriented Programming

* Object-oriented programming is programming paradigm based on the concept of objects, which can contain data, in the form of fields, and code, in the form of procedures.
* Classes: Class is user defined blueprint, it represents set of properties or methods that are common to all objects of one type.
* Inheritance: It is mechanism in which one object acquires all the properties and behaviours of parent object. You can reuse methods and fields of parent class.
* Abstract Class: It is class which that is declared abstract. Abstract classes are base classes from which other classes may be derived. It contains abstract and non-abstract methods.We can not initiate directly to the abstract classes.
* Interface: In typescript interfaces represents object type or structure, below we can define wheel structure
* Interface — class type: Like in other languages java, c# etc, In typescript also class can implement interface. Interface contains only abstract methods these methods does not have body.
* Public, Private and Protected Modifiers:
    * Typescript default variables are public, we can access variables outside the class.
    * If we declare variable private, we can not access variable outside the class.
    * In inheritance if we declare parent class variables as private, we cant access variables in subclass. To access variables in subclass we need to make it as protected in parent class.
* Static variables & methods:
    * Static variables are defined using static keyword, To access static variable no need to create object for class. we can directly access like this classname.variable name. The static variable gets memory only once in the class area at the time of class loading.
    * Any function have prefix static that function treated as static function. Inside static function we can access only static variables. we can directly call static methods like this. classname.method name
* Singleton :
It is creational design pattern. Its main aim is exists only one instance to the class through out life of application. To create singleton object we make it constructor as private, so that we cant create new instance to the class.

* readonly, optional parameters :
	* If you put prefix readonly to variable we can access the value inside and outside of the class, but we cant change the value. we can assign value to variable directly at the time of declare variable or inside class constructor.
	* If you want to make parameter is optional just put (?) after variable name.
* constructor , super :
	* Constructor is special method which is used to initialize objects. It is called when the class object is created.
	* Super is used to call parent class constructor method and we can send parameters data from subclass to parent class constructor using super.
    
    
    
***
## Wednesday 2/2/22

#### 1. [Detect Pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)

```
function isPangram(string){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let counter = 0;
    result = false;


    let copy = string;
    let reg = /\s/g;
    copy = copy.toLowerCase();
    copy = copy.replace(reg, "");
    alphabet = alphabet.split("");

    alphabet.forEach((char) => {    
        if(copy.includes(char)){
        counter++;
    }
    })
if(counter >=26){
    result = true
}

return result;
}
```
    
***
#### 2. [Find the missing letter](https://www.codewars.com/kata/5839edaa6754d6fec10000a2)
```
function findMissingLetter(array){
    let lettersArray = array;
    let codeASCII = lettersArray[0].charCodeAt(0);
    let missingLetter = "";

    lettersArray.forEach((char) => {
        if(codeASCII === char.charCodeAt(0)){
            codeASCII++;
        } else {
            missingLetter = String.fromCharCode(codeASCII);
        return;
        }
}) 
return missingLetter;
}
```

***
#### 3. [Find the unique number](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)

```
function findUniq(arr) {
    let uniq = 0;
    let numberArray = arr;
    let objectCounter = {};
    numberArray.forEach( (char) => {
        objectCounter[ char ] = ( objectCounter[ char ] || 0 ) + 1;
    });
    for ( let c in objectCounter){
        if (objectCounter[c] === 1) {
            uniq = c
        }    
    }
    return Number(uniq);
}

```

***
#### 4. [Reverse or rotate?](https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991)

```
function revrot(str, sz) {
    let chunkResult = "";
    if(sz <= 0 || str === "") return chunkResult;
    let chunk = str;
    let chunk2 = chunk;
    let copyChunk = chunk;
    let chunkArray = [];
    

    for(i=0, length = chunk.length; i<length; i+=sz){
        if(chunk2.length >= sz){
            copyChunk = chunk2.substring(0,sz);
            chunkArray.push(copyChunk);
            chunk2 = chunk2.slice(sz);
        }else{
        }
    
}

for(j=0, length1 = chunkArray.length; j<length1; j++){
    let test = chunkArray[j];
    let cubeSum = 0;
    for(i=0, length = test.length;i<length;i++){
        let num = 0;
        cubeSum = cubeSum + Math.pow(Number(test[i]),3);
    }
    
    if(cubeSum%2 === 0){
        test = test.split("");
        test.reverse();
        let reverse = ""
        test.forEach((char) =>{
            reverse = reverse+char
        })
        chunkResult = chunkResult + reverse;
    } else {
        let rotate = "";
        rotate = test.charAt(0)
        test=test.replace(test[0],"");
        test= test+rotate;
        chunkResult = chunkResult + test
    }
}
return chunkResult;
}

```

***
#### 5. [What's Your Poison?](https://www.codewars.com/kata/58c47a95e4eb57a5b9000094)
```
function find(rats) {
    let bottle = [];
    let conversion = "";
    let rat = {
    9: 0,    8: 0,    7: 0,    6: 0,
    5: 0,    4: 0,    3: 0,    2: 0,
    1: 0,    0: 0
    };

    rats.forEach ((char) =>{
        rat[char] = 1
    });

    for (let ratCount in rat){
        bottle.push(rat[ratCount]);
    };

    bottle.reverse();
    bottle.forEach((char) =>{
        conversion = conversion+char;
    });
    conversion = parseInt(conversion,2);
    return conversion;
}

```

***
#### 6. ✨Complete your 3rd [Core Challenge](https://corecode.notion.site/GitHub-Boost-Guide-167914056cff4522886a78756f659e47). This is one of the requirements for the certification, where you'll boost your dev professional-brand.

* https://github.com/devarenas

***
***



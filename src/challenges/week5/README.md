# Challenges week 5 - Typescript


## Monday 2/7/22

#### 1. Read [this](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) from ``The primitives: string, number and boolean`` to ```Differences Between Type Aliases and Interfaces section```

* JavaScript has three very commonly used primitives: string, number, and boolean
  * string represents string values like "Hello, world".
  * number is for numbers like 42. JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number.
  * boolean is for the two values true and false

* Array syntax: ``Array<number>`` or ``type[]``
* special type ``any``
* Use the compiler flag ``noImplicitAny`` to flag any implicit any as an error.
* Type Annotations on Variables: When you declare a variable using ``const``, ``var``, or ``let``, you can optionally add a type annotation to explicitly specify the type of the variable, TypeScript tries to automatically infer the types in your code.
* Functions: When you declare a function, you can add type annotations after each parameter ``function greet(name: string)``
* You can also retunr type annotations
``
function getFavoriteNumber(): number {
  return 26;
}
``

* Object Types: ``pt: { x: number; y: number }`` if you do not specify the type of te property will be consider as ``any``
  * optional properties addyng ``?`` after property name.
* Union Types: ``function printId(id: number | string)``  
  * TypeScript will only allow an operation if it is valid for every member of the union. The solution is to narrow the union with code


``

function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
``

* Type Aliases: A type alias is exactly that - a name for any type. The syntax for a type alias is:
``
type Point = {
  x: number;
  y: number;
};
``

* Interfaces: An interface declaration is another way to name an object type:
``
interface Point {
  x: number;
  y: number;
}
``

* Extending an interface:
``
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
``

* Extending a type via intersections:
``
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;
``

* Adding new fields to an existing interface:

``
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
``

* A type cannot be changed after being created



***
#### 2. [Square(n)](https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript) Sum Using `Typescript`
``
export function squareSum(numbers: number[]): number {
    let sum = 0;
    numbers.forEach((char: number) => {
        sum = sum + Math.pow(char, 2)
    })
    return sum;
}
``

***
#### 3. [Growth of a Population](https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript) Using ``Typescript``
``
export class G964 {

    public static nbYear = (p0: number, percent: number, aug: number, p: number) => {
        let n = 0
        let copyP0 = p0;
        while (copyP0 < p){
            copyP0 = copyP0 + (copyP0 * (percent/100)) + aug;
            n ++
        }
        return n;    
     }        
}

``

***
#### 4. [Mumbling](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript) Using ``Typescript``

``
export function accum(s: string): string {
    let wordResult = "";
    let newArray: string[] = [];
    let sSplit = s.toLowerCase().split("");

    sSplit.forEach((char: string, i: number) => {
        let element = ""
        for(let j=0; j<i+1; j++){
            element += char;
        }
    let first = element.charAt(0).toUpperCase()+element.slice(1);
    newArray.push(first);
    element = "";
    })

    newArray.forEach((char: string) =>{
        wordResult += char+"-";
    })

    wordResult = wordResult.slice(0,-1);
    return wordResult;
}

``

***
#### 5. [A wolf in sheep's clothing](https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/typescript) Using ``Typescript``

``
export function warnTheSheep(queue: string[]): string {
    let wolfPos = queue.indexOf("wolf");
    let frontPos = queue.length-1;
    let sheepPos = 0;
    let message = "";

    if(wolfPos === frontPos){
        message = "Pls go away and stop eating my sheep";
    } else {
        sheepPos = queue.length - (wolfPos+1);
        message = `Oi! Sheep number ${sheepPos}! You are about to be eaten by a wolf!`
}
    return message;
}

``

***
## Tuesday 2/8/22

#### 1. 


        
        

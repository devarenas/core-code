# Challenges week 2 - JavaScript


## Monday 1/17/22

#### 1. Follow the github course, you can find it [here](https://www.udacity.com/course/version-control-with-git--ud123)
* Completed

***
#### 2. Watch [this](https://www.youtube.com/watch?v=A37-3lflh8I) video
* Data types:
     * Bool => Boolean
     * Char => Character
     * String => String of characters
     * Int => Integer
     * Float => floating point value
     * Array => Group of data type
     
***
#### 3. Read [this](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
* Type of numbers:
  * Integers are floating-point numbers without a fraction. They can either be positive or negative.
  * Floating point numbers (floats) have decimal points and decimal places,
  * Doubles are a specific type of floating point number that have greater precision than standard floating point numbers
* note: number type for verly large integers, [BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt)

##### Converting to number data types
```
let myNumber = '74';
Number(myNumber);
```
* Arithmetic Operators
  |Operator|Name            |
  |:-: |         :-:        |
  | +  | Addition           |
  | -  | Substraction       |
  | *  | Multiplication     |
  | /  | Division           |
  | %  | Remainder (modulo) | 
  | ** | Exponent           |
  
  
* Operator Precedence
  * Follows same rules as Math

* Increment and Decrement operators
Sometimes you'll want to repeatedly add or subtract one to or from a numeric variable value. This can be conveniently done using the increment (++) and decrement (--) operators. You can only increment an existing variable.

* Assignment operators
  |Operator|Name                    |
  |:-:  |         :-:               |
  | =   | assigment                 |
  | +=  | addition assignment       |
  | -=  | Substraction assignment   |
  | \*= | Multiplication assignment |
  | /=  | Division assignment       | 
  
* Comparison Operators
  |Operator|Name                    |
  |:-:  |         :-:               |
  | === | Strict equality           |
  | !== | Strict-non-equality       |
  | <   | Less than                 |
  | >   | Greater than              |
  | <=  | Less than or equal to     |
  | >=  | Greater than or equal to  |
  
  
***
#### 4. Create an account in [Codewars](https://www.codewars.com/users/sign_in)
* Completed

## Tuesday 1/18/22

#### 0. Watch [this](https://www.youtube.com/watch?v=cEBkvm0-rg0) video
* Tips for Google search
    * Use quotes => "search"
    * site:url search in an specific website => site:apple.com
    * use - to exclude a word => -exclude
    * after: to find after year of post => after:2000
    * before: to find before yerar of post => before:2020
    * year..year to find between two years => 1999..2005
    * | to look one or the another => a | b
    * (|) to group and add another value to the search => (a|b)c
    * \* Wildcard to find all results along with what I am looking for=> how to make * videos
    * Filetype: to find specifics type of file => filetype:PDF
    * related: to find similiar websites => related:angular.io
    * cache: Returns most recent cache version of a website => cache:apple.com

***
#### 1. https://www.codewars.com/kata/50654ddff44f800200000004

```
function multiply(a, b){
  let result = a * b
  return result
}

```

***
#### 2. https://www.codewars.com/kata/572b6b2772a38bc1e700007a

```

function uniTotal (string) {
  let sum=0;
    for(i=0, length = string.length; i<length;i++){
        let code = string.charCodeAt(i);
        sum = sum+code;
    }
    return sum;  
}

```

***
#### 3. https://www.codewars.com/kata/55ad04714f0b468e8200001c

```

function getChar(c){
      let character = String.fromCharCode(c);
    return character
}

```

***
#### 4. https://www.codewars.com/kata/551f37452ff852b7bd000139

```
function addBinary(a,b) {
    let decimal = a+b;
    let binary = decimal.toString(2);
    return binary
}

```

***
#### 5. https://www.codewars.com/kata/5ad0d8356165e63c140014d4
```

function finalGrade (exam, projects) {
    let result;
    if(exam > 90 || projects > 10){
        result = 100
    }else if (exam > 75 && projects > 4){
        result = 90
    }else if (exam > 50 && projects > 1){
        result =75;
    }else{
        result = 0;
    }
    return result;
}

```

***
## Wednesday 1/19/22


#### 1. https://www.codewars.com/kata/57e92e91b63b6cbac20001e5
```
function dutyFree(normPrice, discount, hol){
    let totalDiscount = (normPrice*discount)/100;
    let total = Math.floor(hol/totalDiscount);

    return total;
}

```

***
#### 2. https://www.codewars.com/kata/5b853229cfde412a470000d0
```
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let sonDouble = sonYearsOld*2;
    result = Math.abs(dadYearsOld-sonDouble);

    return result;
}
```

***
#### 3. https://www.codewars.com/kata/5f77d62851f6bc0033616bd8
```
function validSpacing2(s) {
    const reg = /(^\s|\s$|\s{2,})/;
    return !(reg.test(s));
}

```

***
#### 4. https://www.codewars.com/kata/57eae65a4321032ce000002d
```
function fakeBin(x) {
    let bin = "";
    const char = x.split('');
    for(i=0, length = char.length; i< length; i++){
        if(char[i] < 5){
            bin = bin+"0";
        }else{
            bin = bin+"1";
        }
    }
    return bin;
}

```

***
## Thursday 1/20/22


#### 1. https://www.codewars.com/kata/57faece99610ced690000165
```
function remove(string) {  
    let reg = /!$/;
    while(reg.test(string)){
        string = string.slice(0,-1);
    }
    return string;
  }
```

***
#### 2. https://www.codewars.com/kata/5547929140907378f9000039
```
function shortcut (string) {
    let reg = /a|e|i|o|u/;
    while(reg.test(string)){
        string = string.replace(reg,"");
    } 
    
    return string;
}

```

***
#### 3. https://www.codewars.com/kata/5672a98bdbdd995fad00000f
```
const rps = (p1, p2) => {
    if(p1 == "scissors" && p2 == "rock") return "Player 2 won!";
    if(p1 == "scissors" && p2 == "paper") return "Player 1 won!";
    if(p1 == "scissors" && p2 == "scissors") return "Draw!";
    if(p1 == "rock" && p2 == "paper") return "Player 2 won!";
    if(p1 == "rock" && p2 == "scissors") return "Player 1 won!";
    if(p1 == "rock" && p2 == "rock") return "Draw!";
    if(p1 == "paper" && p2 == "rock") return "Player 1 won!";
    if(p1 == "paper" && p2 == "scissors") return "Player 2 won!";
    if(p1 == "paper" && p2 == "paper") return "Draw!";
};

```

***
#### 4. https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
```
function persistence(num) {
    multiply = 1;
    numString = num.toString();
    let counter = 0;
    while(numString.length > 1){
        numString.split("").forEach(c => multiply *= parseInt(c));
        numString = multiply.toString();
        multiply = 1;
        counter ++;
    }
    return counter;
}

```

***
#### 5. ✨Complete your 1st [Core Challenge](https://corecode.notion.site/Mission-Statement-666f515d76084c8e8c996b473b4d6317). This is one of the requirements for the certification, where you'll boost your dev professional-brand.

I'm Carlos, a Systems Engineer Student. I work in at LogMeIn providing L1 technical support. I've not programming background for now. I want to become a full stack developer. I want to work building solutions for a company as Netflix. I am a very responsible person and love help others. I believe team work is important to build great things. 



 
  

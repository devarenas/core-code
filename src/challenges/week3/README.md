# Challenges week 3 - Javascript


## Monday 1/24/22

#### 1. https://www.codewars.com/kata/5266876b8f4bf2da9b000362

```
function likes(names) {
    let message = "";
    if (names.length == "0"){
        message = 'no one likes this';
    } else if (names.length == 1) {
        message = `${names[0]} likes this`;
    } else if (names.length == 2){
        message = `${names[0]} and ${names[1]} like this`;
    } else if (names.length == 3){
        message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length >= 4){
        let counter = names.length-2;
        message = `${names[0]}, ${names[1]} and ${counter} others like this`;
    }

    return message;
}

```


***
#### 2. https://www.codewars.com/kata/526571aae218b8ee490006f4
```
var countBits = function(n) {
    let binary = n.toString(2);
    const counter = binary.split('').filter(char => char == "1").length
    return counter;
}

```


***
#### 3. https://www.codewars.com/kata/54b724efac3d5402db00065e
```

decodeMorse = function(morseCode){
    let splitone = morseCode.trim().split("   ");
    let translate = ""
    for(i=0, length = splitone.length;i<length;i++){
        let counter = splitone[i].split(" ").length;
        let words = splitone[i].split(" ");
        for(j=0, length2 = counter;j<length2;j++){
                translate += MORSE_CODE[words[j]];
            
        }
        translate += " ";
    }
    return translate.trim();
}

```


***
## Tuesday 1/25/22

#### 1. https://www.codewars.com/kata/55c45be3b2079eccff00010f
```
function order(words){
    let wordSplit = words.split(" ");
    let numbers = [];
    let regex = /(\d+)/g;
    let orderedWord = "";
    for(i=0, length = wordSplit.length;i<length;i++){
        numbers.push(wordSplit[i].match(regex)); 
    }
    numbers.sort();
    for(i=0, length = numbers.length; i<length;i++){
        for(j=0, length2 = wordSplit.length; j<length2;j++){
            if(wordSplit[j].match(numbers[i])){
                orderedWord = orderedWord + wordSplit[j]+ " ";
            }
        }
    }
    return orderedWord.trim();
}

```

***
#### 2. https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
```
function duplicateCount(text){
    text = text.trim().toLowerCase().split('');
    const charCounter = {};

    text.forEach( (char) => {
        charCounter[ char ] = ( charCounter[ char ] || 0 ) + 1;
    });

    let duplicate = 0;
    for ( let counter in charCounter){
        if ( charCounter[counter] > 1) duplicate++;
    }

    return duplicate;
}

```

***
#### 3. https://www.codewars.com/kata/520b9d2ad5c005041100000f
```
function pigIt(str){

    str = str.split(" ");
    reg = /\w/g;
    newStr = "";
    str.forEach( word => {
        if(word.match(reg)) {
            let char = word[0];
            word = word.replace(word[0], "");
            word = word+char+"ay";
            newStr = `${newStr} ${word}`;
        } else {
            newStr = `${newStr} ${word}`;
        }
    })
    return newStr.trim();
}

```

***
## Wednesday 1/26/22

#### 1. https://www.codewars.com/kata/52774a314c2333f0a7000688
```
function validParentheses(parens) {
    let answer = false;
    let counter = 0;
    let reg = /^\)| \($/;
    let parensValidate = "";
    if(parens.match(reg)){
        return answer;
    } else{
        parensValidate = parens.split("");
        parensValidate.forEach( char => {
            if(counter == -1){
                return answer;
            }else if(char == "("){
                counter ++;
            }else if (char == ')'){
                counter --;
            }
        })
    }
    if(counter == 0){
        answer = true;
    }else{
        answer = false;
    }
    
    return answer;
}

```

***
#### 2. https://www.codewars.com/kata/517abf86da9663f1d2000003
```
function toCamelCase(str){
let word = "";

if(str.match("-")){
    word = str.split("-");

}else{
    word = str.split("_");
}
let result = word[0];

for(i=1, length=word.length;i<length;i++){    
    let firstLetter = word[i][0].toUpperCase();
    word[i] = word[i].replace(word[i][0], firstLetter)
    result += word[i];
}

return result;
}
```

***
#### 3. https://www.codewars.com/kata/54e6533c92449cc251001667
```
var uniqueInOrder=function(iterable){
    let text;
    const result = [];
    if(iterable.length === 0) return result;
    if(Array.isArray(iterable)){
        let text = iterable;
        result.push(text[0]);
        text.forEach((char, i) => {
        if(text[i+1] == text[i] || text[i+1] == undefined){
        }else{
            result.push(text[i+1]);
        }
    });
    } else{
        let text = iterable.split("");
        result.push(text[0]);
        text.forEach((char, i) => {
        if(text[i+1] == text[i] || text[i+1] === undefined){
        }else{
            result.push(text[i+1]);
        }
    });
}


    return result;
}


```

***
## Thursday 1/27/22

#### 1. https://www.codewars.com/kata/57ea70aa5500adfe8a000110
```
function foldArray(array, runs){
    arrayCopy = array;  
    let result = [];
    for(c=0; c < runs; c++){
        if(arrayCopy.length%2 !== 0){
            let size = arrayCopy.length
            let halfSize = Math.round(size/2);
            let newArray = new Array(halfSize);
            newArray[halfSize-1] = arrayCopy[halfSize-1]
            for(i=1, j=size-1, length = halfSize-1; i<=length; i++){
                let sum = arrayCopy[i-1]+arrayCopy[j];
                newArray[i-1] = sum;
                j--;
            }
        result = newArray;
        arrayCopy = result;
        } else {
            let size = arrayCopy.length
            let halfSize = Math.round(size/2);
            let newArray = [];
            for(i=0, j=size-1; i<halfSize; i++){
                let sum = arrayCopy[i]+arrayCopy[j];
                newArray.push(sum);
                j--;
        }
        result = newArray;
        arrayCopy = result;
        }
    }

    return result;
}

```

***
#### 2. https://www.codewars.com/kata/5848565e273af816fb000449

```

var encryptThis = function(text) {
    if (text.length === 1) return text.charCodeAt(0).toString();
    text = text.split(" ");  
    
    let ASCII = text.map(function (word){
        let result = "";
        if (word.length === 1) {
            return word.charCodeAt(0).toString();
    
        } else {
            word = word.split("");
            console.log(word)
        
            let length = word.length;
            let second = word[1]
            let last = word[length-1]
            word[1] = last;
            word[length-1] = second;
            word[0] = word[0].replace(word[0], word[0].charCodeAt(0))
        
            word.forEach( char => result += char);
    
        }
        return result;
    });
    
    let final = ""
    ASCII.forEach( char => final += char+" ")
    
    return final.trim(); 
}

```

***
#### 3. https://www.codewars.com/kata/53368a47e38700bd8300030d
```
function list(names){
    array = names;
    if(array.length === 0) return "";
    if(array.length === 1) return array[0].name;
    if(array.length === 2) return array[0].name+" & "+array[1].name;

    result = ""
    for(i=0, length = array.length-1; i<length; i++){
        console.log(array[i].name)
        result = result + array[i].name+", ";
        
    }
    result = result.trim().slice(0, -1);
    result = result+" & "+array[array.length-1].name;
    return result;    
}
```

***
#### 4. ✨Complete your 2nd [Core Challenge](https://corecode.notion.site/LinkedIn-Boost-Guide-5974abb0f917458ea235d3288ac6c7d3). This is one of the requirements for the certification, where you'll boost your dev professional-brand.

* https://www.linkedin.com/in/carlosarenasg


***
***







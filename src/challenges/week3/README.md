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


```




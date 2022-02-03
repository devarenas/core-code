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

#### 1. 


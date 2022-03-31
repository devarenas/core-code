# Challenges week 9 - React & Node

## Monday 3/7/22

#### 1. Watch [this](https://www.youtube.com/watch?v=N3AkSS5hXMA) video

### What is React?

* React is a JS library. It was developed at Facebook on 2011.
* React is the more popular (comparing with Angular and Vue)
* React is based on component architecture
* Every React app has at least 1 component, we can say React is a tree of components
* Each component is piece of UI
* Is built as JS ass
  * ``class`` wich has state and render.
  * ``state`` data to display with when component is render
  * ``render`` responsible for how the UI should look like 

* React Element > Virtual DOM
* Dom Element > Real DOM

* React > reacts to state changes



***
#### 2. Watch [this](https://www.youtube.com/watch?v=hQAHSlTtcmY) video

Tutorial completed. Result [here](https://github.com/devarenas/react-todo)

***
#### 3. [React kata](https://www.codewars.com/kata/5a95947f4a6b342636000173)

***
## Tuesday 3/8/22

#### 1. Read the following resources about Node.JS and explain what's Node.JS in your own words:
* [Resource 1](https://nodejs.dev/learn)
* [Resource 2](https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/)  (You can use any other resource of your choice.)

### Node.js

Node.js is a program or platform that allows to use JavaScript out of a browser to build apps with that language.

* Node.js has thousands of libraries to help get to work easier. They are managed with ``npm`` (Node Package Manager)


Hello world (Web server example) with Node.js 
```
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```


***
#### 2. Answer the question: What is the V8 Javascript Engine? (Use your own words)
* It is the one in charge to complete code translation into machine code and optimize it so PC can read code.

***
#### 3. Answer the question: What is NVM and Why is it useful for Node.JS developers?
* The Node Version Manager (NVM) is a program in charge to manage Node.JS versions
* It is helpful whenever we do need to ger +1 node.js version on our operating system so we can decide what version to use.


***
#### 4. Learn about the Node.JS module system, you can start [here](https://nodejs.org/api/modules.html).

***
#### 5. Read about the different types of Node.JS modules
* [resource](https://lenguajejs.com/automatizadores/introduccion/commonjs-vs-es-modules/)

In the Node.js module system, each file is treated as a separate module. There are different types of modules.

* ESModules
* CommonJS 
* AMD (Asynchronous Module Definition) 
* IIFE (Immediately-invoked function expression)


***
#### 6. Explain the differences between ESModules and CommonJS modules

### ESModules
* Modules are asynchronous, however are compatible with synchronous modules.
* Standard for browsers
* syntax is much more readable compared to ``require()``.
* Older Node.js versions don’t support ES modules

```
// module.js
export const data = 42;
export const method = () => console.log("Hello");

// index.js
import { data, method } from "./module.js";

```

## CommonJS modules
* Default for Node.js
* Modules are synchronous
* offers flexibility with module imports

```
// module-name.js
module.exports = {
  /* ... */
}

// index.js
const module = require("./module-name.js");
const package = require("package");

module.method();

```

***
#### 7. Create your own Local Node.JS module. The module must contain a function that calculates
the sum of two numbers. Use the previously created function in another file in any way.


### Module creation on operation.js file

![](https://github.com/devarenas/core-code/blob/main/src/images/first-module-2.PNG)

### Module importon app.js file

![image](https://github.com/devarenas/core-code/blob/main/src/images/first-module.PNG)


***
#### 8. Watch [this](https://www.youtube.com/watch?v=h-n_gyyNly8) video about the Client-Server architecture.

Completed

![](https://github.com/devarenas/core-code/blob/main/src/images/client-server-arc.PNG)

***
## Wednesday 3/9/22

#### 1. Watch [this](https://www.youtube.com/watch?v=s7wmiS2mSXY) video about what is an API.

#### What is an API?

Application Programming Interface (API)


It is the messenger to send the request and provide a response to us as a customer when interacting with an app.


***
#### 2. Answer the question: Are APIs only available on the Internet?

If we are talkng just about programming I would say, yes, that is the main idea, however you are able to work with API´s in a local enviroment with your frontend and backend applications (localhost)


Besides programming we are working all the time with "APIs" i.e: At the restaurant (waitress is our API)



***
#### 3. Learn what JSON is, you can start [here](https://www.youtube.com/watch?v=iiADhChRriM&pp=ugMICgJlcxABGAE%3D).

***
#### 4. Read about HTTP, [here](https://developer.mozilla.org/es/docs/Web/HTTP) you have a good place to start.

***
#### 5. Read about REST APIs, you can start [here](https://www.redhat.com/es/topics/api/what-is-a-rest-api).

***
## Thursday 3/10/22

#### 1. Learn about Express JS, try using the [official documentation](https://expressjs.com/), use any other resource if you like.

***
#### 2. Learn about Postman using [this](https://www.youtube.com/watch?v=VywxIQ2ZXw4) course.

***
#### 3. List 3 available postman alternatives.

***
#### 4. ✨ Complete your [Interview Prep Core Challenge](https://www.notion.so/Mock-Interviews-a997bd9a907c43e58530ffca517f4cae)


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
* It is helpful whenever we do need to geT 1+ node.js version on our operating system so we can decide what version to use.


***
#### 4. Learn about the Node.JS module system, you can start [here](https://nodejs.org/api/modules.html).

Node.js has two module systems: CommonJS modules and ECMAScript modules.

#### Enabling

By default, Node.js will treat the following as CommonJS modules:

* Files with a .cjs extension;
* Files with a .js extension when the nearest parent package.json file contains a top-level field "type" with a value of "commonjs".
* Files with a .js extension when the nearest parent package.json file doesn't contain a top-level field "type". Package authors should include the "type" field, even in packages where all sources are CommonJS. Being explicit about the type of the package will make things easier for build tools and loaders to determine how the files in the package should be interpreted.
* Files with an extension that is not .mjs, .cjs, .json, .node, or .js (when the nearest parent package.json file contains a top-level field "type" with a value of "module", those files will be recognized as CommonJS modules only if they are being required, not when used as the command-line entry point of the program).

#### Accessing main module

You can run ``require.main === module``

#### File modules
Without a leading '/', './', or '../' to indicate a file, the module must either be a core module or is loaded from a node_modules folder.

#### Folders as modules
The first is to create a package.json file in the root of the folder, which specifies a main module. An example package.json file might look like this:
```
{ "name" : "some-library",
  "main" : "./lib/some-library.js" }
```

#### Loading from node_modules folders
If the module identifier passed to require() is not a core module, and does not begin with '/', '../', or './', then Node.js starts at the directory of the current module, and adds /node_modules, and attempts to load the module from that location.


#### The module scope

* ``__dirname`` The directory name of the current module. This is the same as the ``path.dirname()`` of the ``__filename``
* ``__filename`` The file name of the current module. This is the current module file's absolute path with symlinks resolved. For a main program this is not necessarily the same as the file name used in the command line.

#### exports 
A reference to the module.exports that is shorter to type.


#### module
A reference to the current module, see the section about the module object. In particular, module.exports is used for defining what a module exports and makes available through require().

#### require (id)
* id ``<string>`` module name or path. Returns: ``<any>`` exported module content.


#### import commonJS examples
 
 ```
const Express = require("express");
const RequestHandler = require("./handlers/todos");
const {initializeDB} = require ("./lib/db")
const cors = require("cors");
 
 ```



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

#### JSON (JavaScript Object Notation)

* JSON is a data representation format
* Commonly Used for APIs and configs
* Lightweight and Easy to Read/Write (comparing with XML)
* Integrates Easily with most languages

#### JSON types

* Strings = "Hello World" "j"
* Numbers => 10 1.5
* Booleans => true false
* null => null
* Arrays => [1,2,3]
* Objects => {"key": "value"}

Jason document is define as ``docuementname.json``

#### JSON file example:

```

[
    {
        "name": "Big Corporation",
        "numberOfEmployees": 10000,
        "ceo": "Mary",
        "rating": 3.6
    },
    {
        "name": "Small Startup",
        "numberOfEmployees": 3,
        "ceo": null,
        "rating": 4.3
    }
]

```



***
#### 4. Read about HTTP, [here](https://developer.mozilla.org/es/docs/Web/HTTP) you have a good place to start.

#### Hypertext Transfer Protocol (HTTP)

It is an application layer protocol for the transmission of hypermedia documents, such as HTML.


It was designed for communication between browsers and web servers.

#### HTTP Access Control (CORS)

HTTP Inter-Site Requests (Cross-site HTTP Requests) are HTTP requests for resources belonging to a domain other than the domain of the resource that is making the request. For example, an HTML page on domain A ``http://domaina.example/`` makes a request for an image on domain B ``http://domainb.foo/image.jpg`` via the img element. Today, web resources use other sources very often, including CSS style sheets, images, scripts and other resources. HTTP Access Control allows web developers to control how their website responds to requests from other origins.


#### Proxies

Between the client and the server, there are also different devices that manage HTTP messages. Given the layered architecture of the Web, most of these devices only manage these messages at the lower protocol levels: transport layer, network layer or physical layer, thus being transparent to the HTTP application communications layer, in addition this increases communication performance.


* Client: The user agent is any tool that acts on behalf of the user. This function is performed in most cases by a web browser.
* The web server: On the other side of the communication channel, there is the server, which "serves" the data that the client has requested.

***
#### 5. Read about REST APIs, you can start [here](https://www.redhat.com/es/topics/api/what-is-a-rest-api).

#### API (Application Programming Interface)

It is a set of requirements that allows data communication between applications.


For that, the API uses HTTP requests responsible for the basic operations necessary for data manipulation.



The main requests are:

* ``POST`` create data on the server.
* ``GET`` read data on the host.
* ``DELETE`` delete the information.
* ``PUT`` update log.


An API is a set of definitions and protocols for building and integrating application software. It’s sometimes referred to as a contract between an information provider and an information user.


You can think of an API as a mediator between the users or clients and the resources or web services they want to get.


#### REST (Representational State Transfer)

It is a set of constraints used to make HTTP requests comply with the guidelines defined in the architecture.


Basically, the restrictions determined by the Rest architecture are:

* Client-server: Existing applications on the server and client must be separated.
* Stateless: the requests are made independently, that is, each one executes only a certain action.
* Cache: The API must use the cache to avoid recurring calls to the server.
* Uniform interface: it groups four other concepts in which it is determined that the resources must be identified, the manipulation of the resources must be through representation, with self-describing messages and using links to navigate through the application.


#### What is a Rest API?

A REST API (also known as RESTful API) is an API that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services. 


Then, when talking about Rest API, it means using an API to access back-end applications, so that communication is done with the standards defined by the Rest architecture style.


Understanding this topic is important, since this technology is used to facilitate communication between a back-end application and different forms of front-end presentations, that is, it is essential for the development of cross-platform applications.
 



***
## Thursday 3/10/22

#### 1. Learn about Express JS, try using the [official documentation](https://expressjs.com/), use any other resource if you like.

***
#### 2. Learn about Postman using [this](https://www.youtube.com/watch?v=VywxIQ2ZXw4) course.

***
#### 3. List 3 available postman alternatives.

***
#### 4. ✨ Complete your [Interview Prep Core Challenge](https://www.notion.so/Mock-Interviews-a997bd9a907c43e58530ffca517f4cae)


# Challenges week 8 - HTML & CSS

## Monday 2/28/22

#### 1. Watch [this](https://www.youtube.com/watch?v=XYTwYmOjqQs&ab_channel=RedStapler) video


### Evolution of Web Design 1990-2019

* 1990 first website was published
* 1992 first image was posted
* 1993 mosaic 1.0 first graphical website (MTV website)
* 1994 Netscape was launched presenting great website.
* 1995 HTML structure was adopted and JS was intruduced with interactive content
* 1996-1999 CSS1 was introduced
* 2000 animtations were introduced with flash 5 and ActionScript 1. CSS 3 was published
* 2001 SVG format was introduced (for images) can be written in xml.
* 2003 first dinamic content with Wordpress.
* 2004 CSS sprite was introduced using more images into 1 to show more visual content in a website.
* 2006 CSS prepocessor Sass was launched
* 2007 CSS grid layout was introduced.
* 2009 CSS flex box was introduced.
* 2010 responsive was introduced.
* 2011 with influence of windows 8 Bootstrap CSS framework was launched.
* 2012 media query track screen size and parallax scrolling was launched.
* 2014 3D yeare and WebGL was launched. Also GPU power using JS. CSS 3D
* 2015 HTML5 with HTML player.
* 2016 websites showed basis elements.
* 2017 - current symmetrical design, broken grid layout, animated background using video or WebGL.


***
#### 2. Create a webpage that prints your name to the screen.

![](https://github.com/devarenas/core-code/blob/main/src/images/website-name.PNG)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Carlos Arenas</h1>
</body>
</html>

```

***
#### 3. Create a webpage and set its title to "CoreCode Bootcamp".

![](https://github.com/devarenas/core-code/blob/main/src/images/website-title.PNG)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>CoreCode Bootcamp</title>
</head>
<body>
    <h1>Title practice (check web tab)</h1>
</body>
</html>

```



***
#### 4. Create a webpage that prints what you like the most about programming and give it a title of your choice.

![](https://github.com/devarenas/core-code/blob/main/src/images/website-programming.PNG)


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Programming</title>
</head>
<body>
    <h1>What do I like the most about Programming?</h1>
    <p>What I like the most about programming is developers are able to create whatever the want. The sky is the limit!</p>
</body>
</html>
```



***
## Tuesday 3/1/22

***
#### 1. Create a webpage that prints the numbers 1 - 10, each number being a different color. (No JS/TS)

![](https://github.com/devarenas/core-code/blob/main/src/images/website-numbers.PNG)

### HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>numbers</title>
    <link href="css/styles.css" rel="stylesheet">
</head>
<body>
    <header>
    <h1>Numbers with colors</h1>
    <h3 class="n1 line"> 1 </h3> 
    <h3 class="n2 line"> 2 </h3>
    <h3 class="n3 line"> 3 </h3>
    <h3 class="n4 line"> 4 </h3>
    <h3 class="n5 line"> 5 </h3>
    <h3 class="n6 line"> 6 </h3>
    <h3 class="n7 line"> 7 </h3>
    <h3 class="n8 line"> 8 </h3>
    <h3 class="n9 line"> 9 </h3>
    <h3 class="n10 line"> 10 </h3>
</header>
</body>
</html>
```

### CSS
```
.n1 {
    color: red
}

.n2 {
    color: blue
}

.n4 {
    color: green
}

.n5 {
    color: brown
}

.n6 {
    color: violet
}

.n7 {
    color: orangered
}

.n8 {
    color: greenyellow
}

.n9 {
    color: palevioletred
}

.n10 {
    color: green
}

.line{
    display:inline;
}
```



***
#### 2. Create a webpage that prints two lists with any information you want. One list should be an ordered list, the other list should be an unordered list.

![](https://github.com/devarenas/core-code/blob/main/src/images/website-list.PNG)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Lists</title>
    <link href="css/styles.css" rel="stylesheet">
</head>
<body>
    <h2>Action movies</h2>
    <h5>(Ordered List)</h5>
    <ol>
        <li>
            The Batman (2022)
        </li>
        <li>
            The Adam Project (2022)
        </li>
        <li>
            Spider-Man: No Way Home (2021)
        </li>
        <li>
            Dune (2021)
        </li>
        <li>
            Uncharted (2022)
        </li>
    </ol>

    <h2>Action movies</h2>
    <h5>(Unordered List)</h5>
    <ul>
        <li>
            Jai Bhim (2021)
        </li>
        <li>
            The Shawshank Redemption (1994)
        </li>
        <li>
            One Night in Miami (2020)
        </li>
        <li>
            Marriage Story (2019)
        </li>
        <li>
            Call Me by Your Name (2018)
        </li>
    </ul>
</body>
</html>

```



****
#### 3. Create a webpage that prints some random paragraphs [lorem ipsum](https://loremipsum.io/es/) and give them some titles using different header sizes.

![](https://github.com/devarenas/core-code/blob/main/src/images/website-paragraphs.PNG)
```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Paragraphs</title>
    <link href="css/styles.css" rel="stylesheet">
</head>
<body>
    <h1>Lorem Ipsum 1</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at. Nam aliquam sem et tortor consequat id porta nibh. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Sed libero enim sed faucibus turpis in eu mi bibendum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Aenean sed adipiscing diam donec adipiscing tristique. Sem nulla pharetra diam sit amet. Nibh ipsum consequat nisl vel pretium lectus quam. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Varius quam quisque id diam vel quam elementum. Nibh ipsum consequat nisl vel pretium. Facilisis leo vel fringilla est ullamcorper eget nulla. Dignissim convallis aenean et tortor at risus. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Mattis enim ut tellus elementum sagittis vitae et leo. Amet purus gravida quis blandit turpis cursus in hac. Tortor id aliquet lectus proin nibh nisl.
    </p>

    <h2>Lorem Ipsum 2</h2>
    <p>
        Sodales ut etiam sit amet. Amet consectetur adipiscing elit ut aliquam purus sit. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Tortor posuere ac ut consequat semper. Maecenas pharetra convallis posuere morbi leo. Eget lorem dolor sed viverra ipsum nunc. Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Tellus elementum sagittis vitae et leo duis ut diam quam. Nulla facilisi nullam vehicula ipsum a arcu. Faucibus turpis in eu mi bibendum neque egestas congue. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Quam id leo in vitae. Ut eu sem integer vitae justo eget magna fermentum iaculis. Ultricies mi quis hendrerit dolor magna eget est lorem. Id donec ultrices tincidunt arcu non sodales neque. Iaculis at erat pellentesque adipiscing.
    </p>

    <h3>Lorem Ipsum 3</h3>
    <p>
        Ut enim blandit volutpat maecenas volutpat. Nibh mauris cursus mattis molestie a iaculis. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Enim tortor at auctor urna nunc id. Egestas integer eget aliquet nibh praesent tristique magna sit. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Nibh cras pulvinar mattis nunc. Integer feugiat scelerisque varius morbi enim nunc. Diam sit amet nisl suscipit adipiscing bibendum est. Odio ut enim blandit volutpat maecenas volutpat blandit. In nulla posuere sollicitudin aliquam.
    </p>


    <h4>Lorem Ipsum 4</h4>
    <p>
        Id faucibus nisl tincidunt eget nullam non nisi. Nec dui nunc mattis enim ut tellus. Magna eget est lorem ipsum dolor sit amet consectetur. Lorem sed risus ultricies tristique nulla aliquet enim tortor. At erat pellentesque adipiscing commodo elit. Vestibulum sed arcu non odio euismod lacinia at quis risus. Morbi leo urna molestie at elementum eu facilisis sed odio. Purus in mollis nunc sed id semper risus in. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. A cras semper auctor neque vitae tempus. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Purus viverra accumsan in nisl nisi scelerisque. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Odio facilisis mauris sit amet massa vitae tortor. Vitae congue eu consequat ac. Suscipit tellus mauris a diam. Convallis a cras semper auctor neque. Curabitur vitae nunc sed velit dignissim sodales.
    </p>

    
    
</body>
</html>

```
***
## Wednesday 3/2/22

#### 1. Create some links to various search engines.

![](https://github.com/devarenas/core-code/blob/main/src/images/website-links.PNG)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Links</title>
    <link href="css/styles.css" rel="stylesheet">
</head>
<body>
    <h1>Website Links</h1>
 <a href="https://espanol.yahoo.com/?p=us">Yahoo Browser</a>
 <br>
 <a href="https://www.google.com/">Google Browser</a>
 <br>
 <a href="https://www.bing.com/">Bing Browser</a>
 <br>
 <a href="https://www.baidu.com/">Baidu Browser</a>
 <br>
 <a href="https://yandex.ru/">Yandex Browser</a>
 <br>

</body>
</html>
```

***
#### 2. Display five different images. Each image should have a title.

![](https://github.com/devarenas/core-code/blob/main/src/images/website-images.PNG)


### HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Links</Images>
    <link href="css/styles.css" rel="stylesheet">
</head>
<body>
    <img src="img/mini-cooper.png" class="size" alt="Mini Cooper"> 
    <img src="img/rav.jpg" class="size" alt="RAV"> 
    <img src="img/binary.jpg" class="size" alt="Binary"> 
    <img src="img/money.jpg" class="size" alt="Money"> 
    <img src="img/travel.jpg" class="size" alt="Travel"> 
</body>
</html>

```
### CSS
```

.size {
    width: 600px;
    height: 325px
}

```


***
#### 3. Display an image that when clicked will link to a website of your choice (should be opened in a new window).

![](https://github.com/devarenas/core-code/blob/main/src/images/website-link-image.PNG)

![](https://github.com/devarenas/core-code/blob/main/src/images/website-link-image2.PNG)
### HTML
```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Link + Images</title>
    <link href="css/styles.css" rel="stylesheet">
</head>
<body>
    <a href="https://www.mini.com.gt/es_GT/home.html" target="_blank">
    <img src="img/mini-cooper.png" class="size" alt="Mini Cooper"> 
    </a>
</body>
</html>

```

### CSS

```
.size {
    width: 1000px;
    height: 500px
}
```

***
## Thursday 3/3/22
#### 1. Use a website you created before and give some classes and identifiers to elements. Create some css for them.


![](https://github.com/devarenas/core-code/blob/main/src/images/website-styles.PNG)

### HTML

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Styles</title>
    <link href="css/styles.css" rel="stylesheet">
</head>
<body>
    <div id="d1" class="container">
        <h1 class="title">
            Titile with some styles
        </h1>
        <p class="title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at. Nam aliquam sem et tortor consequat id porta nibh. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Sed libero enim sed faucibus turpis in eu mi bibendum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Aenean sed adipiscing diam donec adipiscing tristique. Sem nulla pharetra diam sit amet. Nibh ipsum consequat nisl vel pretium lectus quam. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Varius quam quisque id diam vel quam elementum. Nibh ipsum consequat nisl vel pretium. Facilisis leo vel fringilla est ullamcorper eget nulla. Dignissim convallis aenean et tortor at risus. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Mattis enim ut tellus elementum sagittis vitae et leo. Amet purus gravida quis blandit turpis cursus in hac. Tortor id aliquet lectus proin nibh nisl.
        </p> 
        <img src="./img/mini-cooper.png" class="size" alt="Mini Cooper">       
    </div>
</body>
</html>

```

### CSS

```
div {
    width: 1200px;
    margin: auto;
    border: 5px solid black;
    background-color: bisque;
  }

.size {
    width: 1000px;
    height: 500px;
    align-items: center;
}

h1 {
    color: saddlebrown;
}

p  {
    background-color: lightblue;
}

```



***
#### 2. Create a website that using javascript, when you press a button will change the background to a random color.

![](https://github.com/devarenas/core-code/blob/main/src/images/website-random1.PNG)

![](https://github.com/devarenas/core-code/blob/main/src/images/website-random2.PNG)

### HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Random Color</title>
    <link href="css/styles.css" rel="stylesheet">
</head>
<body id="set">
 
    <button id="btn" onclick="setRandomColor()">Random Color</button> 
    <script src="js/app.js"></script>
</body>
</html>

```

### CSS

```


#set {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blueviolet;
    }


button {
    align-items: center;
    width: 200px;
    height: 100px;
    
}
```

### JS

```

function setRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0).toUpperCase();   

    let newColor = document.getElementById('set');
    let result = `#${randColor}`;
    newColor.style.backgroundColor = result;
    
    
    console.log("click working")
    return result
}

```



***
#### 3. ✨ 5th Core Challenge, update your resume [here](https://corecode.notion.site/CV-or-Resume-Boost-9092fff9f9cf4944a7c1717b11b09223)

* Completed Resume [here](https://drive.google.com/file/d/1xAiD-N_6TXDeRGdWXFnB2VXizmpQPsHH/view?usp=sharing)


***
***

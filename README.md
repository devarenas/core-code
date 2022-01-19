# core-code
Core Code bootcamp

## Tuesday 1/11/22

#### 1. Watch [this](https://www.youtube.com/watch?v=JNMy969SjyU) video about compilation and interpretation
* Completed

***
#### 2. Search and answer the question: Java language is compiled or interpreted?
* Java can be considered both compiled and interpreted language:
     * Compiler converts files to .java extension
     * Interpreter converts files to .class extension can be used an any OS
     
***
#### 3. Create an algorithm to calculate the equivalent of your local currency to USD
 
 ``` 
    1. Get amount in local currency (Quetzales) 
    2. Take amount and mutliply it by 7.70 to get USD
    3. currency is converted to USD
```
***
#### 4. Read about Pseudocode [here](https://www.freecodecamp.org/news/what-is-pseudocode-in-programming/), you can also find some examples [here](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week1/resources/PSEUDOCODE.md)
* Completed

***
#### 5. Why is pseudocode helpful?
* Pseudocode is helpful to not worry about the sintax a programming language use and stay focused on solve the problem so then we can translate it into a programming language we are using.

***
#### 6. Create a pseudocode to calculate the aproximated age of a user base on the year they born, (you can define a variable with the actual year if you need it, like for example i could define Y <-- 2022)

``` 
  1. Start
  1. currentYear = 2022
  2. Print "Enter Born Year"
  3. Read BornYear
  3. result = currentYear - BornYear
  4. Print result
  5. End
```
***
#### 7. Read about flowcharts [here](https://www.lucidchart.com/pages/es/que-es-un-diagrama-de-flujo)
* Completed

***
#### 8. Answer to the question: Why are flowcharts important to us as developers?
* Flowcharts help us ot to document all the procedure for what we are doing. They alse allow us to explain in a visual way to others the code we are creating, that way is easier to understand.

***
#### 9. Search about High-level languages and Low-level languages, you can start with [this video](https://www.youtube.com/watch?v=1vRPOp5p-qs)
* Completed

***
***
  
## Wednesday 1/12/22

#### 1. Learn about binary, decimal and hexadecimal numbers
* Completed

***
#### 2. Translate the year you where born to binary, decimal and hexadecimal

###### Decimal to binary
• Year I was born = 1991

|           |         |       |       |       |       |       |       |      |      |      |      |
| :---:     | :---:   | :---: | :---: | :---: | :---: | :---: | :---: | :-:  | :-:  | :-:  |  :-: |
| Division  | 1991/2  | 995/2 | 497/2 | 248/2 | 124/2 | 62/2  | 31/2  | 15/2 | 7/2  | 3/2  |  1/2 |
| Quotient  | 995.5   | 497.5 | 248.5 | 124   | 62    | 31    | 15.5  | 7.5  | 3.5  | 1.5  |  0.5 |
| Conversion| 1       | 1     | 1     | 0     | 0     | 0     | 1     | 1    | 1    | 1    |  1   |

• Order Binary from rigth to left 11111000111

###### Decimal to hexadecimal
• Year I was born = 1991

|           |          |        |       |       
|:---:      | :---:    | :---:  | :---: | 
| Division  | 1991/16  | 124/16 | 7/16  | 
| Quotient  | 124      | 7      | 0     | 
| Remainder | 7        | 1 2    | 7     |
| Conversion| 7        | C      | 7     |

• Order Hexadecimal from rigth to left 7C7

* Decimal     : 1991
* Binary      : 11111000111
* Hexadecimal : 7C7

***
#### 3. Translate 51966 into hexadecimal and binary

###### Decimal to binary

|           |          |         |         |        |        |         |        |       |        |        |       |       |       |     |     |     |
| :---:     | :---:    | :---:   | :---:   | :---:  | :---:  | :---:   | :---:  | :-:   | :-:    | :-:    |  :-:  | :--:  | :--:  | :-: | :-: | :-: |  
| Division  | 51966/2  | 25983/2 | 12991/2 | 6495/2 | 3247/2 | 1623/2  | 811/2  | 405/2 | 202/2  | 101/2  |  50/2 | 25/2  | 12/2  | 6/2 | 3/2 | 1/2 |
| Quotient  | 25983   | 12991.5 | 6495.5 | 3247.5   | 1623.5 | 811.5   | 405.5  | 202.5 | 101    | 50.5   |  25   | 12.5  | 6     | 3   | 1.5 | 0.5 |    
| Conversion| 0       | 1       | 1      | 1        | 1      | 1       | 1      | 1     | 0      | 1      |  0    | 1     | 0     | 0   | 1   | 1   |  

• Order Binary from rigth to left 1100101011111110

###### Decimal to hexadecimal
• Year I was born = 1991

|           |           |         |         |       |       
|:---:      | :---:     | :---:   | :---:   | :---: | 
| Division  | 51966/16  | 3247/16 | 202/16  | 12/16 |
| Quotient  | 3247      | 202     | 12      | 0     |
| Remainder | 14        | 15      | 10      | 12    |
| Conversion| E         | F       | A       | C     |

• Order Hexadecimal from rigth to left CAFE

* Decimal     : 51966
* Binary      : 1100101011111110
* Hexadecimal : CAFE

***
#### 4. Use a Low-level language, for example MIPS aseembler, to do so, you will need to follow [this](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week1/resources/MIPS.md) guide. We recomend to check the guide first but also [this](https://courses.cs.vt.edu/cs2506/Fall2014/Notes/L04.MIPSAssemblyOverview.pdf) presentation could be helpful.

* Completed

***
#### 5. Base on the examples and the guide of the low-level language: 
* 5.1 Create a program to add two numbers given by the user 
```
.data
	number1: .asciiz "\nIngrese el primer numero: "
	number2: .asciiz "\nIngrese el segundo numero: "
	result_message: .asciiz "\nEl resultado es de la suma es: "
.text
	main:
		li $v0, 4
		la $a0, number1
		syscall

		li $v0, 5
		syscall

		move $t0, $v0

		li $v0, 4
		la $a0, number2
		syscall

		li $v0, 5
		syscall

		move $t1, $v0
		
		add $t2, $t0, $t1
		
		li $v0, 4
		la $a0 result_message
		syscall

		li $v0, 1
		move $a0, $t2
		syscall     
```

* 5.2 Create a program that display your name

```
.data
    print_name: .asciiz "\nMi nombre es Carlos Arenas"
  .text
    main:
      li $v0, 4
      la $a0, print_name
      syscall 
````
***
***

## Thursday 1/13/22


#### 1. Search for real word applications of Javascript
* JavaScript can be used to create Web applications, server applications, games, web servers, etc.

***
#### 2. (optional but great) Watch [this](https://www.youtube.com/watch?v=LW6vQNE2jgc&t=1962s) video
* Done

***
#### 3. (optional but great) Watch [this](https://www.youtube.com/watch?v=KXkQJBASUOg) video
* Done

***
### 4. Follow the github course, you can find it [here](https://www.udacity.com/course/version-control-with-git--ud123)
* Course completed
  





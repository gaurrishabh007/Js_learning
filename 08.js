// typeof operator

// datatypes (primitive data types)
// string "narendra"
//number 2, 4, 5.6
// booleans
// undefined
// null
// BigInt
//Symbol

// convert number to string
// convert string to number

// let age = 26;
// let firstName = "Rishabh";
// console.log(typeof firstName);
// console.log(typeof age);

// // convert number to string
// age = age + "";
// console.log(typeof age);
// ("26");

// let age = 18;
// age = String(age);
// console.log(typeof age);

// // string concatenation

// let string1 = "rishabh";
// let string2 = "gaur";

// let fullName = string1 + " " + string2;
// console.log(fullName);

// let string1 = "17";
// let string2 = "18";
// let newString = string1 + string2;
// console.log(newString);

// // o/p 1718

// let string1 = "17";
// let string2 = "18";

// let newString = +string1 + +string2;
// console.log(newString);

// o/p 35

// template string

// let age = 22;
// let firstName = "rishabh";

// let aboutMe = " my name is " + firstName + " and my age is " + age;
// console.log(aboutMe);

// using template string

// let age = 26;
// let firstName = "narendra";
// let aboutMe = `my name is ${firstName} and my age is ${age}`;
// console.log(aboutMe);

// undefined
// null

// let firstName;
// console.log(typeof firstName); //undefined
// firstName = "gaurang";
// console.log(typeof firstName); // string

// null

// let myVariable = null;
// console.log(myVariable);
// myVariable = "ramanujam";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null); //it is bug

//Big Int

// let myNumber = BigInt(12677835248956756784567856);
// let sameNumber = 123n;
// console.log(myNumber);
// console.log(sameNumber);

// Boolean and comparision operator

//booleans
//True False
// let num1 = 5;
// let num2 = 7;
// console.log(num1 > num2);

// == vs ===

// == ==> double equal concentarate only in values

// let num1 = "7";
// let num2 = 7;
// // console.log(num1 == num2);

// // ==   ==> varifiy only numbers not data types
// // ===  ==> varify numbers as well as datatypes too

// // != vs !==

// console.log(num1 != num2);
// console.log(num1 !== num2);

// truthy and falsy values

// false
// ""
// null
// undefined
// 0

// if else condition
// let age = 18;

// if (age > 19) {
//   console.log("user can play football");
// } else {
//   console.log("user can play taken3");
// }

// to check the number it is even or odd?

// let num = 14;
// if (num % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("false");
// }

// falshy values

// let firstName = "rishabh";
// if (firstName) {
//   console.log("firstName");
// } else {
//   console.log("first name is kind a empty");
// }

// ternary operator

// let age = 15;
// let drink;

// if (age >= 20) {
//   drink = "coffee";
// } else {
//   drink = "milk";
// }
// console.log(drink);

// ternary operator / conditional operator

// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

// and or operator

// let firstName = "Rishabh";
// let age = 22;

// if (firstName[0] === "r" && age > 18) {
//   console.log("name starts with R and age is above 18");
// } else {
//   console.log("inside else");
// }

// let firstName = "Rishabh";
// let age = 22;

// if (firstName[0] === "r" || age > 18) {
//   console.log("name starts with R and age is above 18");
// } else {
//   console.log("inside else");
// }

// nested if else;
// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

let winningNumnber = 19;
userGuess = prompt("Guess a number");
console.log(typeof userGuess, userGuess);

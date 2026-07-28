// Check this in the browser
console.dir(Math);
console.log(Math.PI);
console.log(Math.abs(-5));


// round()
console.log(Math.round(4.78));
console.log(Math.round(99.2));

// floor()
console.log(Math.floor(45.99));
console.log(Math.floor(88.89));

// ceil()
console.log(Math.ceil(2.000001));

// random()
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// pow()
console.log(6 ** 2);
console.log(Math.pow(7, 2));

const myNum = 10;
console.log(Math.pow(myNum, 3));

const feature = "signal";

switch (feature) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid signal");
}

const mark = 50;
switch (true) {
    case (mark <= 14):
        console.log("poor performance");
        break;
    case (mark <= 29):
        console.log("fair performance");
        break;
    case (mark <= 39):
        console.log("good performance");
        break;
    case (mark <= 50):
        console.log("very good performance");
        break;
    default:
        console.log("not a valid grade");
}

const num1= 10;
const num2 = 5;
const sum  = num1 === 10 ? "even" : num2 === 5 ?;

for(let i= 1; i <=20; 1++) {
    console.log(i);
}






/* 
============= Class Excercise ============

- Create two variables named num1 and num2 and assign them any numbers.
- Calculate the sum of the two numbers and store it in a variable called sum.

- Use a ternary operator to check if the sum is even or odd.

Display the following in the console:
- The value of num1
- The value of num2
- The sum
- Whether the sum is Even or Odd

Print numbers from 1 to 20.
Print numbers from 20 down to 1.
Print all even numbers between 1 and 50.
Print all odd numbers between 1 and 50.
Print your name 10 times.
Calculate the sum of numbers from 1 to 100.
Print the multiplication table of 7.

*/

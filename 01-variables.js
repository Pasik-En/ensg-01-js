/* 
camelCase: firstName, isUserLoggedIn

snake_case: first_name, country_of_residence

kebab-case: first-name, is-user-logged-in

PascalCase: FirstName, IsUserLoggedIn
*/

// Rules for naming variables
// Good: firstName, lastName, _accountBalance, $user
// Bad: %firstName, ^user, *lastName

// Two things about naming variables
// 1. Declaration
// 2. Assignment

// Example
/* 
var myName = "John Doe"
let count;
*/

var fullName = "John Doe";
var fullName = "Amanda Sax";
fullName = "Jonathan Window";
console.log(fullName);

// let 
/* 
- It is block scoped
- It can be reassigned
- It cannot be redeclared
- It allows declaring a variable without assignment
*/

let count = 10;
count = 15;
console.log(count);

let myName;
console.log(myName);


// const
/* 
- It is block scoped
- It does not support reassignment
- It does not support redeclaration
- It does not allow declaring a variable without assignment
*/
// const user;

// Scoping
// Var has a function scope
// let and const have a block scope

// Global
// local - function or block
//  A block is anything inside a curly brace {  }
let userName = "John Doe";
var isUserLoggedIn = true;

{
    console.log(userName);
    const person = "John Williams";
    console.log(person);

    var isSchoolOpen = false;
}

console.log(isSchoolOpen);


let age = 45;
console.log(age);
age = 36;

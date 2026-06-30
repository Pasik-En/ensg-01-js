// If statements
// In conditional statements we usually make use of comparison operators and logical operators

const userAge = 44;

if (userAge >= 18) {
    console.log("User can vote");
}

console.log("Other codes continues to run...");


// If else statements
const value = 7;

if (value % 2 === 0) {
    console.log(`${value} is even`);
} else {
    console.log(`${value} is odd`);
}

// Class Exercise
const score = 45;

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Else if
const buttonType = "";

if (buttonType === "primary") {
    console.log("Use the primary button");
} else if (buttonType === "outline") {
    console.log("Use the outline button");
} else {
    console.log("Use the normal button");
}

// 20 - 30 (Great score)
// 15 - 19 (Good score)
// 0 - 14 (Can do better)

const studentScore = 25;

if (studentScore > 30) {
    console.log("Above range");
} else if (studentScore >= 20 && studentScore <= 30) {
    console.log("Great score");
} else if (studentScore >= 15 && studentScore <= 19) {
    console.log("Good score");
} else {
    console.log("Can do better");
} 

/* 
================ Class Activity ====================
A school grading system works like this:

90 and above → Grade A
70 to 89 → Grade B
50 to 69 → Grade C
Below 50 → Fail

Write a JavaScript if...else if...else statement that checks the score and prints the correct grade.

*/


// Switch statements
/* 
0 = Monday
1 = Tuesday
2 = Wednesday
3 = Thursday
4 = Friday
5 = Saturday
6 = Sunday

*/
const day = 0;
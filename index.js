console.log("Hello World!");
console.log(5);

alert("My first JavaScript alert");

prompt("What is your full name?");

confirm("I am above 18 years of age");

console.log(prompt("What is your name?"));

// Write a program that checks a user’s role using a switch statement.
// The role can be "admin", "editor", "viewer", or any other value.
// Print:
// "Full access granted" for "admin"
// "Limited edit access" for "editor"
// "Read-only access" for "viewer"
// "No access" for any other role


// const userRole = "Editor";

// switch (userRole) {

// }



// Create a program that takes a variable called signal.
// If signal is "red", print "Stop"
// If "yellow", print "Get ready"
// If "green", print "Go"
// For any other value, print "Invalid signal"


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
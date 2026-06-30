
// Task 1 - Employee Name

let employeeName = prompt("What is your name?");
console.log(employeeName);
document.writeln("Welcome " + employeeName );


// Task 2 - Company Entry Confirmation

let join = confirm("Are you ready to join today's JavaScript training?");
console.log(join);



// Task 3 - Customer Greeting
alert("Welcome to Stackly ...!");
console.log("Customer entered the website.");


// Task 4  Student Details

let studentName = prompt("Enter Student Name:");
let studentAge = prompt("Enter Student Age:");

console.log("Student Name:"+ studentName);
console.log("Student Age:"+ studentAge);

// Task 5 - Product Price

let productPrice = 15000;
productPrice = 16500;

console.log("Updated Product Price:", productPrice);



// Task 6 - Login Validation

let username = prompt("Enter Username:");

if (username === "" || username === null) {
    console.warn("Warning: Username is empty.");
} else {
    console.log("Login Successful: " + username);
}


// Task 7 - Website Maintenance

let a = "Website is under maintenance."
alert(a);
console.error("Error: Website is currently unavailable.");



// Task 8 - Feedback Collection

let feedback = prompt("How was today's JavaScript session?");
console.log("Feedback:", feedback);

document.writeln("Thank you for your feedback!");



// Task 9 - Profile Information

let profileName = prompt("Enter Your Name:");
let city = prompt("Enter Your City:");
let favoriteLanguage = prompt("Enter Your Favorite Programming Language:");

console.log("Name:", profileName);
console.log("City:", city);
console.log("Favorite Programming Language:", favoriteLanguage);


// Task 10 - Mini Registration Form

let fullName = prompt("Enter Full Name:");
let email = prompt("Enter Email:");
let mobile = prompt("Enter Mobile Number:");

console.log("===== Registration Details =====");
console.log("Name   :", fullName);
console.log("Email  :", email);
console.log("Mobile :", mobile);

alert("Registration Successful...!");

// Task 1 - User Introduction

let name = prompt("What is your name?");
let age = prompt("What is your age?");

console.log("My name is "+name);
console.log("My age is "+age);

// Task 2 - Degree Confirmation


let degree = confirm("Did you complete degree?");
if(degree == true) {
    console.log("Degree Completed")
}
else {
    console.log("Degree Not Completed")
}

// Task 3 - Mobile Price


let price = 15000;
let discount = 2000;

console.log("Final Price : "+(price-discount));

// Task 4 - Age Eligibility

let age1 = prompt("Your age?");
if(age1 >= 18){
    console.log("Eligible for Vote");
}
else {
console.log("Not Eligible for Vote");
}

// Task 5 - Shopping Cart

let cart = ["Rice","Milk","Sugar","Tea Powder"];

console.log(cart[0]);
console.log(cart[cart.length-1]);
console.log(cart.length);

// Task 6 - Student Details

let student = {
    name : "Mutharasu",
    age : 26 ,
    course : "Developer"
}

console.log(student.name);
console.log(student.course);

// Task 7 - Employee Salary Calculator


let salary = 25000;
let bonus = 5000;

let totalSalary = salary + bonus;

console.log("Total Salary : " + totalSalary);

// Task 8 - Website Login Check


let userName = prompt("Your userName");
let password = prompt("Your Password");


if(userName == "muthu" && password == "0824") {
    console.log("Login Successful");
}
else {
    console.log("Invalid Credentials");
}

// Task 9 - Food Delivery App

let foodPrice = 350;
let deliveryCharge = 50;
 
let totalBill = foodPrice + deliveryCharge;
console.log("Total Bill : " + totalBill);

let gst = totalBill * 5/100;
console.log("Gst : " + gst);

let grandTotal = totalBill + gst;
console.log("Grand Total : " + grandTotal);

// 🏆 Level 4 (Company Interview Style)


let product = {
    name : "Laptop",
    price : 50000,
    brand : "Dell",
    stock : true
}
console.log("Product Name : " + product.name);
console.log("Brand : " +product.brand);
console.log("Price : " + product.price);
console.log("Stock Available : " + product.stock);

// Task 11 - Attendance System


let attendance = confirm("Present?");
if(attendance) {
    console.log("Attendance Marked");
}
else {
    console.log("Absent");
}


// Task 12 - Banking Application


let currentBalance = prompt("Your Current Balance?");
let withdrawAmount = prompt("your Withdraw Amount?");

if(withdrawAmount <= currentBalance) {
    remainingBal = currentBalance - withdrawAmount;
    console.log("Transaction Successful");
    console.log("Remaining Balance : "+ remainingBal);
}
else {
    console.log("Insufficient Balance");
}

// 🔥 Challenge Task (Mix Everything)

let empDetails = {
   name : "Mutharasu",
   age : 26,
   department : "IT",
   salary : 40000
}
console.log("Employee Name : " + empDetails.name);
console.log("Employee Age : " + empDetails.age);
console.log("Employee Department : " + empDetails.department);
console.log("Employee Annual Salary : " + empDetails.salary * 12);

if(empDetails.salary > 30000) {
    console.log("Senior Employee");
}
else {
    console.log("junior Employee");
}
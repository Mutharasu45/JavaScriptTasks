// 🟢 Task 1 - Company Welcome Function

function company() {
    console.log("Welcome to Stackly IT");
    
}
company();

// 🟢 Task 2 - Employee Details


function emp(name, department, salary) {
    console.log("Employee Name : " + name);
    console.log("Department : " + department);
    console.log("Salary : " + salary);
    
}
emp("Mutharasu", "Full Stack Developer", 40000);

// 🟢 Task 3 - Calculate Bonus


function amount() {
    let salary = 40000;
    let bonous = 5000;
    console.log("Total Salary : " + (salary + bonous));
}
amount();

// 🟢 Task 4 - Student Result

function result(mark) {

    if(mark >= 35) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }
}
result(34);

// 🟢 Task 5 - Return Employee Name

function name() {
    return ("Muthu");
}

let store = name();
console.log(store);

// 🟢 Task 6 - Product Price

function price() {
    return 25000;
}
let cal = price();

let gst = cal * 5 / 100;
let totalSalary = cal + gst;
console.log("Total Salary : " +totalSalary);


// 🟢 Task 7 - Scope
// Predict the output.
function demo(){

    if(true){

        var a = 10;
        let b = 20;
        const c = 30;

    }

    console.log(a);

}
demo();
// Question
// •	Which variable prints?
        // var a = 10;

// •	Which variables give an error?
        // b, c - Uncaught ReferenceError

// •	Why?
        //    var has function scope. It is accessible anywhere.
        //    let has block scope. It is accessible only inside the { } block.
        //     const also has block scope. It is accessible only inside the { } block.



// 🟢 Task 8 - Hoisting
// Predict the output.

// console.log(a);
// var a = 100;

// console.log(b);
// let b = 200;


// var   

// Hoisted                          
// Initial value is undefined       
// Access before declaration -> undefined       

// let

//  Hoisted
// No initial value before declaration (TDZ - Temporal Dead Zone)
// undefinedAccess before declaration → ReferenceError

// 🟢 Task 9 - Named Function

function name(n) {
    console.log(n);

}
name("Good Morning");

// 🟢 Task 10 - Anonymous Function

let anonymous = function(a) {
    console.log(a);
    
}
anonymous("Welcome Employee")


// 🟢 Task 11 - Arrow Function

let arrow = (a) => {
    console.log(a);
    
}
arrow("JavaScript Training");


// 🟢 Task 12 - Return Function

function turn() {

    return "Stackly";
}
let store1 = turn();
console.log("Welcome " + store1);


// 🟢 Task 13 - Higher Order Function

function function1() {

    console.log("Login Successful");
}
function function2() {

    console.log("Dashboard Loaded");
}
function1(function2());


// 🟢 Task 14 - Callback Function


function order(callback) {
     console.log("Order Received");
     callback();
}
function food(callback) {
     console.log("OPreparing Food");
     callback();
}
function delivery() {
     console.log("Delivered");
     
}
order(function() {
    food(delivery)
});


// 🟢 Task 15 - Generator Function


function* couponGenerator() {
    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "Better Luck Next Time";
}

let coupons = couponGenerator();

console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);


// 🟢 Task 16 - Return + Generator

function* fruits() {
    yield "Apple";
    yield "Orange";
    yield "Banana";
}

let fruit = fruits();

console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);

// 🟢 Task 17 - Currying

function discount(price) {
    return function (percentage) {
        let finalPrice = price - (price * percentage / 100);
        console.log("Final Price :", finalPrice);
    };
}

discount(1000)(10);


// 🟢 Task 18 - Company Salary

function salary(basicSalary) {

    return function (bonus) {

        return function (allowance) {

            let totalSalary = basicSalary + bonus + allowance;
            console.log("Total Salary :", totalSalary);
        };
    };
}

salary(30000)(5000)(2000);

// 🟢 Task 19 - Real-Time Login System


function enterUsername() {

    console.log("Enter Username");
    verifyPassword();
}

function verifyPassword() {

    console.log("Verify Password");
    loginSuccessful();
}

function loginSuccessful() {

    console.log("Login Successful");
    loadDashboard();
}

function loadDashboard() {

    console.log("Load Dashboard");
}
enterUsername();



// ⭐ Mini Project (Based on Your Syllabus)
// Employee Salary Management System
// Create a console-based program that includes:
// 1.	Display employee details.
// 2.	Calculate salary + bonus using a function.
// 3.	Return the final salary.
// 4.	Use an arrow function to print a welcome message.
// 5.	Use an anonymous function to print the department.
// 6.	Use a higher-order function to simulate login.
// 7.	Use a callback function to load the employee dashboard.
// 8.	Generate monthly bonus coupons using a generator function.
// 9.	Apply tax calculation using currying.
// 10.	Print the final employee report.



// Employee Object
let employee = {
    id: 101,
    name: "Mutharasu",
    department: "IT",
    salary: 30000
};

// 1. Display Employee Details
function displayEmployee() {
    console.log("Employee ID :", employee.id);
    console.log("Employee Name :", employee.name);
    console.log("Department :", employee.department);
    console.log("Salary :", employee.salary);
}

// 2 & 3. Calculate Salary + Bonus and Return Final Salary
function calculateSalary(salary, bonus) {
    return salary + bonus;
}

let finalSalary = calculateSalary(employee.salary, 5000);

// 4. Arrow Function
const welcome = () => {
    console.log("Welcome", employee.name);
};

// 5. Anonymous Function
let showDepartment = function () {
    console.log("Department :", employee.department);
};

// 6 & 7. Higher Order + Callback Function
function login(callback) {
    console.log("Login Successful");
    callback();
}

function dashboard() {
    console.log("Employee Dashboard Loaded");
}

// 8. Generator Function
function* bonusCoupons() {
    yield "₹500 Coupon";
    yield "₹1000 Coupon";
    yield "₹1500 Coupon";
}

let coupon = bonusCoupons();

// 9. Currying - Tax Calculation
function tax(taxPercent) {
    return function (salary) {
        return salary - (salary * taxPercent / 100);
    };
}

let salaryAfterTax = tax(10)(finalSalary);

// 10. Final Employee Report
displayEmployee();
welcome();
showDepartment();

console.log("Final Salary :", finalSalary);

login(dashboard);

console.log("Coupon 1 :", coupon.next().value);
console.log("Coupon 2 :", coupon.next().value);
console.log("Coupon 3 :", coupon.next().value);

console.log("Salary After Tax :", salaryAfterTax);

console.log("------ Employee Report ------");

console.log("Name :", employee.name);
console.log("Department :", employee.department);
console.log("Final Salary :", finalSalary);
console.log("Salary After Tax :", salaryAfterTax);
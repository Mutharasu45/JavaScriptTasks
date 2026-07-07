
// Task 1 - Employee Bonus (Spread Operator)


let employee = {
     name: "Naveen",
     salary: 35000
 }

let employee2 = { 
    bonus : 5000,
    department : "Developer"
 }
 
let totalEmp = {...employee, ...employee2};

  console.log(totalEmp);
 

//  Task 2 - Shopping Cart (Rest Operator)


function bill(...a) {

  let total = 0;
   for(let b of a) {
      total += b;
   }

console.log("Total : " ,total);
console.log("Item : " ,a.length);
   
}
bill(10,20,30,40);

// Task 3 - Student Details (Object Destructuring)

let student = {
   name:"Rahul",
   age:22,
   course:"MERN",
   city:"Chennai"
}
let destructure = {name, age, course, city} = student;
console.log(destructure);

// Task 4 - Online Food Order

let foods = ["Pizza","Burger","Fries"];

   foods.push("coke","Ice Cream");
   foods.splice(2, 1)
   console.log(foods);
     

//      Task 5 - Bank Transactions

let transactions = [1000,2000,3000,4000];
     transactions.shift();
     transactions.unshift(500)
     console.log(transactions);

// Task 6 - Company Departments

let dept1=["HR","Sales"];
let dept2=["Developer","Testing"];

let con = dept1.concat(dept2);
console.log(con);


// Task 7 - Product Search

let products = ["Laptop","Mouse","Keyboard","Monitor"];

if(products.includes("Keyboard")) {
   console.log("Available");
}
else {
   console.log("Not Available");  
}

// Task 8 - User Login (Callback Function)


function login (callback) {
console.log("Login Success");
callback();
}
function dashboard() {
console.log("Dashboard Opened");  
}
login(dashboard);

// Task 9 - Coupon Generator (Generator Function)

function * coupons() {

    yield "WELCOME10";
    yield "SAVE20";
    yield "MEGA50";
    yield "FREE100";
}
let coupon = coupons();
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


// Task 10 - Course Registration (Currying)

function course1(courseName) {

    return function(batch) {

        return function(room) {

            console.log("Course :", courseName);
            console.log("Batch :", batch);
            console.log("Room :", room);       

        }
    }
}
course1("JavaScript")("Morning")("Batch-36");


// Task 11 - Movie Collection

let movies = ["Leo", "GOAT", "Dragon", "Retro", "Coolie"];
console.log(movies.slice(2, 4));


// Task 12 - Employee IDs

let ids = [101, 102, 103, 104, 105];
ids.splice(2, 2, 501, 502);
console.log(ids);


// Task 13 - Sort Product Prices

let price = [5000, 250, 700, 12000, 50];
price.sort((a, b) => a - b);
console.log(price);

// Task 14 - Nested Categories

let data = ["Electronics",["Mobiles",["Samsung","Apple"]]];

let [category, [subCategory, [brand1, brand2]]] = data;

console.log(category, subCategory, brand1, brand2);

// Task 15 - Company Team

let developers = ["John", "David"];
let designers = ["Ram", "Kiran"];

let team = [...developers, ...designers];
console.log(team);


// Task 16 - Return Function

function calculateSalary(salary, bonus) {
    return (salary + bonus);

}

let finalSalary = calculateSalary(50000, 5000);
console.log("Final Salary:", finalSalary);


// Task 17 - Scope Checking


if (true) {
    var company = "Stackly";
    let designation = "Java Developer";
    const salary = 50000;
}
// Company = var

try {
   console.log("Company:", company); // var -> Accessible outside the block.
}
catch (error) {
   console.log(error.message); 
}
// Designation = let

try {
    console.log("Designation:", designation);  // let -> Block scoped (Error outside).
} 
catch (error) {
    console.log(error.message);
}
// Salary = const

try {
    console.log("Salary:", salary);  // const -> Block scoped (Error outside).
}
 catch (error) { 
    console.log(error.message);
}

// Task 18 - Customer Orders

let orders = [ "Pizza", "Burger", "Pizza", "Sandwich", "Pizza"];

console.log("First Index of Pizza:", orders.indexOf("Pizza"));
console.log("Last Index of Pizza:", orders.lastIndexOf("Pizza"));


// Task 19 - Flatten Product Categories

let items = [1,2,[3,4,[5,6]]];

let flatItems = items.flat(Infinity);
console.log(flatItems);

// Task 20 - Mini Shopping Cart Challenge

let cart = ["Mouse", "Keyboard"];

cart.push("Monitor"); 
console.log("Push : ",cart)  

cart.unshift("Laptop");
console.log("UnShift : ", cart);

cart.splice(2, 1);
console.log("Remove Keyword : ", cart);

let exists = cart.includes("Mouse");
console.log("Exists Mouse : ", exists);

let accessories = ["Webcam", "Speaker"];
let merge = [...cart, ...accessories];

console.log("Completed Cart:", merge);